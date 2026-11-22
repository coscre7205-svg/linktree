type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-4 text-center text-[15px] font-medium shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/70 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
