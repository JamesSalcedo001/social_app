import { useContext,useEffect, useState } from "react";
import { UserContext } from "./context/user";

function EditCommentForm({comment, editOff}) {
    const {user, updateComment} = useContext(UserContext)
    const [commentBody, setCommentBody] = useState(comment?.body || "")
    const [editing, setEditing] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        updateComment(comment.id, {
            body: commentBody,
            user_id: user.id,
            id: comment.id
        })
        setEditing(false)
        editOff()
    }

    useEffect(() => {
        return () => {
            setCommentBody("")
        }
    },[])

    if (comment === null) {
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