import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function CommentForm() {
    const [commentBody, setCommentBody] = useState("")
    const { user, posts, addComment, errors} = useContext(UserContext)
    const [postId, setPostId] = useState(1)
   

   const submit = (e) => {
    e.preventDefault()
    addComment({
        body: commentBody,
        post_id: postId,
        user_id: user.id
    },    
     )
   }


    const postList = posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)


    return (
        <div>
            <form id="commentForm" onSubmit={submit} >
                <input className="commentInput" placeholder="Add comment" type="text" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} name="body"/>

                <select className="commentInput" name="post_id" value={postId} onChange={(e) => setPostId(parseFloat(e.target.value))}>{postList}</select>

                <input className="commentInput" type="submit" value="Comment!"/>
            </form>
            <h1>{errors}</h1>
        </div>
    )
}

export default CommentForm;