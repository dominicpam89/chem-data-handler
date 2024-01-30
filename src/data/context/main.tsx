import { createContext } from "react"
import { ContextTheme, useContextTheme } from "./theme"
import { ContextSidebar, useContextSidebar } from "./sidebar"
import { ContextCompound, useContextCompound } from "./compound"

export const ContextMain = createContext({
	theme: ContextTheme,
	sidebar: ContextSidebar,
	compound: ContextCompound,
})

type Props = {
	children: React.ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
	const theme = useContextTheme()
	const sidebar = useContextSidebar()
	const compound = useContextCompound()
	return (
		<ContextMain.Provider
			value={{
				theme,
				sidebar,
				compound
			}}
		>
			{children}
		</ContextMain.Provider>
	)
}

export default ContextProvider
