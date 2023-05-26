import { useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    function logOutUser() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            logout()
            navigate("/")
        })
    }
    if (loggedIn) {
        return (
            <div>
                <h1>Welcome {user.username}!</h1>
                <img alt="avatar" src={user.avatar}/>
                <button onClick={logOutUser}>Log Out!</button>
            </div>
        )
    } else {
        return (
            <div>
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