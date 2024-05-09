import styled from "styled-components";
import { baseTheme } from "../../style/baseTheme";

export const Header = styled.header`
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
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media ( max-width:${baseTheme.media.medium}) {
        display: none;
    }
`;
export const MobilWrap = styled.div`
    display: none;
    position: fixed;
    z-index: 1000;
    width: 100%;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 0px);
    @media ( max-width: ${baseTheme.media.medium} ) {
        display: block;
    }
`;
export const MobilNav = styled.div`
    display: flex;
    justify-content: center;
    gap: 25.33px;
    padding: 12px 30px 0 ;
    border-radius: 12px 12px 0px 0px;
    background: ${baseTheme.colors.main};
`;
export const MobilButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 56px;
    min-height: 39px;
`;
export const MobilSvg = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    & img{
        border-radius: 50%;
    }
`;
export const MobilButtonText = styled.div`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 9px;
    line-height: 9px;
`;
export const MobilPremiumMarker = styled.div`
    position: absolute;
    height: 12px;
    display: flex;
    right: 0;
    bottom: 0;
    transform: translate(50%, 0);
`
export const MobilSafeZone = styled.div`
    padding: 24px 0 5px;
    background: ${baseTheme.colors.main};
    display:flex;
    justify-content: center;
`;
export const SafeZoneButton = styled.div`
    width: 96px;
    height: 3px;
    border-radius: 2px;
    background: ${baseTheme.colors.safeZone};
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
    @media ( min-width: ${baseTheme.media.medium} ) {
        &:hover{
            border: 1px solid ${baseTheme.colors.hover};
        }
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