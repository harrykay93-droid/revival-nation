type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-amber-400 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}