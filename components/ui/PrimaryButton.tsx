type PrimaryButtonProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <button className="rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700">
      {children}
    </button>
  );
}