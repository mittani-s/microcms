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
            <div className={s.sidebar_textarea}>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</div>
        </div>
    );
});
