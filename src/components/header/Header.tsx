import { FaHome, FaCarAlt, FaPlane, FaCalendarDay } from 'react-icons/fa';
import {
  HeaderContainer,
  HeaderList,
  Wrapper,
  HeaderListItem,
  ListItemText,
  HeaderTitle,
  HeaderDescription,
  HeaderButton,
  HeaderSearchItem,
  HeaderSearchInput,
  HeaderSearchText,
  Options,
  OptionCounterButton,
  OptionCounterNumber,
  OptionsCounterBox,
  HeaderSearchBox,
  SearchOptionItem,
  SearchOptionText,
} from './header.tw';
import { useState } from 'react';

// Date Range Picker
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface Props {}

export const Header = (props: Props) => {
  const [date, setDate] = useState([
    {
      startDate: new Date() as Date,
      endDate: new Date() as Date,
      key: 'selection',
    },
  ]);
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState({
    adult: 3 as number,
    children: 5 as number,
    room: 3 as number,
  });

  const handleOptionCounter = (type: keyof typeof options, operation: any) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operation === 'i' ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <HeaderList>
            <HeaderListItem>
              <FaHome />
              <ListItemText>Stays</ListItemText>
            </HeaderListItem>
            <HeaderListItem>
              <FaPlane />
              <ListItemText>Flights</ListItemText>
            </HeaderListItem>
            <HeaderListItem>
              <FaCarAlt />
              <ListItemText>Car rentals</ListItemText>
            </HeaderListItem>
          </HeaderList>

          <HeaderTitle>Some text here. and some</HeaderTitle>
          <HeaderDescription>
            some text here and some text here and some text here and some text
            here and some text here and some text here
          </HeaderDescription>
          <HeaderButton>Sign Up / Log In</HeaderButton>

          {/* Header Search Box */}
          <HeaderSearchBox>
            <HeaderSearchItem>
              <FaHome className="text-[#9CA3AF]" />
              <HeaderSearchInput
                type="text"
                placeholder="Where are you going?"
              />
            </HeaderSearchItem>
            <HeaderSearchItem>
              <FaCalendarDay className="text-[#9CA3AF]" />
              <HeaderSearchText onClick={() => setShow(!show)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )}`}</HeaderSearchText>
              {show && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item: any) => setDate([item.selection] as any)}
                  moveRangeOnFirstSelection={false}
                  ranges={date} // [{ startDate, endDate }]
                  className="absolute top-[51px]"
                />
              )}
            </HeaderSearchItem>
            <HeaderSearchItem>
              <FaHome className="text-[#9CA3AF]" />
              <HeaderSearchText
                onClick={() => setShow(!show)}
              >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</HeaderSearchText>

              {show && (
                <Options>
                  <SearchOptionItem>
                    <SearchOptionText>Adult</SearchOptionText>
                    <OptionsCounterBox>
                      <OptionCounterButton
                        disabled={options && options.adult === 1}
                        onClick={() => handleOptionCounter('adult', 'd')}
                      >
                        -
                      </OptionCounterButton>
                      <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                      <OptionCounterButton
                        onClick={() => handleOptionCounter('adult', 'i')}
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
                      <OptionCounterNumber>
                        {options.children}
                      </OptionCounterNumber>
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
                      <OptionCounterButton
                        onClick={() => handleOptionCounter('room', 'i')}
                      >
                        +
                      </OptionCounterButton>
                    </OptionsCounterBox>
                  </SearchOptionItem>
                </Options>
              )}
            </HeaderSearchItem>
            <HeaderSearchItem>
              <HeaderButton>Search</HeaderButton>
            </HeaderSearchItem>
          </HeaderSearchBox>
        </HeaderContainer>
      </Wrapper>
    </>
  );
};
