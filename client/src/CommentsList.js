import { useContext, useState } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";




function CommentsList() {
    const {user, loggedIn } = useContext(UserContext)
    const [commenting, setCommenting] = useState(false)

    function addingNewComment() {
        setCommenting(false)
    }

    if (loggedIn) {
        const userComments = user?.comments?.map(comment => <CommentCard key={comment.id} comment={comment} />)
        return (
            <div >
                <div>
                    {commenting ? <CommentForm addingNewComment={addingNewComment}/> : <button id="hi" onClick={() => setCommenting(true)}>Add Comment</button>}
                </div>
                <div>
                    <ul className="commentCards">{userComments}</ul>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Please Login or Sign Up!</h1>
        )
    }
}

export default CommentsList;