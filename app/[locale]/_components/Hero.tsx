import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("HeroComponent");
  return (
    <div className="w-full min-h-[calc(100vh-68px)] md:h-[calc(100dvh-68px)] bg-gray-200">
      <Section className="flex flex-col xl:flex-row justify-center items-center h-[75vh] md:h-full">
        <div className="flex-1 order-2 xl:order-1 flex flex-col xl:justify-center">
          <h2 className="text-center lg:text-left text-4xl lg:text-5xl font-bold mb-2 text-customGold">VIVIENG</h2>
          <h3 className="text-center lg:text-left text-lg lg:text-1xl mb-4 text-gray-600">
            Développeur Web Full Stack {t("title")}
          </h3>
          <p className="mb-6 text-gray-700 text-justify">{t("description")}</p>
          <div className="text-center lg:text-left">
            <Button className="gap-2 inline-flex" asChild>
              <Link href="https://www.vivieng.com/images/CV_Grenier_Vivien_2024.pdf">
                VOIR MON CV
                <File className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 order-1 xl:order-2 flex items-end justify-center lg:justify-end h-full">
          <picture>
            <source media="(max-width: 1200px)" srcSet="/vivieng-hero-small.jpg" />
            <Image
              src="/vivieng-hero-big.png"
              alt="Vivien Grenier"
              width={1000}
              height={1500}
              priority
              className="w-auto h-40 xl:h-[80vh] xl:max-h-[80vh] 2xl:h-[70vh] 2xl:max-h[70vh] max-w-none object-cover rounded-full xl:rounded-none"
            />
          </picture>
        </div>
      </Section>
    </div>
  );
};
