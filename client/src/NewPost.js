import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function NewPost({showingForm}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
  
    const { addPost, errors} = useContext(UserContext)

   const submit = (e) => {
    e.preventDefault()
        addPost({
            title: title,
            content: content,
            image: image
        }, showingForm)
   }

 
    return (
        <div>
            <form onSubmit={submit} id="postForm">
                <label htmlFor="title">Title</label>
                <input placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value) } name="title"/>

                <label htmlFor="content">Content</label>
                <input placeholder="content" type="text" value={content} onChange={(e) => setContent(e.target.value) } name="content"/>

                <label htmlFor="image">Image URL</label>
                <input placeholder="image" type="text" value={image} onChange={(e) => setImage(e.target.value) } name="image"/>

                <input type="submit" value="Post!"/>
            </form>
            {errors}
        </div>
    )
}

export default NewPost;