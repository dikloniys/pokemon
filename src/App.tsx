import React, { FC } from "react";
import GlobalStyle from "./style/theme";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import FetchData from "./Static/FetchData";

export const App: FC = () => (
    <div className="App">
        <GlobalStyle />
        <Header />
        <FetchData />
        <Footer />
    </div>
);
