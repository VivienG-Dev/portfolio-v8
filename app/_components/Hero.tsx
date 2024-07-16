import { Section } from "./Section";
import { Code } from "@/components/code";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-dvh bg-gray-200">
      <Section className="flex flex-col xl:flex-row justify-center items-center h-full">
        <div className="flex-1 order-2 xl:order-1 flex flex-col text-center xl:justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-customGold">VIVIENG</h2>
          <h3 className="text-lg lg:text-1xl mb-4 text-gray-600">Développeur Web front-end freelance</h3>
          <p className="mb-6 text-gray-700">
            Je suis un <Code>développeur web</Code> et <Code>photographe</Code> basé en France.
          </p>
          <Link href="https://www.linkedin.com/in/vivien-grenier/">
            <Button className="gap-2">
              VOIR MON CV
              <File className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="flex-1 order-1 xl:order-2 flex items-end justify-center lg:justify-end h-full">
          <picture className="h-full w-full flex items-end justify-center xl:justify-end">
            <source media="(max-width: 1200px)" srcSet="/vivieng-hero-small.jpg" />
            <Image
              src="/vivieng-hero-big.png"
              alt="Vivien Grenier"
              width={1000}
              height={1500}
              priority
              className="w-auto h-40 xl:h-[80vh] xl:max-h-[80vh] max-w-none object-cover rounded-full xl:rounded-none"
            />
          </picture>
        </div>
      </Section>
    </div>
  );
};
