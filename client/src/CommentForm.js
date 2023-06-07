// import { useContext, useState } from "react";
// import { UserContext } from "./context/user";

// function CommentForm({setIsCommenting}) {
//     const [commentBody, setCommentBody] = useState("")
//     const { user, posts, addComment, errors} = useContext(UserContext)
//     const [postId, setPostId] = useState(1)
   

//    const submit = (e) => {
//     e.preventDefault()
//     addComment({
//         body: commentBody,
//         post_id: postId,
//         user_id: user.id
//     }, setIsCommenting(false))
//    }


//     const postList = posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)


//     return (
//         <div>
//             <form id="commentForm" onSubmit={submit} >
//                 <input id="commentInput" placeholder="Add comment" type="text" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} name="body"/>

//                 <select id="commentSelect" name="post_id" value={postId} onChange={(e) => setPostId(parseFloat(e.target.value))}>{postList}</select>

//                 <input id="commentFormButton" type="submit" value="Comment!"/>
//             </form>
//             <h1>{errors}</h1>
//         </div>
//     )
// }

// export default CommentForm;




import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function CommentForm({setIsCommenting}) {
    const { user, posts, addComment, errors} = useContext(UserContext)
    
    const [formData, setFormData] = useState({
        body: "",
        post_id: 1,
        user_id: user.id
    })
   

   const submit = (e) => {
    e.preventDefault()
    addComment({...formData}, 
    setIsCommenting(false))
   }

   const changeHandler = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
   }

    const postList = posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)


    return (
        <div>
            <form id="commentForm" onSubmit={submit} >
                <input id="commentInput" placeholder="Add comment" type="text" value={formData.body} onChange={changeHandler} name="body"/>

                <select id="commentSelect" name="post_id" value={formData.post_id} onChange={changeHandler}>{postList}</select>

                <input id="commentFormButton" type="submit" value="Comment!"/>
            </form>
            <h1>{errors}</h1>
        </div>
    )
}

export default CommentForm;