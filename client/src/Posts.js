import { useContext, useState} from "react";
import { UserContext } from "./context/user";
import PostCard from "./PostCard"
import NewPost from "./NewPost";

function Posts() {
    const {posts, loggedIn} = useContext(UserContext)
    const [showForm, setShowForm] = useState(false)
 
    const showingForm = () => setShowForm(showForm => !showForm)

    if (loggedIn) {

        const postMap = posts.map(post => <PostCard key={post.id} post={post}/>)
        return (
            <div id="postContainer">
                <div>
                    { showForm ? <NewPost showingForm={showingForm}/> : <button id="postFormButton" onClick={showingForm}>Add Post!</button>}
                </div>

                <div>
                    <h1 id="postList">Posts</h1>
                    {postMap}
                </div>
            </div>
        )
    } else {
        return (
            <h1 className="no-access">Please Login or Sign Up</h1>
        )
    }
}

export default Posts;