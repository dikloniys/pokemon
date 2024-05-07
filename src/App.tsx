import React, { FC } from "react";
import GlobalStyle from "./style/theme";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import * as styled from "./App.style";

export const App: FC = () => (
    <div className="App">
        <GlobalStyle />
        <styled.Wrapper>
            <Header />
            <styled.Content />
            <Footer />
        </styled.Wrapper>
    </div>
);
