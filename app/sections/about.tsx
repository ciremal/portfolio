import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HobbiesContainer from "../components/hobbiesContainer";
import DescriptionIcon from "@mui/icons-material/Description";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-5xl font-semibold rounded-md text-[#0050FF]">
            ABOUT ME
          </div>
          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
        </div>
        <div className="w-[80%] flex justify-center">
          <div
            className="flex items-center flex-col w-[30%] bg-secondary"
            style={{ boxShadow: "-6px 4px 8px 3px rgba(0,0,0,0.1)" }}
          >
            <div className="flex justify-center items-center flex-col h-full w-full gap-8">
              <Image
                src={"/PFP.png"}
                width={250}
                height={250}
                alt="Image of me"
                className="rounded-full"
              />
              <p className="text-2xl font-bold">Eric Lam</p>
              <div className="h-1 w-[20%] bg-foreground"></div>
              <div className="text-center">
                <p className="text-2xl">Software Developer</p>
                <p className="text-lg">Toronto, ON</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full bg-background px-10 py-2 text-3xl">
              <a
                href={"https://www.linkedin.com/in/eric-lam-a3774720b/"}
                target="_blank"
                className="relative group"
              >
                <LinkedInIcon
                  fontSize="inherit"
                  className="group-hover:opacity-80"
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
              <a
                href="https://github.com/ciremal"
                target="_blank"
                className="relative group"
              >
                <GitHubIcon
                  fontSize="inherit"
                  className="group-hover:opacity-80"
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  GitHub
                </div>
              </a>
              <a
                href="mailto:eric.lam42@hotmail.com"
                target="_blank"
                className="relative group"
              >
                <EmailIcon
                  fontSize="inherit"
                  className="group-hover:opacity-80"
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  Email
                </div>
              </a>
              <a
                href="EricLamResume.pdf"
                target="_blank"
                className="relative group"
              >
                <DescriptionIcon
                  fontSize="inherit"
                  className="group-hover:opacity-80"
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  Resume
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center flex-col w-[70%] bg-background px-8">
            <div className="flex flex-col text-left text-[20px] gap-6">
              <div className="text-[18px]">
                {
                  "I'm a Software Developer with a CS degree from Queens University. Over the years through my industry experience and personal projects, I have developed a passion for building software applications with the goal of meaningfulness. Whether these applications are for day-to-day convenience, entertainment, or improving business processes, I look to ensure what I build can make a visible positive difference."
                }
              </div>
              <div className="text-[18px]">
                {" "}
                {
                  "I'm always looking for opportunities to grow my skillset and contribute these skills to practical and meaningful projects. Specifically, I want to blend my passion for software development with health sciences. I find there's a lot of opportunity for improving accessibility, productivity, efficiency, and quality of life in this industry."
                }
              </div>
              <div className="flex flex-col justify-center items-center gap-4 text-[18px]">
                {"My hobbies and interests outside of software development!"}
                <HobbiesContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
