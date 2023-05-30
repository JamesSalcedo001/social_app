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

    const addPost = (post, showingForm) => {
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                setPosts([...posts, data])
                showingForm(true)
            }
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
                const updatedUser = { 
                    ...user, 
                    comments: [...user.comments, data]
                }
              
                setUser(updatedUser)
                setErrors([])
                isCommenting(true)
            }
        })
        .catch(error => console.log(error))
    }


    const removeComment = (id) => {
        const commentList = user.comments.filter(c => c.id !== id)
        const updatedUser = { ...user, comments: commentList}
        return updatedUser
    }

    const deleteComment = (id) => {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const updatedUser = removeComment(id)
            setUser(updatedUser)
        })
        .catch(error => console.log(error))
    }


    const updateCheck = (updatedComm)=> {
        const updatedCommList = user.comments.map(comm => {
            if (comm.id === updatedComm.id) {
                return updatedComm
            } else {
                return comm
            }
        })
        const updatedUser = { ...user, comments: updatedCommList}
        setUser(updatedUser)
    }

    const updateComment = (id, comment) => {
        fetch(`/comments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(data => updateCheck(data))
        .catch(error => console.log(error))
    }

    const login = (user) => {
        setUser(user)
        fetchPosts()
        setLoggedIn(true)
        setErrors([])
    }

    const signup = (user) => {
        setUser(user)
        fetchPosts()
        setLoggedIn(true)
        setErrors([])
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
        navigate("/")
    }


    return (
        <UserContext.Provider value={{user, posts, addComment, loggedIn, logout, signup, login, errors, setErrors, updateComment, deleteComment, addPost}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};