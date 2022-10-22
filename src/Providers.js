import { useState, createContext, useContext } from "react";


const UserContext = createContext();

export function Providers({children}) {
    const [userImage, setUserImage] = useState(undefined)
    const [token, setToken] = useState(undefined)
    return (
        <UserContext.Provider value={{userImage,setUserImage,token,setToken }}>
            {children}
        </UserContext.Provider>
    )
}


const useProviders = ()=>useContext(UserContext)
export default useProviders
