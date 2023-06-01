import { useContext, useState } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import EditCommentForm from "./EditCommentForm";




function CommentsList() {
    const {loggedIn, comments} = useContext(UserContext)
    const [commenting, setCommenting] = useState(false)
    const [showEditing, setShowEditing] = useState(false)
    const [targetComment, setTargetComment] = useState(null)

    function toggleCommenting() {
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
       
        const commentMap = comments.map(comment => <CommentCard key={comment.id} comment={comment} targeted={() => editClick(comment)} />)

        return (
            <div className="commentContainer">
                <div id="buttonDiv">
                    {commenting ? <CommentForm toggleCommenting={toggleCommenting}/> : <button id="commentFormButton" onClick={() => setCommenting(true)}>Add Comment</button>}
                </div>
                <div>
                    {showEditing ? <EditCommentForm targetComment={targetComment} editOff={editOff}/> : null}
                </div>
                <div>
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