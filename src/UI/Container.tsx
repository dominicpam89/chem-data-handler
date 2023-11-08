import { InterfacePropsChildren } from "../data/interfaces/props";

const UIContainer:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div className="w-100 px-5 py-[70px] md:py-5 md:w-[75%] lg:w-[80%] md:ml-[25%] lg:ml-[20%]">
      {children}
    </div>
  </>
}
 
export default UIContainer;