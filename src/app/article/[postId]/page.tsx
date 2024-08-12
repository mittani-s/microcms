import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";
import Header from "@/components/header/header";
import s from "./styles.module.scss";
import { load } from "cheerio"; // cheerioの直接参照は非推奨だったため、loadをimport
import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import { Sidebar } from "@/components/sidebar/sidebar";

export async function generateStaticParams() {
    const { contents } = await getList();
    const paths = contents.map((post) => {
        return {
            postId: post.id,
        };
    });
    return [...paths];
}

export default async function StaticDetailPage({ params: { postId } }: { params: { postId: string } }) {
    const post = await getDetail(postId);
    if (!post) {
        notFound();
    }
    console.log();
    const $ = load(post.content);
    $("pre code").each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text());
        $(elm).html(result.value);
        $(elm).addClass("hljs");
    });
    post.content = $.html();

    const date = new Date(`${post.updatedAt}`).toISOString().split("T")[0];
    return (
        <>
            <Header />
            <div className={s.content_wrapper}>
                <div className={s.article_wrapper}>
                    <div className={s.title_area}>
                        <h1 className={s.h1}>{post.title}</h1>
                        <time className={`${s.date}`}>更新日：{date}</time>
                    </div>
                    <div className={s.article_area}>
                        <div className={s.article} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
