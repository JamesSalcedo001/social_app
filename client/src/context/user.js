import React, {useState, useEffect} from "react"
import { useNavigate, useLocation } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({children}) {
    const location = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
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
                fetchPosts()
            }
        })
    },[])

    useEffect(() => {
        setErrors([])
    }, [location.pathname])

    const fetchPosts = () => {
        fetch("/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }

    const addPost = (post) => {
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            setPosts([...posts, data])
        })
    }


    const addComment = (newComment, isCommenting) => {
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                const updatedUser = { ...user, comments: [...user.comments, data] }
                setUser(updatedUser)
                setErrors([])
                isCommenting(true)
                console.log(user)
            }
        })
        .catch(error => console.log(error))
    }


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
        <UserContext.Provider value={{user, posts, addComment, loggedIn, logout, signup, login, errors, setErrors, addPost}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};