import styled from "styled-components";
import { baseTheme } from "./style/baseTheme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 40px;
    background:${baseTheme.colors.gradient} 50% 100%;;
`;
export const Content  = styled.div`
    flex-grow: 1;
`;
