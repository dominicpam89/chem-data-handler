import { InterfacePropsChildren } from "../../data/interfaces/props";

const UICardFooter:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div>
      {children}
    </div>      
  </>
}
 
export default UICardFooter;