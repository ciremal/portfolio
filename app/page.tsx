import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import ExperienceSection from "./sections/experience";
import HomeSection from "./sections/home";
import ProjectSection from "./sections/projects";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center w-full gap-20">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
