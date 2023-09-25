import { useRouter } from "next/navigation";

const { createContext, Children, use, useState } = require("react");

export const AuthContext = createContext({})

export function AuthPovider(children){
    const[user,setUser] = useState(null)
    const { push } = useRouter()
   

    const login = () => {
        setUser({
            nome: "Marcelo",
            email:"rm93897@fiap.com.br"
        })
        push("/")
    }

    const logout = () => {}
        console.log("sair")
        setUser(null)
        push("/login")





    return(
 
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
        )
}