import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function CommentForm({addingNewComment}) {
    const [commentBody, setCommentBody] = useState("")
    const [postId, setPostId] = useState(1)
    const { user, posts, addComment, errors} = useContext(UserContext)

   const submit = (e) => {
    e.preventDefault()
    addComment({
        body: commentBody,
        post_id: postId,
        user_id: user.id
    },    
    addingNewComment
     )
   }

   function checker(extras) {
    const check = {}
    const final = []
    extras.forEach(post => {
        if (!check[post.id]) {
            check[post.id] = true
            final.push(post)
        }
    })
    return final
   }

const postList = checker(posts).map(p => 
    <option key={p.id} value={p.id}>{p.title}</option>
    )

    return (
        <div>
            <form id="hello" onSubmit={submit} >
                <label htmlFor="body">Comment</label>
                <input placeholder="type comment here" type="text" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} name="body"/>

                <select name="post_id" value={user.postId} onChange={(e) => setPostId(parseFloat(e.target.value))}>{postList}</select>

                <input type="submit" value="Comment!"/>
            </form>
            {errors}
        </div>
    )
}

export default CommentForm;