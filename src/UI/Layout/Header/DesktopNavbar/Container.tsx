import { useContext } from "react"
import {
	DesktopNavbarContainerFull,
	DesktopNavbarContainerMinimize,
} from "../Styled"
import { ContextMain } from "../../../../data/context/main"

interface Props {
	children: React.ReactNode
}

const DesktopNavbarContainer: React.FC<Props> = ({ children }) => {
	const { sidebarPersist } = useContext(ContextMain)
	if (!sidebarPersist.minimize)
		return (
          <DesktopNavbarContainerFull display={{ xs: "none", md: "block" }}>
            {children}
          </DesktopNavbarContainerFull>
		)
	else
		return (
				<DesktopNavbarContainerMinimize
					display={{ xs: "none", md: "block" }}
				>
					{children}
				</DesktopNavbarContainerMinimize>
		)
}

export default DesktopNavbarContainer
