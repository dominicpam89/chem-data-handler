import { TypePropsChildren } from "../../data/types/props";

const UICardContent:React.FC<TypePropsChildren> = ({children}) => {
  return <>
    <div>
      {children}
    </div>      
  </>
}
 
export default UICardContent;