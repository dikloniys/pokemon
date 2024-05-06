import { ButtonType } from "./constants";

export interface IHeaderButtonProps {
    id: string;
    text?: string;
    icon?: string;
    ButtonType: ButtonType;
    activeButton: ButtonType;
    handleButtonClick: (active: ButtonType) => void;
}
