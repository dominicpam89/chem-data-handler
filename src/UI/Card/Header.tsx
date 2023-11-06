import { InterfacePropsChildren } from "../../data/interfaces/props";

const UICardHeader:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div className="w-full py-12 flex flex-col justify-center items-center">
      {children}
    </div>      
  </>
}
 
export default UICardHeader;