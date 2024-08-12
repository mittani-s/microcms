import { Sidebar } from "@/components/sidebar/sidebar";
import { getList } from "../../libs/microcms";
import Header from "@/components/header/header";
import { ArticleList } from "@/components/article-list/article-list";

const StaticPage = async () => {
    const { contents } = await getList();
    if (!contents || contents.length === 0) {
        return <h1>no contents</h1>;
    }
    return (
        <>
            <Header />
            <div className="page_content_wrapper">
                <ArticleList props={contents} />
                <Sidebar />
            </div>
        </>
    );
};

export default StaticPage;
