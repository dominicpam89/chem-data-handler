import { IconContext } from "react-icons";
import { BiSolidAnalyse } from 'react-icons/bi';

const UISidebarNavPersistHeader = () => {
  return (
    <div className="w-full py-4 px-4 flex flex-col items-center">
      <IconContext.Provider value={{ className: "w-16 h-16 text-white" }}>
        <BiSolidAnalyse />
      </IconContext.Provider>
      <h1 className="text-xl text-white">{import.meta.env.VITE_APP_NAME}</h1>
    </div>
  );
};

export default UISidebarNavPersistHeader;
