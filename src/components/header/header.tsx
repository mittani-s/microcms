"use client";
import styled from "styled-components";
import HeaderLeft from "./header_left";
import { HeaderRight } from "./header_right";

import { memo } from "react";
import s from "./styles.module.scss";

const Header = memo(function HTML() {
    return (
        <header className={`${s.header}`}>
            <_wrapper>
                <HeaderLeft />
                {/* <HeaderRight /> */}
            </_wrapper>
        </header>
    );
});

export default Header;

const _wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
