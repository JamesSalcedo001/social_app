import {useState} from "react"
import CommentsList from "./CommentsList"

function PostCard({post}) {
    const [showComments, setShowComments] = useState(false)

    console.log(post)
    const {title, content, image, likes} = post

    if (!showComments) {
        return (
            <div className="postCard">
                <h1>{title}</h1>
                <img className="postImage" alt="post" src={image}/>
                <h5>{content}</h5>
                <h5>likes: {likes}</h5>
                <button onClick={() => setShowComments(true)}>Comments</button>
            </div>
        )
    } else {
        return (
            <div>
                <CommentsList setShowComments={setShowComments}/>
            </div>
        )
    }
}

export default PostCard;