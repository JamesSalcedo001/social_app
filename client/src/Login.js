import { useNavigate } from "react-router-dom";
import {useContext, useState} from "react"
import { UserContext } from "./context/user";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState("")
    const {login} = useContext(UserContext)
    const navigate = useNavigate()
    const {username, password} = formData

    function submit(e) {
        e.preventDefault()
        const formDataObj = {
            username,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then((user) => {
            if (!user.errors) {
                login(user)
                navigate("/")
            } else {
                setFormData({
                    username: "",
                    password: ""
                })
                const errorList = user.errors.map((e) => <h2 key={e}>{e}</h2>)
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
            <form id="loginForm" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="loginInput" type="text" name="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" name="password" onChange={changeHandler} value={password} />

                <input className="loginInput" type="submit" value="Log In!"/>
            </form>
            {errors ? <ul className="errors">{errors}</ul> : null}
        </div>
    )
}

export default Login;