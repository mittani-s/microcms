import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";
import Header from "@/components/header/header";
import s from "./styles.module.scss";

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
    const date = new Date(`${post.updatedAt}`).toISOString().split("T")[0];
    return (
        <div className={"mx-auto w-full px-5 xs:px-7 sm:px-10 max-w-screen-lg flex min-h-screen flex-col"}>
            <Header />
            <div className={"mt-5"}>
                <h1 className={s.h1}>{post.title}</h1>
                <time className={`${s.date}`}>更新：{date}</time>
                <div className={s.content}>{parse(post.content)}</div>
            </div>
        </div>
    );
}
