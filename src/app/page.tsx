import { ArticleList } from "./components/article-list/article-list";
import Header from "./components/header/header";

export default async function StaticPage() {
    return (
        <div>
            <Header />
            <ArticleList />
        </div>
    );
}
