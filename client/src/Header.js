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
                <img id="headerMoon" src={"https://cdn-icons-png.flaticon.com/512/6635/6635373.png"} alt="moon"/>
                <img id="avatar" alt="avatar" src={user.avatar}/>
                <button className="headerButton" onClick={logOutUser}>Log Out!</button>
                <NavLink to="/post_list">
                    <button className="headerButton">See Posts!</button>
                </NavLink>

                <NavLink to="/comment_list">
                    <button className="headerButton">Comments!</button>
                </NavLink>
            </div>
        )
    } else {
        return (
            <div className="header">
                <h3>Welcome to Space Base!</h3>
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


