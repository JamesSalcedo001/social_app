import { useContext } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";

function CommentsList({setShowComments}) {
    const {posts, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        const postComments = posts?.comments?.map(comment => <CommentCard setShowComments={setShowComments} key={comment.id} comment={comment} />)

        return (
            <div className="commentCards">
                {postComments}
            </div>
        )
    } else {
        return (
            <h1>Please Login or Sign Up!</h1>
        )
    }
}

export default CommentsList;