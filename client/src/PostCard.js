

function PostCard({post}) {
    console.log(post)
    const {title, content, image, likes} = post
    return (
        <div>
            <h1>{title}</h1>
            <img alt="post" src={image}/>
            <h5>{content}</h5>
            <h5>likes: {likes}</h5>
        </div>
    )
}

export default PostCard;