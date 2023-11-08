import { IconContext } from "react-icons"
import { BiLogOut } from 'react-icons/bi'
import { supabase } from "../services/supabase"
import { useNavigate } from "react-router-dom"

const UISidebarListLogout = () => {
    const navigate = useNavigate()
    return (
        <li key="logout">
            <button className="w-full pl-8 py-2 flex flex-row space-x-2 items-center" onClick={async () => {
              await supabase.auth.signOut()
              navigate('/auth')
            }}>
                {
                  <IconContext.Provider value={{ className: "h-4 w-4" }}>
                    <BiLogOut />
                  </IconContext.Provider>
                }
                <span>SignOut</span>
            </button>
        </li>
    )
}

export default UISidebarListLogout
