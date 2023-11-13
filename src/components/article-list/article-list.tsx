import Link from "next/link";
import { getList } from "../../../libs/microcms";

export const ArticleList = async () => {
    const { contents } = await getList();
    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>;
    }
    return (
        <ul className="m-5">
            {contents.map((post) => {
                return (
                    <li key={post.id}>
                        <Link href={`/article/${post.id}`} className="text-sky-500 text-lg">
                            {post.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
