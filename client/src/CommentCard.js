// import { useContext } from "react";
// import { UserContext } from "./context/user";

// function CommentCard({setShowComments, setCommenting}) {
//     const {loggedIn} = useContext(UserContext)

//     if (loggedIn) {
//         return (
//             <div className="commentCard">
//                 <h3>User</h3>
//                 <h3>User Image Here</h3>
//                 <h5>this is so right! I agree!</h5>
//                 <button onClick={() => setShowComments(false)}>See Post</button>
//                 <button onClick={() => setCommenting(true)}>Comment!</button>
//             </div>
//         )
//     } else {
//         return (
//             <h1>Please Login or Sign Up!</h1>
//         )
//     }
// }

// export default CommentCard;



// import { useContext } from "react";
// import { UserContext } from "./context/user";

function CommentCard({comment}) {
    const {body, likes, user, post} = comment
    // console.log(comment.post.title)
        return (
            <div className="commentCard">
                {/* <h3>Post: {post.title}</h3>
                <h3>User: {user.username}</h3> */}
                <h5>Comment: {body}</h5>
                <h5>Likes: {likes}</h5>
            </div>
        )
}

export default CommentCard;