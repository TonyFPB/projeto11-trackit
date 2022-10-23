import { useState, createContext, useContext } from "react";


const UserContext = createContext();

export function Providers({ children }) {
    const [userImage, setUserImage] = useState(undefined)
    const [token, setToken] = useState(undefined)
    const [percentProgress, setPercentProgress] = useState(0)
    // const [trackProgress, setTrackProgress]
    return (
        <UserContext.Provider
            value={
                {
                    userImage,
                    setUserImage,
                    token,
                    setToken,
                    percentProgress,
                    setPercentProgress
                }}>
            {children}
        </UserContext.Provider>
    )
}


const useProviders = () => useContext(UserContext)
export default useProviders
