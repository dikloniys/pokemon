import { ButtonType } from "./constants";

export interface IHeaderButtonProps {
    text?: string;
    icon?: any;
    ButtonType: ButtonType;
    activeButton: ButtonType;
    handleButtonClick: (active: ButtonType) => void;
}