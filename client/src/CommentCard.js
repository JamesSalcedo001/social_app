
function CommentCard({comment}) {
    const {body, likes, user, post} = comment
  
        return (
            <div className="commentCard">
                <h5>{user.username}</h5>
                <h5>{post.title}</h5>
                <h5>{body}</h5>
                <h5>{likes}</h5>
            </div>
        )
}

export default CommentCard;