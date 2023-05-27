import { useContext } from "react";
import { UserContext } from "./context/user";

function CommentCard({setShowComments}) {
    const {loggedIn} = useContext(UserContext)

    if (loggedIn) {
        return (
            <div className="commentCard">
                <h3>User</h3>
                <h3>User Image Here</h3>
                <h5>this is so right! I agree!</h5>
                <button onClick={() => setShowComments(false)}>See Post</button>
            </div>
        )
    } else {
        return (
            <h1>Please Login or Sign Up!</h1>
        )
    }
}

export default CommentCard;