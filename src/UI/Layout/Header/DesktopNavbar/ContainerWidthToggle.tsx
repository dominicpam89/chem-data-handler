import { Box, IconButton, useTheme } from "@mui/material"
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle"
import { useEffect } from "react"
import { useAnimate } from "framer-motion"
import { useContextMain } from "../../../../data/hooks/useContext"

const useHooks = ()=>{
	const theme = useTheme()
	const { sidebarPersist } = useContextMain()
	const [scope, animate] = useAnimate()
	useEffect(()=>{
		if(sidebarPersist.minimize){
			animate("button", {rotateZ:"-90deg"})
		}
		else{
			animate("button", {rotateZ:"90deg"})
		}
	},[sidebarPersist.minimize])
	return {scope, sidebarPersist, theme}
}

const ContainerWidthToggle = () => {
	const { scope, sidebarPersist, theme } = useHooks()
	return (
		<Box
			ref={scope}
			sx={{
				position: "absolute",
				top: "50%",
				right: "-30px",
				zIndex: "500",
			}}
		>
			<IconButton
				sx={{
					fontSize: "40px",
					color: theme.palette.primary.main
				}}
				onClick={() => sidebarPersist.toggleSizeSidebar()}
			>
				<ArrowDropDownCircleIcon fontSize="inherit" color="inherit" />
			</IconButton>
		</Box>
	)
}

export default ContainerWidthToggle
