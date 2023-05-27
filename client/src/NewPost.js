import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function NewPost() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: ""
    })
    const { addPost, errors} = useContext(UserContext)
    const {title, content, image} = formData

   const submit = (e) => {
    e.preventDefault()
    addPost({
        title,
        content,
        image
    })
   }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div>
            <form onSubmit={submit} id="postForm">
                <label htmlFor="title">Title</label>
                <input placeholder="title" type="text" value={title} onChange={changeHandler} name="title"/>

                <label htmlFor="content">Content</label>
                <input placeholder="content" type="text" value={content} onChange={changeHandler} name="content"/>

                <label htmlFor="image">Image URL</label>
                <input placeholder="image" type="text" value={image} onChange={changeHandler} name="image"/>

                <input type="submit" value="Post!"/>
            </form>
            {errors}
        </div>
    )
}

export default NewPost;