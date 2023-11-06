import { InterfacePropsChildren } from "../../data/interfaces/props";

const UICardContent:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div>
      {children}
    </div>      
  </>
}
 
export default UICardContent;