import React from "react";
import * as styled from "./Footer.style";
import FetchData from "../../Api/FetchData";
import activity from "../../svg/activity.svg";
import fav from "../../svg/fav__orange.svg";

export const Footer = () => {
    const apiData = FetchData({ url: 'https://api.pokemonbattle.me/v2/technical_routes/get_options' });
    return (
        <styled.Footer>
            <styled.Container>
                <styled.Wrapper>
                    <styled.Icon>
                        <img src={activity} alt="" />
                    </styled.Icon>
                    <styled.Text>
                        Healthcheck
                    </styled.Text>
                </styled.Wrapper>
                <styled.Text
                        style={{ opacity: 0.5 }}
                        >
                        {apiData.k_version}
                </styled.Text>
                <styled.Wrapper>
                    <styled.Icon>
                        <img src={fav} alt="" />
                    </styled.Icon>
                    <styled.Text
                        style={{fontFamily: "suisseintl", fontWeight: 500,}}
                    >
                        QA Studio
                    </styled.Text>
                </styled.Wrapper>
            </styled.Container>
        </styled.Footer>
    );
};