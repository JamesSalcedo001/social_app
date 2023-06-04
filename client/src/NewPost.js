import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function NewPost({showingForm}) {
    const { addPost, errors} = useContext(UserContext)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")

  
   const submit = (e) => {
    e.preventDefault()
        addPost({
            title: title,
            content: content,
            image: image
        }, showingForm)
   }

 
   const errorList = errors.map(e => <h2 key={e}>{e}</h2>)
    return (
        <div>
            <form onSubmit={submit} id="postForm">
                <label htmlFor="title">Title</label>
                <input className="postFormInput" placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value) } name="title"/>

                <label htmlFor="content">Content</label>
                <input className="postFormInput" placeholder="content" type="text" value={content} onChange={(e) => setContent(e.target.value) } name="content"/>

                <label htmlFor="image">Image</label>
                <input className="postFormInput" placeholder="image" type="text" value={image} onChange={(e) => setImage(e.target.value) } name="image"/>

                <input className="postFormInput" type="submit" value="Post!"/>
            </form>
            <ul className="errors">
                {errorList}
            </ul>
            
        </div>
    )
}

export default NewPost;