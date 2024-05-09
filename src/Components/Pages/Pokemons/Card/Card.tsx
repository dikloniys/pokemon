import React from "react";
import * as styled from "./Card.style";
import Pokeball from "../../../../svg/Ball.png";
import NotToCome from "../../../../img/NotToCome.png";
import { ReactComponent as СopyIcon } from "../../../../svg/copy.svg";

export const Card = ({ pokemon, copyToClipboard }) => {
  const attack = parseInt(pokemon.attack).toString();

  const imageSource = pokemon.photo ? pokemon.photo : NotToCome;

  return (
    <styled.Card>
      <styled.Wrapper>
        <styled.Img>
          <img src={imageSource} alt={pokemon.name} />
        </styled.Img>
        <styled.Title>{pokemon.name}</styled.Title>
        <styled.Wrap>
          <styled.Pokeball>
            <img src={Pokeball} alt="Pokeball" />
          </styled.Pokeball>
          <styled.Attack attack={attack}>
            Атака {attack}
          </styled.Attack>
        </styled.Wrap>
        <styled.IdWrapper onClick={() => copyToClipboard(pokemon.trainer_id)}>
          <styled.Id>{pokemon.trainer_id}</styled.Id>
          <styled.Copy>
            <СopyIcon />
          </styled.Copy>
        </styled.IdWrapper>
      </styled.Wrapper>
    </styled.Card>
  );
};