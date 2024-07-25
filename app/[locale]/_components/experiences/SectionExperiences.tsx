import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { Experiences } from "./Experiences";
import { Title } from "../Title";

export const SectionExperiences = () => {
  const descriptionPoints = [
    "Conception de deux applications web (SPA) : Développées avec Vue 3, ces applications innovantes incluent des fonctionnalités de fidélisation client via l'usage de QR codes et une interface intuitive pour la consultation des points de fidélité et l'obtention de récompenses. J'ai utilisé la Composition API et Pinia pour la gestion d'état, assurant des performances optimales et une expérience utilisateur solide.",
    "Développement site vitrine : Mise en œuvre d'une solution Nuxt.js pour un restaurant partenaire, avec un accent sur l'accessibilité et le SEO. Ce site allie esthétique moderne et fonctionnalités avancées pour présenter le restaurant de manière engageante, entraînant une meilleure visibilité en ligne et un taux de conversion accru.",
    "Intégration API : Collaboration étroite avec les équipes back-end pour définir les besoins en données et implémenter une API interne, facilitant la récupération et la gestion des données en temps réel, essentielles pour les fonctionnalités de l'application et la mise à jour dynamique des informations sur les menus.",
  ];

  return (
    <Section className="flex flex-col gap-4" title="Expériences" rotate="rotate-90" position="-left-20">
      <Title title="Expériences" />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <Card className="flex flex-col p-4 h-full">
            <div className="flex-grow overflow-auto">
              <Experiences
                imageSrc="/card-it.jpg"
                title="SpinforEat"
                descriptionPoints={descriptionPoints}
                startingDate="Août 2022"
                endingDate="Décembre 2023"
                role="Développeur front-end"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
