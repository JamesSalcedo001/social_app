// import { useContext } from "react";
// import { UserContext } from "./context/user";

// function Home() {
//     const {user, loggedIn} = useContext(UserContext)

//     if (loggedIn) {
//         return (
//             <div>
//                 <h3>{user.username} Profile</h3>
//             </div>
//         )
//     } else {
//         return (
//             <>
//             <img src={"https://cdn-icons-png.flaticon.com/512/6635/6635373.png"} alt="moon"/>
//             <h3>Please Login or Signup</h3>
//         </>
//         )
//     }
// }

// export default Home;

import { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";

function Home() {
    const {user, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
                <h3>{user.username} Profile</h3>
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