import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 더미 데이터 — 나중에 진짜 내용으로 교체
const profile = {
  name: "눈꽃좋아",
  bio: "바이브코딩 입문",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16">
      <Profile name={profile.name} bio={profile.bio} />
      <section className="flex w-full flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.title} title={link.title} url={link.url} />
        ))}
      </section>
    </main>
  );
}
