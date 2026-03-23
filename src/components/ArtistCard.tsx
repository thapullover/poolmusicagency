import Image from "next/image";
import { Card } from "@/components/ui/Card";

type ArtistCardProps = {
  name: string;
  image: string;
  variant?: "default" | "accent" | "muted";
  objectPosition?: "top" | "center";
};

export function ArtistCard({ name, image, variant = "default", objectPosition = "center" }: ArtistCardProps) {
  return (
    <Card variant={variant} className="overflow-hidden p-0">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className={objectPosition === "top" ? "object-cover object-top" : "object-cover"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="border-t-4 border-neo-ink p-4">
        <p
          className={`font-black uppercase tracking-wider ${
            variant === "accent" ? "text-neo-white" : "text-neo-ink"
          }`}
        >
          {name}
        </p>
      </div>
    </Card>
  );
}
