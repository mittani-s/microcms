import { getList } from "../../libs/microcms";
import { ArticleList } from "../components/article-list/article-list";
import Header from "../components/header/header";

const StaticPage = async () => {
    const { contents } = await getList();
    if (!contents || contents.length === 0) {
        return <h1>no contents</h1>;
    }
    return (
        <div className={"mx-auto w-full px-5 xs:px-7 sm:px-10 max-w-screen-lg flex min-h-screen flex-col"}>
            <Header />
            <ArticleList props={contents} />
        </div>
    );
};

export default StaticPage;
