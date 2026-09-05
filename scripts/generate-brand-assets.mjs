import { readFile, writeFile } from 'node:fs/promises';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';

const root = new URL('../', import.meta.url);
const gold = '#c59d5f';
const ink = '#171717';
const paper = '#f5f5f5';
const fonts = await Promise.all([
  ['Regular', 400], ['Medium', 500], ['SemiBold', 600], ['Bold', 700],
].map(async ([name, weight]) => ({
  name: 'Geist', weight, style: 'normal',
  data: await readFile(new URL(`node_modules/geist/dist/fonts/geist-sans/Geist-${name}.ttf`, root)),
})));

// The approved vector assets are the source of truth for every brand placement.
const logo = await readFile(new URL('public/branding/logo-vivieng.svg', root), 'utf8');
const darkLogo = await readFile(new URL('public/branding/logo-vivieng-dark.svg', root), 'utf8');
const monogram = await readFile(new URL('public/branding/logo-vg.svg', root), 'utf8');
const dataUri = markup => `data:image/svg+xml;base64,${Buffer.from(markup).toString('base64')}`;
await writeFile(new URL('public/vivieng-logo.svg', root), logo);
await writeFile(new URL('public/vivieng-logo-dark.svg', root), darkLogo);
await writeFile(new URL('public/vivieng-mark.svg', root), monogram);

const box = (style, ...children) => h('div', { style: { display: 'flex', ...style } }, ...children);
const card = box({ width: '100%', height: '100%', background: paper, color: ink, fontFamily: 'Geist', position: 'relative', flexDirection: 'column', padding: '52px 64px' },
  h('img', { src: dataUri(logo), width: 245, height: 64 }),
  box({ position: 'absolute', top: 62, right: 64, fontSize: 15, letterSpacing: '3px', color: '#6b6b6b' }, 'PORTFOLIO'),
  box({ position: 'absolute', right: 56, top: 188, opacity: 0.07 }, h('img', { src: dataUri(monogram), width: 340, height: 286 })),
  box({ position: 'relative', marginTop: 68, flexDirection: 'column' },
    box({ position: 'absolute', left: 17, top: -25, fontSize: 79, fontWeight: 700, letterSpacing: '-4px', color: 'rgba(0,0,0,0.055)' }, 'Vivien Grenier'),
    box({ alignItems: 'center', gap: 22 },
      box({ width: 5, height: 51, borderRadius: 3, background: gold }),
      box({ fontSize: 70, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-3px' }, 'Vivien Grenier'),
    ),
    box({ marginTop: 26, paddingLeft: 27, flexDirection: 'column', fontSize: 40, lineHeight: 1.25, letterSpacing: '-1px', fontWeight: 500 },
      'Développeur full stack',
      h('span', { style: { color: '#a17c3e' } }, 'JavaScript.'),
    ),
  ),
  box({ position: 'absolute', bottom: 50, left: 64, right: 64, borderTop: '1px solid #dedbd5', paddingTop: 24, alignItems: 'center', justifyContent: 'space-between' },
    box({ fontSize: 19, color: '#626262' }, 'Vue / Nuxt · NestJS · React Native'),
    box({ fontSize: 20, fontWeight: 500 }, 'vivieng.com', h('span', { style: { color: gold, marginLeft: 13 } }, '↗')),
  ),
);
const response = new ImageResponse(card, { width: 1200, height: 630, fonts });
await writeFile(new URL('public/vivieng-meta-image.png', root), Buffer.from(await response.arrayBuffer()));

// ICO containing a PNG entry, supported by modern browsers and generated from the same mark.
const icon = new ImageResponse(box({ width: '100%', height: '100%', background: paper, alignItems: 'center', justifyContent: 'center', borderRadius: 24 }, h('img', { src: dataUri(monogram), width: 104, height: 88 })), { width: 128, height: 128 });
const iconPng = Buffer.from(await icon.arrayBuffer());
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header[6] = 128; header[7] = 128;
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(iconPng.length, 14); header.writeUInt32LE(22, 18);
await writeFile(new URL('app/favicon.ico', root), Buffer.concat([header, iconPng]));
console.log('Logo variants, monogram, OG card (1200 × 630) and favicon generated.');
