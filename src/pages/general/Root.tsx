import Navbar from "../../components/ui/Navbar";
import { Outlet } from "react-router-dom"

const RootLayoutPage = ()=>{
  return <>
    <header>
      <Navbar />
    </header>
    <main className="p-10 mt-[4rem] w-full">
      <Outlet />
    </main>
  </>
}

export default RootLayoutPage;