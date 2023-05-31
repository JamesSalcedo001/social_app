import { useContext, useState } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import EditCommentForm from "./EditCommentForm";




function CommentsList() {
    const {user, loggedIn, comments } = useContext(UserContext)
    const [commenting, setCommenting] = useState(false)
    const [showEditing, setShowEditing] = useState(false)
    const [targetComment, setTargetComment] = useState(null)

    function addingNewComment() {
        setCommenting(false)
    }

    const editClick = (comment) => {
        setTargetComment(comment)
        setShowEditing(true)
    }

    const editOff = () => {
        setTargetComment(null)
        setShowEditing(true)
    }

    if (loggedIn) {
        // const userComments = user?.comments?.map(comment => <CommentCard key={comment.id} comment={comment} 
        //     targeted={() => editClick(comment)} />)
        const commentMap = comments.map(comment => <CommentCard key={comment.id} comment={comment} targeted={() => editClick(comment)} />)
        return (
            <div >
                <div>
                    {commenting ? <CommentForm addingNewComment={addingNewComment}/> : <button id="hi" onClick={() => setCommenting(true)}>Add Comment</button>}
                </div>
                <div>
                    {showEditing ? <EditCommentForm comment={targetComment} editOff={editOff}/> : null}
                </div>
                <div>
                    {/* <ul className="commentCards">{userComments}</ul> */}
                    <ul className="commentCards">{commentMap}</ul>
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