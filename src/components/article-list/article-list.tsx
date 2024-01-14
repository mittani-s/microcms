import Link from "next/link";
import { Blog, getList } from "../../../libs/microcms";
import styled from "styled-components";
import { memo, useEffect, useState } from "react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import s from "./styles.module.scss";
interface ArticleListProps {
    props: MicroCMSListResponse<Blog>["contents"];
}

export const ArticleList = memo(function HTML(props: ArticleListProps) {
    return (
        <ul className={`${s.postLists}`}>
            {props.props.map((post) => {
                const date = new Date(`${post.updatedAt}`).toISOString().split("T")[0];
                return (
                    <li className={`${s.postList}`} key={post.id}>
                        <Link href={`/article/${post.id}`}>
                            <div className={`${s.imgWrapper}`}>
                                <img src={post.thumbnail.url} alt={post.title} />
                            </div>
                        </Link>
                        <Link href={`/article/${post.id}`} className="text-sky-500 text-lg">
                            <h2 className={`${s.title}`}>{post.title}</h2>
                        </Link>
                        <div className={`${s.date}`}>更新：{date}</div>
                    </li>
                );
            })}
        </ul>
    );
});
