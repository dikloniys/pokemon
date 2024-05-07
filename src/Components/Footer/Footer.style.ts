import styled from "styled-components";
import { baseTheme } from "../../style/baseTheme";

export const Footer = styled.div`
    display: block;
    @media (max-width: 1240px) {
        display: none;
    }
`;
export const Container = styled.div`
    margin: 0 auto;
    max-width: ${baseTheme.with.desktop};
    padding: 40px 0px;
    border-top: 2px solid ${baseTheme.colors.main};
    display: flex;
    justify-content: space-between;
`;
export const Text = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const Icon = styled.div`
    margin-right: 8px;
`;
