
import React, { FC } from "react";
import * as styled from "./HeaderMobilButton.style";
import { ButtonType } from "../../../constants";

interface IMobilButtonProps {
  text: string;
  handleButtonClick: (button: ButtonType) => void;
  ButtonType: ButtonType;
  activeButton: ButtonType;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const HeaderMobilButton: FC<IMobilButtonProps> = ({
  text,
  handleButtonClick,
  ButtonType,
  activeButton,
  icon: IconComponent
}) => {
  return (
    <styled.Button
      onClick={() => handleButtonClick(ButtonType)}
      active={activeButton === ButtonType}
    >
      <styled.Icon>
        <IconComponent />
      </styled.Icon>
      <styled.Text>
        {text}
      </styled.Text>
    </styled.Button>
  );
};

export default HeaderMobilButton;