import { styled } from "@mui/material"
import { IconContext } from "react-icons"
import { BiLogOut } from 'react-icons/bi'
import { supabase } from "../services/supabase"
import { useNavigate } from "react-router-dom"

const Button = styled("button")(({theme})=>({
  width: "100%",
  padding: `${theme.spacing(1)} 0`,
  paddingLeft: theme.spacing(5),
  display: "Flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  alignItems: "center"
}))

const UISidebarListLogout = () => {
    const navigate = useNavigate()
    return (
        <li key="logout">
            <Button onClick={async () => {
              await supabase.auth.signOut()
              navigate('/auth')
            }}>
                {
                  <IconContext.Provider value={{ style: {height: 16, width: 16} }}>
                    <BiLogOut />
                  </IconContext.Provider>
                }
                <span>SignOut</span>
            </Button>
        </li>
    )
}

export default UISidebarListLogout
