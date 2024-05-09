import styled, { css } from "styled-components";
import { baseTheme } from "../../../style/baseTheme";

export const Dropdown  = styled.div<{ isActive: boolean }>`
    position: relative;
    background: ${baseTheme.colors.main};
    border-radius: 12px;
    border: 1px solid transparent;
    ${(props) => props.isActive && css`
        border: 1px solid ${baseTheme.colors.hover};
    `}
`;

export const OptionsButton = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 12px 12px 12px 14px;
    cursor: pointer;
    gap: 42px;
`;
export const Filter  = styled.div`
    width: 48px;
    height: 48px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid transparent;
    background: ${baseTheme.colors.main};
    cursor: pointer;
`;

export const Text  = styled.div`
    text-transform: none;
`;
export const Svg  = styled.div<{ isActive: boolean }>`
    ${(props) => props.isActive && css`
        transform: rotate(180deg);
    `}
`;

export const OptionsContainer = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: 288px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    padding: 26px 26px 0;
    z-index: 1;
`;

export const Title = styled.label`
    font-weight: 500;
    font-style: 24px;
    line-height: 29.05px;
    margin-bottom: 20px;
`;
export const Option = styled.label<{ isActive: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 16px 0;
    ${(props) => props.isActive && css`
        padding: 17px 0 16px;
    `}
`;

export const RadioButton = styled.input`
    display: none;
`;

export const Label = styled.label`
    display: block;
    text-transform: none;
    font-weight: 500;
    font-style: 16px;
    line-height: 16px;
    cursor: pointer;
`;

export const OptionsDot  = styled.div<{ isActive: boolean }>`
    width: 31px;
    height: 31px;
    background: ${baseTheme.colors.negative};
    border-radius: 50%;
    ${(props) => props.isActive && css`
        background: ${baseTheme.colors.hover};
    `}
`;
