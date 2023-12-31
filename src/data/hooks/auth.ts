import { useMutation, useQuery } from "@tanstack/react-query"
import { serviceLogin } from "../../services/auth"
import { useNavigate } from "react-router-dom"
import { serviceGetCurrentUser } from "../../services/auth"
import { toast } from "react-hot-toast"

type UserAuth = {
    email: string
    password: string
}

export const useLogin = () => {
    const navigate = useNavigate()
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({ email, password }: UserAuth) => serviceLogin({ email, password }),
        onSuccess: () => {
            toast.success("Login successful")
            navigate("/")
        },
    })
    return { mutate, isPending, isError, error }
}

export const useGetCurrentUser = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: serviceGetCurrentUser,
    })

    return {data, isLoading, isAuth:data?.user.role==='authenticated'}    
}
