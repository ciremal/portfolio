import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HobbiesContainer from "../components/hobbiesContainer";

const AboutSection = () => {
  return (
    <section id="about" className="relative mt-20 w-full py-20">
      <div className="absolute top-0 bg-primary w-[40%] h-full"></div>
      <div className="flex h-full justify-center">
        <div className="w-[60%] flex">
          <div
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
          <div className="flex items-center flex-col w-full bg-background px-8 text-center">
            <div className="flex flex-col text-left text-[20px] gap-8">
              <div className="text-6xl flex justify-center items-center">
                Hello <span className="text-5xl ml-3">👋</span>
              </div>
              <div>
                I'm a Software Developer with a Computer Science degree from
                Queen's University. I have a passion for building software
                applications with the goal of contributing positively to society
                through the code I write.
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

      {/* </div> */}
    </section>
  );
};

export default AboutSection;
