import React from 'react';
import * as styled from './Dropdown.style'; 
import { ReactComponent as Sliders } from "../../../svg/sliders-horizontal.svg";
import { ReactComponent as ArrowIcon } from "../../../svg/arrow.svg";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  handleOptionSelect: (option: string) => void;
  isActive: boolean;
  toggleOptionsVisibility: () => void; 
  DropdownType: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  handleOptionSelect,
  isActive,
  toggleOptionsVisibility, 
  DropdownType,
}) => {
  return (
    <styled.Dropdown isActive={isActive}>
      {DropdownType === "SecondOptionSelect" ? (
        <styled.Filter onClick={toggleOptionsVisibility}>
          <Sliders />
        </styled.Filter>
      ) : (
        <styled.OptionsButton onClick={toggleOptionsVisibility}>
          <styled.Text>{selectedOption}</styled.Text>
        <styled.Svg isActive={!!isActive}>
          <ArrowIcon />
        </styled.Svg>
        </styled.OptionsButton>
      )}
      {isActive && (
        <styled.OptionsContainer>
          <styled.Title>
            Сортировка
          </styled.Title>
          {options.map((option, index) => (
            <styled.Option key={`option-${index}`}  isActive = {selectedOption === option} >
              <styled.RadioButton
                type="radio"
                id={`option-${index}`}
                name="dropdown-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <styled.Label htmlFor={`option-${index}`}>
                {option}
              </styled.Label>
              <styled.OptionsDot isActive = {selectedOption === option} />
            </styled.Option>
          ))}
        </styled.OptionsContainer>
      )}
    </styled.Dropdown>
  );
};