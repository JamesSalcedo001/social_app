// import {useState} from "react"
// import CommentsList from "./CommentsList"

// function PostCard({post}) {
//     const [showComments, setShowComments] = useState(false)

//     console.log(post)
//     const {title, content, image, likes} = post

//     if (!showComments) {
//         return (
//             <div className="postCard">
//                 <h1>{title}</h1>
//                 <img className="postImage" alt="post" src={image}/>
//                 <h5>{content}</h5>
//                 <h5>likes: {likes}</h5>
//                 <button onClick={() => setShowComments(true)}>Comments</button>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h1>HEllo THIS IS A COMMENT SECTION</h1>
//                 <CommentsList setShowComments={setShowComments}/>
//             </div>
//         )
//     }
// }

// export default PostCard;


import {useState} from "react"


function PostCard({post}) {
    const [showComments, setShowComments] = useState(false)

    const {title, content, image, likes, comments} = post
    const c = comments.map(comment => <li key={comment.id}>{comment.body}</li>)

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
            <div className="postComments">
                <ul>{c}</ul>
                <button onClick={() => setShowComments(false)}>Show Post</button>
            </div>
        )
    }
}

export default PostCard;