import styled from "styled-components";
import { baseTheme } from "./style/baseTheme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    min-height: 100vh;
    background:  radial-gradient( ${baseTheme.colors.gradient});
    background-position: center calc(180px + 0.5 * (100% - 180px));
`;
export const Content  = styled.div`
    flex-grow: 1;
`;
