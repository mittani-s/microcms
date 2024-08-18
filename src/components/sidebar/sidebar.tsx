import { memo } from "react";

import s from "./styles.module.scss";
export const Sidebar = memo(function HTML() {
    return (
        <div className={s.sidebar_wrapper}>
            <div className={s.sidebar_header}>
                <div className={s.icon}>
                    <img src="/mittani.jpg" alt="" className={s.sidebar_icon} />
                </div>
                <div className={s.name_area}>
                    <div className={s.name}>みったに</div>
                    <div className={s.name_sub}>Web系エンジニア</div>
                </div>
            </div>
            <div className={s.sidebar_textarea}>
                新卒で電機メーカーのソフトウェアエンジニアとして就職。
                <br />
                その後にWeb制作のフリーランスとして個人で活動。
                <br />
                現在は自社アパレルEC会社のフルスタックエンジニアとしてWeb開発に従事
            </div>
        </div>
    );
});
