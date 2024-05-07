import styled from "styled-components";
import { baseTheme } from "../../style/baseTheme";

export const Header = styled.header`
    
`;
export const Container = styled.div`
    max-width: ${baseTheme.with.desktop};
    margin: 0 auto;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Wrap = styled.div`
    display: flex;
    gap: 40px;
`;
export const Button = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid transparent;
    background: ${baseTheme.colors.main};
    min-width: 60px;
    &:hover{
        border: 1px solid ${baseTheme.colors.hover};
        color: ${baseTheme.colors.hover};
    }
`;
export const WrapStarter = styled.div`
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Main = styled.div`
    display: flex;
    gap: 12px;
`;
export const Personal = styled.div`
    display: flex;
    gap: 12px;
`;
export const ButtonWrap = styled.div`
    padding: 10px 10px 10px 18px;
    display: flex;
    align-items: center;
    gap: 18px;
`;
export const IdWrap = styled.div`
`;
export const Id = styled.span`
    margin-right: 2px;
    opacity: 0.4;
`;
export const Numbers = styled.span`
    font-weight: 500;
`;
export const Icon = styled.div`
    max-width: 43px;
    max-height: 40px;
`;
export const PremiumMarker = styled.div`
    color: ${baseTheme.colors.main};
    background-color: ${baseTheme.colors.hover};
    border-radius: 16px;
    font-size: 12px;
    line-height: 16px;
    padding: 0px 4px;
    position: absolute;
    transform: translate( 0%, -50%);
    right: 0;
    top: 0;
`;
export const WrapEntrance = styled.div`
    padding:10px;
`;