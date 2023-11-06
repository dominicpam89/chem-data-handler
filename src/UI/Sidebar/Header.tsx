import { IconContext } from "react-icons";
import { BiSolidAnalyse } from 'react-icons/bi';

const UISidebarHeader = () => {
  return (
    <div className="w-full mt-4 py-4 px-4 flex flex-col items-center">
      <IconContext.Provider value={{ className: "w-16 h-16 text-primary-500" }}>
        <BiSolidAnalyse />
      </IconContext.Provider>
      <h1 className="bg-clip-text bg-gradient-to-tl from-primary-500 to-secondary-800 text-xl text-transparent">{import.meta.env.VITE_APP_NAME}</h1>
    </div>
  );
};

export default UISidebarHeader;
