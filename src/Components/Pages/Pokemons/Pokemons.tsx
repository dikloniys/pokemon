import React, { useState } from "react";
import * as styled from "./Pokemons.style";
import FetchData from "../../../Api/FetchData";
import { UrlPokemons } from "../../../Static/UrlData";
import { Card } from "./Card";
import { ReactComponent as Search } from "../../../svg/search.svg";
import { ReactComponent as Sliders } from "../../../svg/sliders-horizontal.svg";
import { Dropdown } from '../Dropdown'; 

export const Pokemons = () => {
  const apiData = FetchData({ url:  UrlPokemons  });
  console.log(apiData);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Скопировано в буфер обмена"))
      .catch((error) => console.error("Ошибка при копировании:", error));
  };

  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Сначала новые");
  const options = [
    "Сначала новые",
    "По убыванию атаки",
    "По возрастанию атаки",
    "По алфавиту"
  ];

  const [isSecondOptionsVisible, setSecondOptionsVisible] = useState(false);
  const [selectedSecondOption, setSelectedSecondOption] = useState("Атака");
  const secondOptions = [
    "Атака",
    "Проигравшие",
    "В покеболе"
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const toggleOptionsVisibility = () => {
    setOptionsVisible(!isOptionsVisible); 
  };

  const handleSecondOptionSelect = (option) => {
    setSelectedSecondOption(option);
  };

  const toggleSecondOptionsVisibility = () => {
    setSecondOptionsVisible(!isSecondOptionsVisible); 
  };

  return (
    <styled.Pokemons>
      <styled.Container>
        <styled.Wrapper>
          <styled.Wrap>
            <styled.Title>Покемоны</styled.Title>
            <Dropdown 
              toggleOptionsVisibility={toggleOptionsVisibility}
              options={options}
              selectedOption={selectedOption}
              handleOptionSelect={handleOptionSelect}
              isActive={isOptionsVisible} 
              DropdownType={"OptionSelect"}            
              />
          </styled.Wrap>
          <styled.WrapFilter>
            <styled.Serch>
                <styled.Svg>
                    <Search />
                </styled.Svg>
                <styled.Input>
                </styled.Input>
            </styled.Serch>
            <styled.FilterWrapper>
              <Dropdown 
                toggleOptionsVisibility={toggleSecondOptionsVisibility}
                options={secondOptions}
                selectedOption={selectedSecondOption}
                handleOptionSelect={handleSecondOptionSelect}
                isActive={isSecondOptionsVisible} 
                DropdownType={"SecondOptionSelect"}              
                />
            </styled.FilterWrapper>
          </styled.WrapFilter>
        </styled.Wrapper>
        <styled.Cards>
          {apiData && apiData.data.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} copyToClipboard={copyToClipboard} />
          ))}
        </styled.Cards>
        {apiData && apiData.next_page && (
          <styled.DownloadWrapper>
            <styled.Download>Загрузить ещё</styled.Download>
          </styled.DownloadWrapper>
        )}
      </styled.Container>
    </styled.Pokemons>
  );
};