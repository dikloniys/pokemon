import React from "react";
import * as styled from "./Footer.style";
import FetchData from "../../Api/FetchData";
import { UrlVersion } from "../../Static/UrlData";
import { ReactComponent as Activity } from "../../svg/activity.svg";
import { ReactComponent as Fav } from "../../svg/fav__orange.svg";

export const Footer = () => {
    const apiData = FetchData({ url: UrlVersion });
    
    return (
        <styled.Footer>
            <styled.Container>
                <styled.Wrapper>
                    <styled.Icon>
                        <Activity />
                    </styled.Icon>
                    <styled.Text>
                        Healthcheck
                    </styled.Text>
                </styled.Wrapper>
                <styled.Text style={{ opacity: 0.5 }}>
                    {apiData?.k_version} 
                </styled.Text>

                <styled.Wrapper>
                    <styled.Icon>
                        <Fav />
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