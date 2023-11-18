import { InterfacePropsChildren } from "../../data/types/props";

const UICardFooter:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div>
      {children}
    </div>      
  </>
}
 
export default UICardFooter;