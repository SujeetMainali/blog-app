import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from './articleContent';
import axios from 'axios';
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/commentList";

const ArticlePage = () => {
    // const params = useParams();
    // const { articleId } = params;
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();
    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo)
        }
        loadArticleInfo();
        // setArticleInfo({ upvotes : 3 , comments: [] });
    }, []);

    //all three ways are correct ways to get id in url parameters.
    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
      let  response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return (<NotFoundPage />)
    }
    return (
        <>
            <h1>
                {article.name}
            </h1>
            <div className="upvotes-section">
                <button onClick={addUpvote}>Upvote</button>
                <p>this article has {articleInfo.upvotes} upvotes </p>
            </div>

            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            <CommentList comments={articleInfo.comments} />

        </>
    )
}

export default ArticlePage;