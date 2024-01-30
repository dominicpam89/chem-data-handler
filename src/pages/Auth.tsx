import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { UILayoutMainAuth } from "../UI/Layout/Main"
import { AuthCard, AuthCardContent, AuthCardHeader } from "./Auth/Styled"
import AuthLogin from "./Auth/Login"
import AuthRegister from "./Auth/Register"
import AuthBrand from "./Auth/Common/Brand"

const AuthPage = () => {
	const [searchParam, setSearchParam] = useSearchParams()

	// Set to login if page is visited in first time
	useEffect(() => {
		const mode = searchParam.get("mode")
		if (!mode) setSearchParam("mode=login")
		if (mode !== "login" && mode !== "register") setSearchParam("mode=login")
	}, [searchParam])
	return (
		<UILayoutMainAuth>
			<AuthCard>
				<AuthCardHeader>
					<AuthBrand />
				</AuthCardHeader>
				<AuthCardContent>
					{searchParam.get("mode") === "login" && <AuthLogin />}
					{searchParam.get("mode") === "register" && <AuthRegister />}
				</AuthCardContent>
			</AuthCard>
		</UILayoutMainAuth>
	)
}

export default AuthPage
