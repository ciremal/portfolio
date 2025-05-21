import HobbyIcon from "./hobbyIcon";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FlightIcon from "@mui/icons-material/Flight";
import HikingIcon from "@mui/icons-material/Hiking";

const HobbiesContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center w-full">
      <HobbyIcon icon={<SportsMmaIcon fontSize="inherit" />} label="UFC" />
      <HobbyIcon
        icon={<SportsTennisIcon fontSize="inherit" />}
        label="Tennis"
      />
      <HobbyIcon
        icon={<SportsVolleyballIcon fontSize="inherit" />}
        label="Volleyball"
      />
      <HobbyIcon icon={<FlightIcon fontSize="inherit" />} label="Travel" />
      <HobbyIcon icon={<HikingIcon fontSize="inherit" />} label="Hiking" />
      <HobbyIcon
        icon={<SportsTennisIcon fontSize="inherit" />}
        label="Squash"
      />
      <HobbyIcon
        icon={<SportsKabaddiIcon fontSize="inherit" />}
        label="Brazilian Jiujitsu"
      />
      <HobbyIcon
        icon={<FitnessCenterIcon fontSize="inherit" />}
        label="Weight Lifting"
      />
    </div>
  );
};

export default HobbiesContainer;
