import { useContext } from "react";
import { UserContext } from "./context/user";

function CommentCard({comment, targeted}) {
    const {deleteComment} = useContext(UserContext)

    const {body, likes, user, post, id} = comment
    // console.log(comment)

    const clickHandlerDelete = () => {deleteComment(id)}
    const editClickHandler = () => {targeted(comment)}
  
        return (
            <div className="commentCard">
                <h5>{user.username}</h5>
                <h5>{post.title}</h5>
                <h5>{body}</h5>
                <h5>{likes}</h5>
                <button onClick={editClickHandler}>Edit</button>
                <button onClick={clickHandlerDelete}>Delete</button>
            </div>
        )
}

export default CommentCard;