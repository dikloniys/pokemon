import styled, { css } from "styled-components";
import { baseTheme } from "../../../../style/baseTheme";

export const Card = styled.div`
    position: relative;
    padding: 126px 24px 24px;
    min-height: 259px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: ${baseTheme.colors.main};
    border-radius: 32px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Img = styled.div`
    max-width: 178px;
    max-height: 178px;
    position: absolute;
    top: -72px;
`;
export const Title = styled.div`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 24px;
    line-height: 29.05px;
    margin-bottom: 12px;
`;
export const Wrap = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;
export const Pokeball = styled.div`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
`;
export const Attack = styled.div <{ attack: string }>`
    font-size: 14px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 12px;
    border-radius: 32px;
    ${({ attack }) => {
        switch (attack) {
            case "1":
                return css`
                    color: #45D221;
                    border: 1px solid #45D221;
                `;
            case "2":
                return css`
                    color: #BB2DED;
                    border: 1px solid #BB2DED;
                `;
            default:
                return css`
                    color: #ED2D2D;
                    border: 1px solid #ED2D2D;
                `;
        }
    }}
`;
export const IdWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px ;
    cursor: pointer;
`;
export const Id = styled.div`
    font-size: 16px;
    line-height: 16px;
`;
export const Copy  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
`;