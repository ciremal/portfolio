import { ReactNode } from "react";

type HobbyIconProps = {
  icon: ReactNode;
  label: string;
};

const HobbyIcon = ({ icon, label }: HobbyIconProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div
        className={`flex flex-col items-center shadow-md rounded-md 
        p-2 bg-gradient-to-b from-primary to-secondary transition-transform 
        duration-300 ease-in-out hover:scale-110 hover:shadow-xl
        group`}
      >
        <div className="text-4xl">{icon}</div>
      </div>
      <div className="mt-2 text-md text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </div>
    </div>
  );
};

export default HobbyIcon;
