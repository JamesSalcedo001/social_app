import React, {useState, useEffect} from "react"
import { useNavigate, useLocation } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({children}) {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    console.log(navigate)
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.errors) {
                setLoggedIn(false)
                setErrors(data.errors)
            } else {
                setLoggedIn(true)
            }
        })
    },[])


    return (
        <UserContext.Provider value={{user, loggedIn, errors, setErrors}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};