import { useState } from 'react';
import { FaHome, FaCalendarDay } from 'react-icons/fa';
import {
  HeaderButton,
  HeaderSearchItem,
  HeaderSearchInput,
  HeaderSearchText,
  SearchBoxContainer,
} from '../header.tw';
// Date Range Picker
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Options } from './Options';
import { useNavigate } from 'react-router-dom';

interface Props {}

export const HeaderSearchBox = (props: Props) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date() as Date,
      endDate: new Date() as Date,
      key: 'selection',
    },
  ]);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [options, setOptions] = useState({
    person: 3 as number,
    children: 5 as number,
    room: 3 as number,
  });
  const navigate = useNavigate();

  const handleOptionCounter = (type: keyof typeof options, operation: any) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operation === 'i' ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  const handleSearchResult = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <SearchBoxContainer>
      <HeaderSearchItem>
        <FaHome className="text-[#9CA3AF]" />
        <HeaderSearchInput
          type="text"
          placeholder="Where are you going?"
          onChange={(e) => setDestination(e.target.value)}
        />
      </HeaderSearchItem>
      <HeaderSearchItem>
        <FaCalendarDay className="text-[#9CA3AF]" />
        <HeaderSearchText onClick={() => setShow(!show)}>{`${format(
          date[0].startDate,
          'MM/dd/yyyy'
        )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</HeaderSearchText>
        {show && (
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => setDate([item.selection] as any)}
            moveRangeOnFirstSelection={false}
            ranges={date} // [{ startDate, endDate }]
            className="absolute top-[51px] z-[3]"
            minDate={new Date()}
          />
        )}
      </HeaderSearchItem>
      <HeaderSearchItem>
        <FaHome className="text-[#9CA3AF]" />
        <HeaderSearchText
          onClick={() => setHide(!hide)}
        >{`${options.person} person • ${options.children} children • ${options.room} room`}</HeaderSearchText>

        {hide && (
          <Options
            options={options}
            handleOptionCounter={handleOptionCounter}
          />
        )}
      </HeaderSearchItem>
      <HeaderSearchItem>
        <HeaderButton onClick={handleSearchResult}>Search</HeaderButton>
      </HeaderSearchItem>
    </SearchBoxContainer>
  );
};
