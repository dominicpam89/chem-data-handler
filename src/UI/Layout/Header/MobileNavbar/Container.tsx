import { Box } from "@mui/material"
import React, { useContext } from "react"
import { ContextMain } from "../../../../data/context/main"

interface Props {
	children: React.ReactNode
}

const SidebarContainer: React.FC<Props> = ({ children }) => {
	const { sidebar } = useContext(ContextMain)
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
