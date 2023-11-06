import { InterfacePropsChildren } from "../data/interfaces/props";

/**@template */
// container without adjustment for Navbar or Sidebar

const UIContainerLanding:React.FC<InterfacePropsChildren> = ({children}) => {
  return <>
    <div className="min-w-[320px] px-4 py-8 md:w-[720px] md:mx-auto md:px-12">
      {children}
    </div>
  </>
}
 
export default UIContainerLanding;