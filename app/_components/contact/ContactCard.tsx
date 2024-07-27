import Link from "next/link";
import { Card } from "@/components/ui/card";
import { LucideIcon, ArrowUpRight } from "lucide-react";

type ContactCardProps = {
  Icon: LucideIcon | any;
  title: string;
  description?: string;
  url: string;
};

export const ContactCard = ({ title, description, Icon, url }: ContactCardProps) => {
  return (
    <Link href={url}>
      <Card className="hover:shadow-lg transition-shadow duration-300 p-2 flex items-center gap-4 w-full">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/70 text-accent-foreground rounded-lg flex items-center justify-center overflow-hidden p-2">
          <Icon size={24} />
        </div>
        <div>
          <p className="text-md font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight size={24} className="ml-auto" strokeWidth={1} />
      </Card>
    </Link>
  );
};
