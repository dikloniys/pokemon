
import React, { FC } from "react";
import { IHeaderButtonProps } from "../interface";
import * as styled from "./HeaderButton.style";

const HeaderButton: FC<IHeaderButtonProps> = ({
    text, icon, handleButtonClick,ButtonType,activeButton
}) => {
    return (
        <styled.Button
            onClick={() => handleButtonClick(ButtonType)}
            active={activeButton === ButtonType}
        >
            <styled.Icon>
                <img src={icon} alt="" />
            </styled.Icon>
            <styled.Text>
                {text}
            </styled.Text>
        </styled.Button>
    );
};

export default HeaderButton;