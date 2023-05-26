import React, {useState, useEffect} from "react"
import { useNavigate, useLocation } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({children}) {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
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

    useEffect(() => {
        setErrors([])
    }, [location.pathname])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        setErrors([])
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
        setErrors([])
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
        navigate("/")
    }


    return (
        <UserContext.Provider value={{user, loggedIn, logout, signup, login, errors, setErrors}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};