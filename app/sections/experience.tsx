import Image from "next/image";
import Card from "../components/card";
import ProgramLangChip from "../components/programLangChip";

const ExperienceSection = () => {
  const skills = [
    { name: "Typescript", icon: "typescript.svg" },
    { name: "Javascript", icon: "javascript.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Flutter", icon: "flutter.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "AWS", icon: "aws.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    { name: "tailwind", icon: "tailwind.svg" },
    { name: "GitHub", icon: "github.svg" },
  ];

  return (
    <section className="my-20">
      <div className="flex flex-col items-center w-full gap-20">
        <div className="flex flex-col gap-16 items-center">
          <div className="text-6xl font-semibold px-6 py-4 rounded-md text-[#0050FF]">
            💼 Experience 💼
          </div>
          <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
        </div>
        <div className="flex flex-col items-center gap-15">
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
              "Developed full-stack applications with user-friendly interfaces using React and Tailwind CSS for web, and React Native or Flutter for mobile. Built fast, responsive APIs using Node.js with MongoDB or Django REST with PostgreSQL. Also implemented automated testing across the stack.",
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
          <Card
            company="Queen's Technology & Media Association (QTMA)"
            position="Senior Software Developer"
            duration="Apr 2024 - Apr 2025"
            techStack={[
              "Typescript",
              "Next.js",
              "Python",
              "AWS",
              "Firebase Authentication",
              "Firestore",
              "Tailwind CSS",
            ]}
            logo="qtma.jpg"
            paragraphs={[
              "As a Senior Software Developer on QTMA, I worked in an interdisciplinary team to lead a team of developers in designing and building Inquiro, a full-stack web application to enhance stock screening efficiency for retail investors.",
              "The frontend was developed using Next.js, TypeScript, and Tailwind CSS, integrating Firebase Authentication for secure user access and Firestore as our database. We implement the backend services with AWS Lambda (Python) and expose backend functions via AWS API Gateway.",
            ]}
          />
          <Card
            company="Queen's School of Computing"
            position="Teaching Assistant"
            duration="Sep 2022 - May 2024"
            techStack={["Java", "Python", "Figma"]}
            logo="queenscomputing.jpg"
            paragraphs={[
              "As a Teaching Assistant for Queen's University, I taught over hundreds of undergraduate students a large range of topics in the computer science program, held office hours and in-person tutorials, and assessed student evaluations. Throughout the courses I have been a teaching assistant for, I ensured students got adequate feedback on their evaluations and ensured they had a full understanding of course concepts.",
              "Taught CISC322 (Software Architecture), CISC325 (Human-Computer Interactions), CISC203 (Discrete Mathematics for Computing II), CISC124 (Introduction to Computing Science II)",
            ]}
          />
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold px-6 py-4 rounded-md text-[#0050FF]">
              Technical Skills
            </div>
            <div className="h-1.5 w-1/2 rounded-md bg-gradient-to-r from-[#0050FF] to-[#ff00ae]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 px-20">
            {skills.map((item) => (
              <ProgramLangChip
                name={item.name}
                icon={item.icon}
                key={item.name + item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
