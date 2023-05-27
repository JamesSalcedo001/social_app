import { useContext } from "react";
import { UserContext } from "./context/user";
import PostCard from "./PostCard"
import NewPost from "./NewPost";

function Posts() {
    const {posts, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        const postMap = posts.map(post => <PostCard key={post.id} post={post}/>)
        return (
            <div id="postContainer">
                <NewPost/>
                {postMap}
            </div>
        )
    } else {
        return (
            <h1>Please Login or Sign Up</h1>
        )
    }
}

export default Posts;