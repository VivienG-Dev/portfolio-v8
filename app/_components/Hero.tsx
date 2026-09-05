import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AvailabilityStatus } from "./AvailabilityStatus";

export const Hero = () => (
  <div className="overflow-hidden border-b border-customGold/15 bg-gradient-to-br from-customGold/10 via-background to-background">
    <Section className="grid items-center gap-10 py-12 md:grid-cols-[1.3fr_1fr] md:py-20 lg:py-24">
      <div className="max-w-2xl">
        <AvailabilityStatus status="busy" />
        <p className="mt-7 text-sm font-medium tracking-widest uppercase text-muted-foreground">Vivien Grenier</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Développeur full stack <span className="text-customGold-dark dark:text-customGold">JavaScript.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Je conçois des applications web avec Vue/Nuxt et NestJS, de l’interface à la mise en production.
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">Une attention particulière aux interfaces, à la fiabilité et aux personnes qui les utilisent.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2"><Link href="#projets">Voir mes projets <ArrowDown size={16} /></Link></Button>
          <Button asChild size="lg" variant="outline" className="gap-2"><Link href="/CV_Grenier_Vivien_2025.pdf">Mon CV <FileText size={16} /></Link></Button>
        </div>
      </div>
      <div className="hidden justify-center md:flex">
        <div className="relative overflow-hidden rounded-[2rem] bg-customGold/10 ring-1 ring-customGold/20">
          <Image src="/vivieng-hero-big.png" alt="Vivien Grenier" width={1000} height={1500} priority className="h-[400px] w-[320px] object-cover object-top lg:h-[460px] lg:w-[360px]" />
        </div>
      </div>
    </Section>
  </div>
);
