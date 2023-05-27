import { useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const logOutUser = () => {
        fetch("/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            logout()
            navigate("/")
        })
    }


    if (loggedIn) {
        return (
            <div className="header">
                <h1>Welcome {user.username}!</h1>
                <img alt="avatar" src={user.avatar}/>
                <button onClick={logOutUser}>Log Out!</button>
                <NavLink to="/post_list">
                    <button>Posts!</button>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div className="header">
                <NavLink to="/login">
                    <button>Log In!</button>
                </NavLink>

                <NavLink to="/signup">
                    <button>Sign Up!</button>
                </NavLink>
            </div>
        )
    }
}

export default Header;












///For other components later




// function () {
//     return (
//         <div>

//         </div>
//     )
// }

// export default ;