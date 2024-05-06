import React, { useState } from "react";
import * as styled from "./Header.style";
import { ButtonType } from "../../constants";
import HeaderButton from "./HeaderButton/HeaderButton";
import pockemons from "../../svg/MenuIcon.png";
import coach from "../../svg/Menuicon(1).png";
import rating from "../../svg/MenuIcon(2).png";
import entrance from "../../svg/LogIn.svg";

export const Header = () => {
    const [activeButton, setActiveButton] = useState<ButtonType>(ButtonType.pockemons);

    const handleButtonClick = (button: ButtonType) => {
        setActiveButton(button);
    };

    return (
        <styled.Header>
            <styled.Container>
                <styled.Fights>
                    <HeaderButton />
                </styled.Fights>
                <styled.Main>
                    <HeaderButton 
                        handleButtonClick={handleButtonClick}
                        Icon={pockemons}
                        text="Покемоны"
                        activeButton={activeButton}
                        roomsType={ButtonType.pockemons}
                    />
                    <HeaderButton 
                        handleButtonClick={handleButtonClick}
                        Icon={coach}
                        text="Тренеры"
                        activeButton={activeButton}
                        roomsType={ButtonType.coach}
                    />
                    <HeaderButton 
                        handleButtonClick={handleButtonClick}
                        Icon={rating}
                        text="Рейтинг"
                        activeButton={activeButton}
                        roomsType={ButtonType.rating} 
                    />
                </styled.Main>
                <styled.Personal>
                    <HeaderButton 
                        handleButtonClick={handleButtonClick}
                        Icon={entrance}
                        activeButton={activeButton}
                    />
                </styled.Personal>
            </styled.Container>
        </styled.Header>
    );
};