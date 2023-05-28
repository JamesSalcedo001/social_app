// import { useContext, useState } from "react";
// import { UserContext } from "./context/user";
// import CommentCard from "./CommentCard";
// import CommentForm from "./CommentForm";




// function CommentsList({setShowComments}) {
//     const {posts, loggedIn } = useContext(UserContext)
//     const [commenting, setCommenting] = useState(false)

//     if (loggedIn) {
//         const postComments = posts?.comments?.map(comment => <CommentCard setCommenting={setCommenting} setShowComments={setShowComments} key={comment.id} comment={comment} />)
//         return (
//             <div >
//                 {commenting ? <CommentForm/> : <ul className="commentCards">{postComments}</ul> }
//             </div>
//         )
//     } else {
//         return (
//             <h1>Please Login or Sign Up!</h1>
//         )
//     }
// }

// export default CommentsList;






import { useContext, useState } from "react";
import { UserContext } from "./context/user";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";




function CommentsList() {
    const {user, loggedIn} = useContext(UserContext)
    const [commenting, setCommenting] = useState(false)

    const addingNewComment = () => {setCommenting(false)}

    if (loggedIn) {
        const userComments = user?.comments?.map(comment => <CommentCard key={comment.id} comment={comment} id={comment.id}/>)
        return (
            <div >
                {commenting ? <CommentForm addingNewComment={addingNewComment}/> : <button onClick={() => setCommenting(true)}>Post a comment!</button>}
                {userComments}
            </div>
        )
    } else {
        return (
            <div>Please Login or Sign Up!</div>
        )
    }
}

export default CommentsList;