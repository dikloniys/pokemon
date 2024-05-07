import React, { useState } from "react";
import * as styled from "./Header.style";
import FetchData from "../../Api/FetchData";
import { ButtonType } from "../../constants";
import HeaderButton from "./HeaderButton/HeaderButton";
import Pockemons from "../../svg/MenuIcon.png";
import Coach from "../../svg/Menuicon(1).png";
import Rating from "../../svg/MenuIcon(2).png";
import Avatar from "../../svg/Avatar.png";
import { ReactComponent as Entrance } from "../../svg/LogIn.svg";
import  { ReactComponent as Vs }  from "../../svg/VS.svg";

export const Header = () => {
    const [activeButton, setActiveButton] = useState<ButtonType>(ButtonType.pockemons);

    const handleButtonClick = (button: ButtonType) => {
        setActiveButton(button);
    };
    
    const apiData = FetchData({ url: 'https://lavka.pokemonbattle-stage.me/get_avatars' });
    console.log(apiData);

    return (
        <styled.Header>
            <styled.Container>
                <styled.Wrapper>
                    <styled.Wrap>
                        <styled.Button>
                            <styled.WrapStarter>
                                <Vs />
                            </styled.WrapStarter>
                        </styled.Button>
                        <styled.Main>
                            <HeaderButton 
                                handleButtonClick={handleButtonClick}
                                icon={Pockemons}
                                text="Покемоны"
                                activeButton={activeButton}
                                ButtonType={ButtonType.pockemons}
                            />
                            <HeaderButton 
                                handleButtonClick={handleButtonClick}
                                icon={Coach}
                                text="Тренеры"
                                activeButton={activeButton}
                                ButtonType={ButtonType.coach}
                            />
                            <HeaderButton 
                                handleButtonClick={handleButtonClick}
                                icon={Rating}
                                text="Рейтинг"
                                activeButton={activeButton}
                                ButtonType={ButtonType.rating} 
                            />
                        </styled.Main>
                    </styled.Wrap>
                    <styled.Personal>
                                <styled.Button>
                                    <styled.ButtonWrap>
                                        <styled.IdWrap>
                                            <styled.Id>
                                                ID
                                            </styled.Id>
                                            <styled.Numbers>
                                                1001
                                            </styled.Numbers>
                                        </styled.IdWrap>
                                        <styled.Icon>
                                            <img src={Avatar} alt="" />
                                        </styled.Icon>
                                        <styled.PremiumMarker>
                                            Premium
                                        </styled.PremiumMarker>
                                    </styled.ButtonWrap>
                                </styled.Button>
                                <styled.Button>
                                    <styled.WrapEntrance>
                                        <Entrance />
                                    </styled.WrapEntrance>
                                </styled.Button>
                    </styled.Personal>
                </styled.Wrapper>
            </styled.Container>
        </styled.Header>
    );
};