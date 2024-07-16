import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillsProps = {
  title: string;
  description: string;
  technologies: Array<string>;
};

export const Skills = ({ title, description, technologies }: SkillsProps) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <h3 className="text-lg text-center font-semibold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-sm ">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} className="text-background">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);
