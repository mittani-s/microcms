import { TOP_URL } from "@/constants/const";
import { Raleway, Sawarabi_Gothic } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { memo } from "react";
import s from "./styles.module.scss";

const raleway = Raleway({
    weight: "800",
    subsets: ["latin"],
});

const sawarabiGothic = Sawarabi_Gothic({
    weight: "400",
    subsets: ["latin"],
});

const HeaderLeft = memo(function HTML() {
    return (
        <div className={s.headerLeft}>
            <Head>
                <style>@import url({"https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"});</style>
            </Head>
            <h1 className={`${raleway.className} ${s.logo}`}>
                <Link href={TOP_URL}>mittaniblog</Link>
            </h1>
            <p className={`${sawarabiGothic.className} ${s.caption}`}>
                <span className={s.captionLine}>人生で得た経験を発信するブログです。</span>
                <span className={s.captionLine}>主にITに関連した情報を発信します。</span>
            </p>
        </div>
    );
});

export default HeaderLeft;
