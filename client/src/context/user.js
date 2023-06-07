import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [errors, setErrors] = useState([])
    const [comments, setComments] = useState([])


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
                fetchComments()
            }
        })
    },[])



    const fetchPosts = () => {fetch("/posts").then(res => res.json()).then(data => setPosts(data))}


    const fetchComments = () => {fetch("/comments").then(res => res.json()).then(data => setComments(data))}
    

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
                setTimeout(() => {
                    setErrors([])
                }, 2000)
            } else {
                setPosts([...posts, data])
                showingForm(true)
            }
        })
    }


    const addComment = (newComment) => {
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
                setTimeout(() => {
                    setErrors([])
                }, 2000)
            } else {
                setComments([...comments, data])
                setErrors([])
            }
        })
        .catch(error => console.log(error))
    }


  
    const removeComment = (id) => setComments(current => current.filter(c => c.id !== id))


    const deleteComment = (id) => {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors) {
            setErrors(data.errors)
            setTimeout(() => {
                setErrors([])
            }, 2000)
        } else {
            removeComment(id)
        }
        })
    }

    const updateCommentList = (updatedComm)=> {
        const updatedCommList = comments.map(comm => {
            if (comm.id === updatedComm.id) {
                return updatedComm
            } else {
                return comm
            }
        })
        setComments(updatedCommList)
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
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
                setTimeout(() => {
                    setErrors([])
                }, 2000)
            } else {
                updateCommentList(data)
            }
        })
    }

    const login = (user) => {
        setUser(user)
        fetchPosts()
        fetchComments()
        setLoggedIn(true)
        setErrors([])
    }

    const signup = (user) => {
        setUser(user)
        fetchPosts()
        fetchComments()
        setLoggedIn(true)
        setErrors([])
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
        navigate("/")
    }


    return (
        <UserContext.Provider value={{user, posts, comments, addComment,loggedIn, logout, signup, login, errors, setErrors, updateComment, deleteComment, addPost}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};