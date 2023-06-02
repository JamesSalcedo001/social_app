

function PostCard({post}) {
    
    const {title, content, image } = post
  
        return (
            <div className="postCard">
                <h1>{title}</h1>
                <img className="postImage" alt="post" src={image}/>
                <h5>{content}</h5>
            </div>
        )
}

export default PostCard;