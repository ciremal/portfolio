"use client";
import Image from "next/image";
import { useState } from "react";
import Chip from "./chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type CardProps = {
  company: string;
  position: string;
  duration: string;
  techStack: string[];
  logo: string;
  paragraphs: string[];
};

const Card = ({
  company,
  position,
  duration,
  techStack,
  logo,
  paragraphs,
}: CardProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <button
      className={`group w-1/2 rounded-lg flex flex-col justify-between`}
      style={{ boxShadow: "0px 2px 8px 2px rgba(0,0,0,0.2)" }}
      onClick={() => {
        setExpand(!expand);
      }}
    >
      <div
        className={`p-5 rounded-t-lg transition duration-300 ease-in-out border-2 border-b-0 border-transparent group-hover:border-secondary`}
      >
        <div className="w-full flex justify-between gap-4">
          <div className="w-1/2 flex">
            <Image
              src={`/${logo}`}
              width={250}
              height={250}
              alt={logo}
              className="rounded-lg border-2 border-cyan-500"
            />
          </div>
          <div className="w-full h-full text-left">
            <p className="text-3xl font-semibold">{company}</p>
            <p className="text-3xl">{position}</p>
            <p className="text-xl">{duration}</p>
            <div className="flex gap-3 flex-wrap mt-3">
              {techStack.map((item) => {
                return <Chip label={item} key={item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-2xl text-left bg-primary
        }`}
        style={{
          maxHeight: expand ? "400px" : "0px",
        }}
      >
        <div className="p-5 flex flex-col gap-6">
          {paragraphs.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}
        </div>
      </div>

      <div
        className={`${
          expand
            ? "bg-primary group-hover:border-primary"
            : "bg-background group-hover:border-secondary"
        } w-full rounded-b-lg transition-colors duration-300 ease-in-out flex justify-center items-center border-2 border-t-0 border-transparent`}
      >
        <div
          className={`transition-transform duration-300 ${
            expand ? "rotate-180" : "rotate-0"
          }`}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      </div>
    </button>
  );
};

export default Card;
