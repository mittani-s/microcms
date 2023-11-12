import styled from "styled-components";
import Nav from "../nav/nav";

export const HeaderRight = () => {
    return (
        <_headerRight>
            <Nav />
        </_headerRight>
    );
};

const _headerRight = styled.div`
    width: 50%;
    display: grid;
    place-items: center;
    justify-items: end;
`;
