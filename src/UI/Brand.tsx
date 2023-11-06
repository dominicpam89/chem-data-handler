import { IconContext } from "react-icons";
import { BiSolidAnalyse } from "react-icons/bi";

interface Props{
  size: number,
  color: 'light'|'dark',
}

const UIBrand:React.FC<Props> = ({size, color}) => {
  let textColor = color==='dark' ? 'primary-500':'gray-50';
  return (
    <>
      <IconContext.Provider value={{ className: `w-${size} h-${size} text-${textColor}` }}>
        <BiSolidAnalyse />
      </IconContext.Provider>
      <h1 className="font-semibold uppercase">
        {import.meta.env.VITE_APP_NAME}
      </h1>
    </>
  );
};

export default UIBrand;
