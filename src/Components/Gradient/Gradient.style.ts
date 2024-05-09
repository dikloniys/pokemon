import styled from "styled-components";
import { baseTheme } from "../../style/baseTheme";

export const Gradient  = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background:${baseTheme.colors.gradient} ;
`;
