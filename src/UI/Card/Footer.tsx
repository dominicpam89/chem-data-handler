import { TypePropsChildren } from "../../data/types/props";

const UICardFooter:React.FC<TypePropsChildren> = ({children}) => {
  return <>
    <div>
      {children}
    </div>      
  </>
}
 
export default UICardFooter;