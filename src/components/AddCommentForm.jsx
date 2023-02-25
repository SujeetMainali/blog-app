import axios from "axios";
import { useState } from "react"

const AddCommentForm = ({ articleName, onArticleUpdated}) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            postedBy : name,
            text : commentText,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }

    return (
        <div id='add-comment-form'>
            <h3>Add a comment</h3>
            <label>Name:
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Comment:
                <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    name="" id="" cols="50" rows="4"></textarea>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm