import { ArticleList } from "../components/article-list/article-list";
import Header from "../components/header/header";

const StaticPage = async () => {
    return (
        <div>
            <Header />
            <ArticleList />
        </div>
    );
};

export default StaticPage;
