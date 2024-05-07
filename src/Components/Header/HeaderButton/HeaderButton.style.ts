import styled, { css } from "styled-components";
import { baseTheme } from "../../../style/baseTheme";

export const Button = styled.div<{ active: boolean }>`
    border-radius: 15px;
    font-size: 16px;
    line-height: 16px;
    padding: 6px 24px 6px 10px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    background: ${baseTheme.colors.main};
    &:hover{
        border: 1px solid ${baseTheme.colors.hover};
        color: ${baseTheme.colors.hover};
    }
    ${(props) => props.active && css`
        border: 1px solid #ED6F2D;
    `}
`;
export const Icon = styled.div`
`;
export const Text = styled.div`

`;
