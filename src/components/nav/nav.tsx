import styled from "styled-components";

const Nav = () => {
    return (
        <_nav>
            <ul>
                <li>Home</li>
                <li>作成中...</li>
                <li>作成中...</li>
                <li>作成中...</li>
            </ul>
        </_nav>
    );
};

export default Nav;

const _nav = styled.nav`
    width: 100%;
    @media (max-width: 768px) {
        display: none;
    }
    ul {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
            text-align: center;
            display: flex;
            align-items: center;
            margin-left: 20%;
            color: #eee;
            &:first-child {
                margin-left: 0;
            }
        }
    }
`;
