import { apiLogin, apiLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

const { createContext, Children, use, useState } = require("react");

export const AuthContext = createContext({})

export function AuthPovider(children){
    const[user,setUser] = useState(null)
    const { push } = useRouter()
   

    const login = async (credenciais) => {
        await apiLogin(credenciais)
        
        setUser({
            nome: "Marcelo",
            email:"rm93897@fiap.com.br"
        })
        push("/")
    }

    const logout = () => {}
        apiLogout()
        console.log("sair")
        setUser(null)
        push("/login")





    return(
 
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
        )
}