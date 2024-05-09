import styled, { css } from "styled-components";
import { baseTheme } from "../../../style/baseTheme";

export const Pokemons = styled.div`
    margin-bottom: ${baseTheme.with.marginMain};
`;
export const Container = styled.div`
    max-width: ${baseTheme.with.desktop};
    margin: 0 auto;
    @media ( max-width: ${baseTheme.media.extraLarge} ) {
        max-width: ${baseTheme.with.laptop};
    }
    @media ( max-width: ${baseTheme.media.large} ) {
        max-width: ${baseTheme.with.tablett};
    }
    @media ( max-width: ${baseTheme.media.medium} ) {
        max-width: ${baseTheme.with.handy};
    }
`;
export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 100px;
    grid-column-gap: 16px;
    margin-bottom: 100px;
    @media ( max-width: ${baseTheme.media.extraLarge} ) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media ( max-width: ${baseTheme.media.large} ) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ( max-width: ${baseTheme.media.medium} ) {
        grid-template-columns: 1fr 1fr;
    }
`;
export const Wrapper  = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    margin-bottom: 100px;
`;
export const Wrap  = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 20px;
`;
export const Title  = styled.div`
    font-family: 'Pokemon';
    font-size: 38px;
    line-height: 61.75px;
`;
export const WrapFilter  = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
`;
export const Serch  = styled.div`
    padding: 4px 16px 4px 4px;
    border-radius: 15px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${baseTheme.colors.main};
    cursor: pointer;
`;
export const Svg  = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Input = styled.input`
    width: 170px;
    height: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    color: inherit;
    &::placeholder {
        color: inherit;
    }
`;
export const FilterWrapper  = styled.div`
    position: relative;
`;
export const DownloadWrapper  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Download = styled.div`
    padding: 16px 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    border-radius: 12px;
    white-space: nowrap;
    cursor: pointer;
    background: ${baseTheme.colors.hover};
    color: ${baseTheme.colors.main};
`;