import AboutSection from "./sections/about";
import ExperienceSection from "./sections/experience";
import ProjectSection from "./sections/projects";

export default function Home() {
  return (
    <main className="h-screen">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
