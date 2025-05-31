import ProjectCard from "../components/projectCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="section">
      <div className="flex flex-col items-center w-full gap-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-5xl font-semibold px-6 py-4 rounded-md text-[#0050FF]">
            PROJECTS
          </div>
          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
        </div>

        <div className="w-[60%] grid grid-cols-2 justify-items-center gap-12">
          <ProjectCard
            name="Inquiro"
            description="An AI-powered investment research platform
          that makes investing simple and intuitive. Filter stocks, access
          real-time insights on companies, and helps users skip the guess work."
            techStack={[
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Python",
              "AWS",
              "Firebase",
              "Firestore",
              "OpenAI",
            ]}
            image="Inquiro.png"
            url="https://github.com/ciremal/QTMA-Inquiro"
          />
          <ProjectCard
            name="Calorie Tracker"
            description="Logs users' food intake using nutritional data from Edamam API. Provides insights on daily nutrients through easy-to-understand charts and graphs."
            techStack={[
              "TypeScript",
              "React Native",
              "Expo",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Firebase",
            ]}
            image="CalorieTracker.png"
            url="https://github.com/ciremal/CalorieApp"
          />
          <ProjectCard
            name="YouTube to MP4 Converter"
            description="A website that extracts media from a YouTube video URL and allows it to be downloaded as an MP4 file with options to be video or audio only."
            techStack={["Python", "Flask", "HTML", "CSS", "Bootstrap"]}
            image="YouTubeVideoDownloader.png"
            url="https://github.com/ciremal/YouTube-video-downloader"
          />
          <ProjectCard
            name="Weather App"
            description="A web application that uses the OpenWeatherMap API to display weather information about cities from all over the globe. Includes details about the current weather conditions and an estimated 5-day weather forecast."
            techStack={["JavaScript", "HTML", "CSS"]}
            image="WeatherApp.png"
            url="https://github.com/ciremal/weather-app"
          />
          <ProjectCard
            name="VIXI: I Have Lived (Game)"
            description="A 2D Point-and-Click puzzle game that implements aspects of Rhythm Game mechanics."
            techStack={["C#", "Unity"]}
            image="IHaveLived.png"
            url="https://github.com/ciremal/XIVI-i-have-lived"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
