import { useParams } from "react-router-dom";
import articles from './articleContent'
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    // const params = useParams();
    // const { articleId } = params;
    const { articleId } = useParams();
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
                {article.content.map((paragraph, i) =>(
                    <p key={i}>{paragraph}</p>
                ))}
            
            </>
    )
}

export default ArticlePage;