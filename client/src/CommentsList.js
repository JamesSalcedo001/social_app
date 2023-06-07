import { useContext, useState } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import EditCommentForm from "./EditCommentForm";




function CommentsList() {
    const {loggedIn, comments, errors} = useContext(UserContext)
    const [showEditing, setShowEditing] = useState(false)
    const [isCommenting, setIsCommenting ]= useState(false)
    const [targetComment, setTargetComment] = useState(null)

  
    const editClick = (comment) => {
        setTargetComment(comment)
        setShowEditing(true)
    }

    const editOff = () => {
        setTargetComment(null)
        setShowEditing(false)
    }


    if (loggedIn) {
       
        const commentMap = comments.map(comment => <CommentCard key={comment.id} comment={comment} targeted={() => editClick(comment)} />)
        return (
            <div className="commentContainer">
                <div>
                     {isCommenting ? <CommentForm setIsCommenting={setIsCommenting}/> : <button id="commentButtonDisplay" onClick={() => setIsCommenting(!isCommenting)}>Comment!</button>}
                     <h1 className="errors">{errors}</h1>
                </div>

                <div>
                    <h1 id="commentTitle">Comments</h1>
                    {showEditing ? <EditCommentForm targetComment={targetComment} editOff={editOff}/> : commentMap}
                </div>
            </div>
        )
    } else {
        return (
            <h1 className="no-access">Please Login or Sign Up!</h1>
        )
    }
}

export default CommentsList;