import Link from "next/link";
import Image from "next/image";

type ExperiencesProps = {
  title: string;
  description?: string;
  imageSrc: string;
  role: string;
  startingDate: string;
  endingDate: string;
  descriptionPoints?: string[];
};

export const Experiences = ({
  title,
  description,
  imageSrc,
  startingDate,
  endingDate,
  role,
  descriptionPoints,
}: ExperiencesProps) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-sm flex items-center justify-center overflow-hidden p-2">
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="rounded-sm"
            sizes="(max-width: 768px) 64px, 64px"
            unoptimized
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-sm text-muted-foreground">{startingDate}</p>
          <p className="text-sm text-muted-foreground">{endingDate}</p>
        </div>
      </div>
      <div className="flex items-start">
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        {descriptionPoints &&
          descriptionPoints.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
      </ul>
    </div>
  );
};
