import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
