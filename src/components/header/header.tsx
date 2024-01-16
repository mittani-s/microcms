import HeaderLeft from "./header_left";
import { HeaderRight } from "./header_right";

import { memo } from "react";
import s from "./styles.module.scss";

const Header = memo(function HTML() {
    return (
        <header className={`${s.header}`}>
            <div className={s.wrapper}>
                <HeaderLeft />
                {/* <HeaderRight /> */}
            </div>
        </header>
    );
});

export default Header;
