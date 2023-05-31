import { useContext,useEffect, useState } from "react";
import { UserContext } from "./context/user";

function EditCommentForm({targetComment, editOff}) {
    const {user, updateComment} = useContext(UserContext)
    const [commentBody, setCommentBody] = useState(targetComment?.body || "")
    const [editing, setEditing] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        updateComment(targetComment.id, {
            body: commentBody,
            user_id: user.id,
            id: targetComment.id
        })
        setEditing(false)
        editOff()
    }

    useEffect(() => {
        return () => {
            setCommentBody("")
        }
    },[])

    if (targetComment === null) {
        return null
    }

    if(!editing) {
        return (
            <div>
                <form onSubmit={submit}>
                    <label>Edit Comment</label>
                    <input type="text" name="body" value={commentBody} onChange={(e) => setCommentBody(e.target.value)}/>
                    <button type="submit">Update!</button>
                </form>
            </div>
        )
    }
}

export default EditCommentForm;