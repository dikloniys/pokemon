import styled, { css } from "styled-components";
import { baseTheme } from "../../../style/baseTheme";


export const Icon = styled.div`
    width: 24px;
    height: 24px;
`;
export const Text = styled.div`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 9px;
    line-height: 9px;

`;
export const Button = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 56px;
    min-height: 39px;
    ${(props) => props.active && css`
        & path{
            fill: #ED6F2D;
        }  
        ${Text} {
            color: ${baseTheme.colors.hover};
        } 
    `}
`;
