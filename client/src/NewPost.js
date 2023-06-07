import { useContext, useState } from "react";
import { UserContext } from "./context/user";

function NewPost({showingForm}) {
    const { addPost, errors} = useContext(UserContext)

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: ""
    })
    const {title, content, image} = formData


    const submit = (e) => {
    e.preventDefault()
    addPost({...formData}, showingForm)
   }
   

   const changeHandler = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
   }
 
 
   const errorList = errors.map(e => <h2 key={e}>{e}</h2>)

    return (
        <div>
            <form onSubmit={submit} id="postForm">
                <label htmlFor="title">Title</label>
                <input className="postFormInput" placeholder="title" type="text" value={title} onChange={changeHandler} name="title"/>

                <label htmlFor="content">Content</label>
                <input className="postFormInput" placeholder="content" type="text" value={content} onChange={changeHandler} name="content"/>

                <label htmlFor="image">Image</label>
                <input className="postFormInput" placeholder="image" type="text" value={image} onChange={changeHandler} name="image"/>

                <input className="postFormInput" type="submit" value="Post!"/>
            </form>
            <ul className="errors">
                {errorList}
            </ul>
            
        </div>
    )
}

export default NewPost;