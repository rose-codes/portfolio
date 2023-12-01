import { playfairDisplay } from "@/app/fonts";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2
      className={`${playfairDisplay.className} text-2xl sm:text-4xl !leading-[1.5] font-medium mb-8 capitalize text-center`}
    >
      {children}
    </h2>
  );
};
