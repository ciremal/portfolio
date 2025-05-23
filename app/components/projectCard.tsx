import Image from "next/image";
import Chip from "./chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

type ProjectCardProps = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  url: string;
};

const ProjectCardHover = ({ url }: { url: string }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="text-[96px] text-white">
      <GitHubIcon fontSize="inherit" />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 text-2xl text-white bg-black border border-white rounded-full px-12 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:text-black"
    >
      <span>View Project</span>
      <LaunchIcon />
    </a>
  </div>
);

const ProjectCard = ({
  name,
  description,
  techStack,
  image,
  url,
}: ProjectCardProps) => {
  return (
    <div className="group relative">
      <ProjectCardHover url={url} />
      <div
        className="relative w-full bg-background pb-10 rounded-xl group-hover:-translate-y-4 group-hover:brightness-20 transition-all duration-400"
        style={{ boxShadow: "0px 2px 8px 2px rgba(0,0,0,0.2)" }}
      >
        <div className="relative w-full h-[300px] overflow-hidden rounded-t-xl">
          <Image
            src={`/${image}`}
            alt="Project Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full px-6 py-4 rounded-b-xl flex flex-col gap-6">
          <p className="text-5xl">{name}</p>
          <p className="text-xl">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <Chip label={item} key={`${item}-${name}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
