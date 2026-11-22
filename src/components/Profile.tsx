type ProfileProps = {
  name: string;
  bio: string;
  avatarEmoji?: string;
};

export default function Profile({ name, bio, avatarEmoji = "❄️" }: ProfileProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div
        aria-hidden
        className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-foreground/80 bg-foreground/5 text-7xl"
      >
        {avatarEmoji}
      </div>
      <h1 className="mt-2 text-xl font-bold">{name}</h1>
      <p className="text-sm text-foreground/70">{bio}</p>
    </header>
  );
}
