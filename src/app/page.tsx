import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "눈꽂",
  bio: "AI를 활용한 바이브 코딩 입문",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "YouTube", url: "https://www.youtube.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-12 px-6 py-20">
      <Profile name={profile.name} bio={profile.bio} />
      <section className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.title} title={link.title} url={link.url} />
        ))}
      </section>
    </main>
  );
}
