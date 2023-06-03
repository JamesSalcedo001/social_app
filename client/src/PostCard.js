

function PostCard({post}) {
    
    const {title, content, image } = post
  
        return (
            <div className="postCard">
                <img className="postImage" alt="post" src={image}/>
                <h2>{title}</h2>
                <h5 id="content">{content}</h5>
            </div>
        )
}

export default PostCard;