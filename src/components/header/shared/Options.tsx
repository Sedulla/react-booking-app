import {
  OptionsContainer,
  OptionCounterButton,
  OptionCounterNumber,
  OptionsCounterBox,
  SearchOptionItem,
  SearchOptionText,
} from '../header.tw';

interface Props {
  options: any;
  handleOptionCounter: any;
}

export const Options = ({ options, handleOptionCounter }: Props) => {
  return (
    <OptionsContainer>
      <SearchOptionItem>
        <SearchOptionText>Person</SearchOptionText>
        <OptionsCounterBox>
          <OptionCounterButton
            disabled={options && options.person === 1}
            onClick={() => handleOptionCounter('person', 'd')}
          >
            -
          </OptionCounterButton>
          <OptionCounterNumber>{options.person}</OptionCounterNumber>
          <OptionCounterButton
            onClick={() => handleOptionCounter('person', 'i')}
          >
            +
          </OptionCounterButton>
        </OptionsCounterBox>
      </SearchOptionItem>

      <SearchOptionItem>
        <SearchOptionText>Children</SearchOptionText>
        <OptionsCounterBox>
          <OptionCounterButton
            disabled={options && options.children === 0}
            onClick={() => handleOptionCounter('children', 'd')}
          >
            -
          </OptionCounterButton>
          <OptionCounterNumber>{options.children}</OptionCounterNumber>
          <OptionCounterButton
            onClick={() => handleOptionCounter('children', 'i')}
          >
            +
          </OptionCounterButton>
        </OptionsCounterBox>
      </SearchOptionItem>

      <SearchOptionItem>
        <SearchOptionText>Room</SearchOptionText>
        <OptionsCounterBox>
          <OptionCounterButton
            disabled={options && options.room === 1}
            onClick={() => handleOptionCounter('room', 'd')}
          >
            -
          </OptionCounterButton>
          <OptionCounterNumber>{options.room}</OptionCounterNumber>
          <OptionCounterButton onClick={() => handleOptionCounter('room', 'i')}>
            +
          </OptionCounterButton>
        </OptionsCounterBox>
      </SearchOptionItem>
    </OptionsContainer>
  );
};
