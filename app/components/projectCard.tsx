import Image from "next/image";
import Chip from "./chip";
import GitHubIcon from "@mui/icons-material/GitHub";

type ProjectCardProps = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  url: string;
};

const ProjectCard = ({
  name,
  description,
  techStack,
  image,
  url,
}: ProjectCardProps) => {
  return (
    <a href={url} target="_blank">
      <div
        className="group relative w-full bg-background pb-10 rounded-xl transform transition-all duration-400 hover:-translate-y-4 hover:brightness-90"
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
            {techStack.map((item) => {
              return <Chip label={item} key={`${item}-${name}`} />;
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
