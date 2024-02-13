import { Box } from "@mui/material"
import { useContextMain } from "../../../../data/hooks/useContext"

interface Props {
	children: React.ReactNode
}

const SidebarContainer: React.FC<Props> = ({ children }) => {
	const { sidebar } = useContextMain()
	return (
		<Box
			aria-label="sidebar-container"
			onClick={() => sidebar.hideSidebar()}
		>
			{children}
		</Box>
	)
}

export default SidebarContainer
