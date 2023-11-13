import { Raleway, Sawarabi_Gothic } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { TOP_URL } from "../../../libs/microcms";

const raleway = Raleway({
    weight: "800",
    subsets: ["latin"],
});

const sawarabiGothic = Sawarabi_Gothic({
    weight: "400",
    subsets: ["latin"],
});

const HeaderLeft = () => {
    return (
        <_headerLeft>
            <Head>
                <style>@import url({"https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"});</style>
            </Head>
            <_logo className={`${raleway.className}`}>
                <Link href={TOP_URL}>mittaniblog</Link>
            </_logo>
            <_caption className={`${sawarabiGothic.className}`}>
                <_captionLine>人生で得た経験を発信するブログです。</_captionLine>
                <_captionLine>主にITに関連した情報を発信します。</_captionLine>
            </_caption>
        </_headerLeft>
    );
};

export default HeaderLeft;

const _headerLeft = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 8px;
`;

const _logo = styled.h1`
    color: #fff;
    font-size: 36px;
    text-align: center;
    line-height: 1.5;
`;

const _caption = styled.p`
    text-align: left;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 14px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const _captionLine = styled.span`
    display: inline-block;
`;
