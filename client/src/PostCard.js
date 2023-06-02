

function PostCard({post}) {
    
    const {title, content, image } = post
  
        return (
            <div className="postCard">
                <h2>{title}</h2>
                <img className="postImage" alt="post" src={image}/>
                <h5 id="content">{content}</h5>
            </div>
        )
}

export default PostCard;