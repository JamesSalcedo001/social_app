import { useContext,useEffect, useState } from "react";
import { UserContext } from "./context/user";



function EditCommentForm({targetComment, editOff}) {
    const {user, updateComment} = useContext(UserContext)
    const [commentBody, setCommentBody] = useState(targetComment?.body || "")

 
    const submit = (e) => {
        e.preventDefault()
        updateComment(targetComment.id, {
            body: commentBody,
            user_id: user.id,
            id: targetComment.id
        })
        editOff()
    }

        return (
            <div>
                <form id="editCommentForm" onSubmit={submit}>
                    <label>Edit Comment</label>
                    <input className="editFormInput" type="text" name="body" value={commentBody} onChange={(e) => setCommentBody(e.target.value)}/>
                    <button className="editFormInput" type="submit">Update!</button>
                </form>
                
            </div>
        )
}

export default EditCommentForm;