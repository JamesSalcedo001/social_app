

function PostCard({post}) {
    
    const {title, content, image, likes, comments} = post
    const postComments = comments.map((c) => <li key={c.id}>{c.body}</li>)
 
        return (
            <div className="postCard">
                <h1>{title}</h1>
                <img className="postImage" alt="post" src={image}/>
                <h5>{content}</h5>
                <h5>likes: {likes}</h5>
                {postComments}
            </div>
        )
}

export default PostCard;