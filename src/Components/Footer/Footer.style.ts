import styled from "styled-components";
import { baseTheme } from "../../style/baseTheme";

export const Footer = styled.div`
    @media ( max-width:${baseTheme.media.medium}) {
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
    align-items: center;
    @media ( max-width:${baseTheme.media.extraLarge}) {
        max-width: ${baseTheme.with.laptop};
    }
    @media ( max-width:${baseTheme.media.large}) {
        max-width: ${baseTheme.with.tablett};
    }
`;
export const Text = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const Icon = styled.div`
    margin-right: 8px;
`;
