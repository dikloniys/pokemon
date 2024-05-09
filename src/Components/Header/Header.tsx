import React, { useState } from "react";
import * as styled from "./Header.style";
import { ButtonType } from "../../constants";
import HeaderButton from "./HeaderButton/HeaderButton";
import HeaderMobilButton from "./HeaderMobilButton/HeaderMobilButton";
import Pockemons from "../../svg/Ball.png";
import Coach from "../../svg/Hat.png";
import Rating from "../../svg/Raiting.png";
import Avatar from "../../svg/Avatar.png";
import { ReactComponent as Entrance } from "../../svg/LogIn.svg";
import { ReactComponent as Vs } from "../../svg/VS.svg";
import  { ReactComponent as PockemonsPhone }  from "../../svg/Pockemons.svg";
import  { ReactComponent as CoachPhone }  from "../../svg/Coach.svg";
import  { ReactComponent as RatingPhone }  from "../../svg/Rating.svg";
import  { ReactComponent as Premium }  from "../../svg/Premium.svg";

export const Header = () => {
    const [activeButton, setActiveButton] = useState<ButtonType>(ButtonType.pockemons);

    const handleButtonClick = (button: ButtonType) => {
        setActiveButton(button);
    };

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
                <styled.MobilWrap>
                    <styled.MobilNav>
                        <HeaderMobilButton
                            text="Покемоны"
                            handleButtonClick={handleButtonClick}
                            ButtonType={ButtonType.pockemons}
                            activeButton={activeButton}
                            icon={PockemonsPhone}
                        />
                        <HeaderMobilButton
                            text="Тренеры"
                            handleButtonClick={handleButtonClick}
                            ButtonType={ButtonType.coach}
                            activeButton={activeButton}
                            icon={CoachPhone}
                        />
                        <HeaderMobilButton
                            text="Рейтинг"
                            handleButtonClick={handleButtonClick}
                            ButtonType={ButtonType.rating}
                            activeButton={activeButton}
                            icon={RatingPhone}
                        />
                        <styled.MobilButton>
                            <styled.MobilSvg>
                                <img src={Avatar} alt="" />
                                <styled.MobilPremiumMarker>
                                    <Premium />
                                </styled.MobilPremiumMarker>
                            </styled.MobilSvg>
                            <styled.MobilButtonText>
                                Профиль
                            </styled.MobilButtonText>
                        </styled.MobilButton>
                    </styled.MobilNav>
                    <styled.MobilSafeZone>
                        <styled.SafeZoneButton>
                        </styled.SafeZoneButton>
                    </styled.MobilSafeZone>
                </styled.MobilWrap>
            </styled.Container>
        </styled.Header>
    );
};