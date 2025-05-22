import ProjectCard from "../components/projectCard";

const ProjectSection = () => {
  return (
    <section className="my-20 pb-10">
      <div className="flex flex-col items-center w-full gap-20">
        <div className="flex flex-col gap-16 items-center">
          <div className="text-6xl font-semibold px-6 py-4 rounded-md text-[#0050FF]">
            💻 Projects 💻
          </div>
          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
        </div>

        <div className="w-[60%] grid grid-cols-2 justify-items-center gap-12">
          <ProjectCard
            name="Inquiro"
            description="My QTMA project Inquiro, an AI-powered investment research platform
          that makes investing simple and intuitive. Filter stocks, access
          real-time insights, and skip the guess work."
            techStack={[
              "Typescript",
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
            description="A calorie tracking app that logs user's food intake, utilizng nutritional data from Edamam API. It provides users with insights on their consumed nutrients through easy-to-understand charsts and graphs."
            techStack={[
              "Typescript",
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
            description="A website that takes a YouTube video URL, and downloads the video onto your computer as a MP4 file (video or audio only options)."
            techStack={["Python", "Flask", "HTML", "CSS", "Bootstrap"]}
            image="YouTubeVideoDownloader.png"
            url="https://github.com/ciremal/YouTube-video-downloader"
          />
          <ProjectCard
            name="Weather App"
            description="Using the OpenWeatherMap API, this web application displays weather information about cities from all over the globe, including details about the current weather conditions and an estimated 5-day weather forecast."
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
