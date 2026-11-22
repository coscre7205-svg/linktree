type ProfileProps = {
  name: string;
  bio: string;
  avatarEmoji?: string;
};

export default function Profile({ name, bio, avatarEmoji = "❄️" }: ProfileProps) {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <div
        aria-hidden
        className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/70 bg-gradient-to-br from-white to-orange-100 text-6xl shadow-[0_12px_30px_rgba(190,120,80,0.25),inset_0_-4px_8px_rgba(190,120,80,0.12)] dark:border-white/20 dark:from-white/15 dark:to-white/5 dark:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
      >
        {avatarEmoji}
      </div>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="text-sm text-foreground/60">{bio}</p>
    </header>
  );
}
