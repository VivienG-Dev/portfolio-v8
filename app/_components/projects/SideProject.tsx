import Link from "next/link";
import Image from "next/image";

type SideProjectProps = {
  id: string;
  published: boolean;
  featured: boolean;
  title: string;
  shortDescription: string;
  imageUrl: string;
};

export const SideProject = ({ title, shortDescription, id, imageUrl }: SideProjectProps) => {
  return (
    <div className="flex md:flex-col items-center gap-2 flex-1 shadow md:shadow-none bg-card border border-1 md:border-none md:bg-transparent rounded-lg p-4 xl:p-0 hover:shadow-lg md:hover:shadow-none transition-shadow duration-300 ">
      <div className="flex-shrink-0 bg-transparent md:bg-card rounded-lg flex items-center justify-center overflow-hidden p-0 md:p-4 shadow hover:shadow-lg transition-shadow duration-300">
        <Link href={`/project/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={320}
            height={320}
            className="rounded-lg w-full max-w-[120px] md:max-w-[220px] lg:max-w-[320px] md:w-auto"
            sizes="(max-width: 768px) 25vw, (max-width: 1200px) 50vw, 30vw"
            unoptimized
          />
        </Link>
      </div>
      <div className="text-center w-[70%]">
        <Link href={`/project/${id}`}>
          <p className="text-lg font-semibold">{title}</p>
        </Link>
        <p className="text-sm text-muted-foreground">{shortDescription}</p>
      </div>
    </div>
  );
};
