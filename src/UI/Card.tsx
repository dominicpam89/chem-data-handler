import { InterfacePropsChildren } from "../data/interfaces/props";

const UICard:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div className="p-4 md:p-12 lg:p-20 flex flex-col gap-4 shadow-md border border-gray-200">
      {children}
    </div>
  </>
}
 
export default UICard;