import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HobbiesContainer from "./components/hobbiesContainer";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="h-[120vh]">
      <section>
        <div className="w-[40%] bg-primary"></div>
        <div className="w-[60%] bg-background"></div>
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[65%] w-[60%] flex items-center justify-center">
          <div className="w-full h-full flex">
            <div
              id="container-1"
              className="flex items-center flex-col w-full bg-secondary z-1"
              style={{ boxShadow: "-6px 4px 8px 3px rgba(0,0,0,0.1)" }}
            >
              <div className="flex justify-center items-center flex-col h-full w-full gap-10">
                <Image
                  src={"/PFP.png"}
                  width={300}
                  height={300}
                  alt="Image of me"
                  className="rounded-full"
                />
                <p className="text-3xl font-bold">Eric Lam</p>
                <div className="h-1 w-[20%] bg-foreground"></div>
                <p className="text-3xl">Software Developer</p>
              </div>
              <div className="flex justify-evenly items-center h-16 w-full bg-background px-10">
                <a
                  href={"https://www.linkedin.com/in/eric-lam-a3774720b/"}
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/ciremal" target="_blank">
                  <GitHubIcon fontSize="large" />
                </a>
                <a href="mailto:eric.lam42@hotmail.com" target="_blank">
                  <EmailIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div
              id="container-2"
              className="flex items-center flex-col w-full bg-background px-8 text-center"
            >
              <div className="flex flex-col text-left text-[20px] gap-8">
                <div className="text-6xl flex justify-center items-center">
                  Hello <span className="text-5xl ml-3">👋</span>
                </div>
                <div>
                  I'm a Software Developer with a Computer Science degree from
                  Queen's University. I have a passion for building software
                  applications with the goal of contributing positively to
                  society through the code I write.
                </div>
                <div>
                  I'm always looking for opportunities to grow my skillset and
                  contribute these skills to practical and meaningful projects.
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  My hobbies and interests outside of software development!
                  <HobbiesContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="flex flex-col items-center w-full gap-20">
          <div className="flex flex-col gap-16 items-center">
            <div className="text-6xl font-semibold px-6 py-4 rounded-md text-[#0050FF]">
              Experience
            </div>
            <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
          </div>

          <div className="divider flex flex-col items-center gap-10">
            <Card
              company="Center for Advanced Computing"
              position="Full-Stack Software Developer Intern"
              duration="May 2023 - Jul 2024"
              techStack={[
                "Typescript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Django",
                "React Native",
                "Flutter",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
              ]}
              logo="CAC.jpg"
              paragraphs={[
                "At the Center for Advanced Computing, I helped develop several web and mobile applications for Kingston-based startups in the medical and research sectors.",
                "I worked across the full stack, building user-friendly interfaces, fast and responsive backend APIs, and automated tests using a range of modern technologies.",
              ]}
            />
            <Card
              company="OMNIVERSITY"
              position="Web Developer Intern"
              duration="Jan 2022 - Apr 2022"
              techStack={[
                "Javascript",
                "React",
                "Node.js",
                "Firebase Authentication",
                "MySQL",
              ]}
              logo="Omniversity.jpg"
              paragraphs={[
                "At OMNIVERSITY, I collaborated with a small team remotely to develop and finalize design ideas for the company website. I designed dynamic pages and responsive UI components using React and Javascript, enhancing user flow and overall experience.",
                "In addition, I implemented MySQL database queries using Node.js and Express to display dynamic content and enable real-time data updates, and developed authentication features with Firebase Authentication.",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
