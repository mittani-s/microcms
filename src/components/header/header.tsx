"use client";
import styled from "styled-components";
import HeaderLeft from "./header_left";
import { HeaderRight } from "./header_right";
import { BLUE } from "@/constants/const";

const Header = () => {
    return (
        <_header>
            <_wrapper>
                <HeaderLeft />
                <HeaderRight />
            </_wrapper>
        </_header>
    );
};

export default Header;

const _header = styled.div`
    width: 100%;
    border-bottom: solid 3px ${BLUE};
`;

const _wrapper = styled.div`
    width: 95%;
    max-width: 1360px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
`;
