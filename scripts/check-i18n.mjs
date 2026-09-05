import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Validate the final static export, including reciprocal language links.
const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, process.argv[2] ?? 'out');
const json = async path => JSON.parse(await readFile(resolve(root, path), 'utf8'));
const fr = await json('content/locales/fr.json');
const en = await json('content/locales/en.json');
const projects = (await json('content/projects.json')).projects;
const translations = await json('content/locales/projects.en.json');
assert.deepEqual(Object.keys(en).sort(), Object.keys(fr).sort(), 'Dictionary keys differ');
for (const [key, value] of Object.entries(fr)) {
  assert.equal(typeof en[key], typeof value, `Translation type differs: ${key}`);
  if (Array.isArray(value)) assert.equal(en[key].length, value.length, `Missing translated items: ${key}`);
}
for (const project of projects.filter(p => p.published)) {
  assert.ok(translations[project.id]?.shortDescription, `Missing project translation: ${project.id}`);
  assert.ok(translations[project.id]?.fullDescription.length, `Missing project details: ${project.id}`);
  if (project.caseStudy) assert.equal(translations[project.id].caseStudy?.length, project.caseStudy.length);
}
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const pathFor = (path, locale) => locale === 'fr' ? path : path === '/' ? '/en' : `/en${path}`;
const urlFor = path => `https://vivieng.com${path}`.replace(/\/$/, '');
const routes = ['/', '/projects', ...projects.filter(p => p.published).map(p => `/project/${p.id}`)];
const expectedSitemap = [];
for (const locale of ['fr', 'en']) {
  for (const basePath of routes) {
    const route = pathFor(basePath, locale);
    const html = await readFile(resolve(out, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');
    const meta = Object.fromEntries([...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => { const a = attrs(tag); return [a.name ?? a.property, a.content]; }));
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attrs(tag));
    const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) => attrs(tag));
    const languages = Object.fromEntries(links.filter(a => a.rel === 'alternate').map(a => [a.hrefLang ?? a.hreflang, a.href.replace(/\/$/, '')]));
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
    assert.equal(attrs(html.match(/<html\b[^>]*>/)?.[0] ?? '').lang, locale, `${route}: document language`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one H1`);
    assert.deepEqual(languages, { fr: urlFor(basePath), en: urlFor(pathFor(basePath, 'en')), 'x-default': urlFor(basePath) }, `${route}: reciprocal hreflang`);
    assert.equal(links.filter(a => a.rel === 'canonical').length, 1);
    assert.equal(links.find(a => a.rel === 'canonical').href.replace(/\/$/, ''), urlFor(route));
    assert.equal(meta['og:url'].replace(/\/$/, ''), urlFor(route));
    assert.equal(meta['og:locale'], locale === 'fr' ? 'fr_FR' : 'en_GB');
    assert.equal(title, meta['og:title']); assert.equal(title, meta['twitter:title']);
    assert.equal(meta.description, meta['og:description']); assert.equal(meta.description, meta['twitter:description']);
    assert.equal(meta['og:image'], meta['twitter:image']);
    await access(resolve(out, new URL(meta['og:image']).pathname.slice(1)));
    const alternateLocale = locale === 'fr' ? 'en' : 'fr';
    assert.ok(anchors.some(a => a.hrefLang === alternateLocale && a.href === pathFor(basePath, alternateLocale)), `${route}: language switch keeps the current page`);
    for (const a of anchors.filter(a => !a.hrefLang && a.href?.startsWith('/'))) {
      const path = a.href.split('#')[0];
      if (/\.[a-z0-9]+$/i.test(path)) continue; // Shared assets such as the French CV.
      assert.equal(path === '/en' || path.startsWith('/en/'), locale === 'en', `${route}: cross-language internal link ${a.href}`);
      const target = resolve(out, path === '/' ? 'index.html' : `${path.slice(1)}.html`);
      await access(target);
      const fragment = a.href.split('#')[1];
      if (fragment) assert.ok((await readFile(target, 'utf8')).includes(`id="${fragment}"`), `${route}: missing section ${a.href}`);
    }
    if (basePath === '/') {
      const cards = anchors.filter(a => /^(\/en)?\/project\//.test(a.href ?? ''));
      assert.deepEqual(cards.map(a => a.href), [pathFor('/project/manga-hive', locale)]);
      assert.ok(html.includes(locale === 'en' ? 'CV (French)' : 'Mon CV'));
    }
    if (locale === 'en') {
      const text = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '').replace(/<[^>]*>/g, ' '));
      for (const french of ['Développeur', 'Mon projet indépendant', 'Compétences', 'Actuellement en poste', 'Me contacter', 'Découvrir le projet', 'Tous droits réservés']) {
        assert.ok(!text.includes(french), `${route}: untranslated content: ${french}`);
      }
    }
    expectedSitemap.push(urlFor(route));
    console.log(`✓ ${route}: language, content, links and SEO`);
  }
}
const sitemap = await readFile(resolve(out, 'sitemap.xml'), 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, u]) => u.replace(/\/$/, '')).sort(), expectedSitemap.sort());
assert.equal((sitemap.match(/<xhtml:link\b/g) ?? []).length, expectedSitemap.length * 3);
for (const project of projects.filter(p => !p.published)) {
  for (const locale of ['fr', 'en']) await assert.rejects(access(resolve(out, `${pathFor(`/project/${project.id}`, locale).slice(1)}.html`)));
}
console.log('✓ Both dictionaries, project translations and bilingual sitemap verified.');
