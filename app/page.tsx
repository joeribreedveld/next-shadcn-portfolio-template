import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <main className="px-4 flex items-center flex-col md:container">
      <Hero />
      <Projects />
    </main>
  );
}
