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
        const loadArticleInfo = async()=>{
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo)
        }
        loadArticleInfo();
        // setArticleInfo({ upvotes : 3 , comments: [] });
        },[]);
   
    //all three ways are correct ways to get id in url parameters.
    const article = articles.find(article => article.name === articleId);

    if(!article){
        return (<NotFoundPage/>)
    }
    return (
        <>
            <h1>
                {article.name}
            </h1>
            <p>this article has {articleInfo.upvotes} upvotes </p>
                {article.content.map((paragraph, i) =>(
                    <p key={i}>{paragraph}</p>
                ))}
                <CommentList comments={ articleInfo.comments} />
            
            </>
    )
}

export default ArticlePage;