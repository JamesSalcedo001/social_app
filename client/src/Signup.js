import { useNavigate } from "react-router-dom";
import {useContext, useState} from "react"
import { UserContext } from "./context/user";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })
    const [errors, setErrors] = useState([])
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()
    const {username, password, avatar} = formData

    function submit(e) {
        e.preventDefault()
        const formDataObj = {
            username,
            password,
            avatar
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate("/")
            } else {
                setFormData({
                    username: "",
                    password: "",
                    avatar: ""
                })
                const errorList = user.errors.map(e => <h1 key={e}>{e}</h1>)
                setErrors(errorList)
            }
        })
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div>
            <form id="signupForm" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="signupInput" type="text" name="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">Password</label>
                <input className="signupInput" type="password" name="password" onChange={changeHandler} value={password} />

                <label htmlFor="avatar">Avatar</label>
                <input className="signupInput" type="text" name="avatar" onChange={changeHandler} value={avatar} />

                <input className="signupInput" type="submit" value="Sign Up!"/>
            </form>
            {errors ? <ul className="errors">{errors}</ul> : null}
        </div>
    )
}

export default Signup;