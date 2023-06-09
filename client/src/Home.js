import { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";

function Home() {
    const {user, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        return (
            <div id="userPage">
                <h3>Welcome to the Base</h3>
                <h2 id="username">{user.username}</h2>
                <img src={user.avatar} alt="user" id="homeAvatar" />
            </div>
        )
    } else {
        return (
            <div id="home">
            <img id="homeMoon" src={"https://cdn-icons-png.flaticon.com/512/6635/6635373.png"} alt="moon"/>
            <NavLink to="/login">
                    <button className="home-button">Log In!</button>
                </NavLink>

                <NavLink to="/signup">
                    <button className="home-button">Sign Up!</button>
                </NavLink>
        </div>
        )
    }
}

export default Home;