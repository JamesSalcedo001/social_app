import { useContext } from "react";
import { UserContext } from "./context/user";

function CommentCard({comment, targeted}) {
    const {deleteComment, errors} = useContext(UserContext)

    const {body,user, post, id} = comment
    console.log(comment)

    const clickHandlerDelete = () => {deleteComment(id)}
    const editClickHandler = () => {targeted(comment)}
  
        return (
            <div className="commentCard">
                <img id="postCommentImage" alt="user avatar" src={post.image}/>
                <h5>{post.title}</h5>
                <img id="commenter" alt="user avatar" src={user.avatar}/>
                <h5>{user.username} said:</h5>
                <h5 id="commentCardBody">{body}</h5>
                <button className="commentButton" onClick={editClickHandler}>Edit</button>
                <button className="commentButton" onClick={clickHandlerDelete}>Delete</button>
            </div>
        )
}

export default CommentCard;