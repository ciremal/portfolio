import Image from "next/image";

type ProgramLangChip = {
  name: string;
  icon: string;
};

const ProgramLangChip = ({ name, icon }: ProgramLangChip) => {
  return (
    <div className="p-[4px] rounded-xl bg-gradient-to-r from-[#0050FF] to-[#ff00ae]">
      <div className="bg-background px-6 pb-1 rounded-lg flex flex-col items-center">
        <Image
          src={`/programming-lang-icons/${icon}`}
          width={50}
          height={50}
          alt={name}
        />
        <span className="text-md">{name}</span>
      </div>
    </div>
  );
};

export default ProgramLangChip;
