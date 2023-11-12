// static/[postId]/page.tsx

import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";
import Header from "@/app/components/header/header";

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

    return (
        <>
            <Header />
            <div className="mt-5 mr-1 ml-1">
                <h1>{post.title}</h1>
                <div>{parse(post.content)}</div>
            </div>
        </>
    );
}
