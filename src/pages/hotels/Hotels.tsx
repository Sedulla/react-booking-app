import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import {
  HotelsPageContainer,
  HotelsPageItem,
  HotelsPageOptions,
  HotelsPageResult,
  HotelsPageSearch,
  HotelsPageTitle,
  HotelsPageWrapper,
  OptionItemInput,
  OptionItemText,
  PageItemInput,
  PageItemText,
  PageItemTitle,
  PageOptionItem,
  SearchResultButton,
} from './hotels.tw';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { HotelsSearchItem } from './shared/HotelsSearchItem';

interface Props {
  page?: React.ReactNode;
}

export const Hotels = (props: Props) => {
  const location: any = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      <HotelsPageContainer>
        <HotelsPageWrapper>
          <HotelsPageSearch>
            <HotelsPageTitle>Search</HotelsPageTitle>
            <HotelsPageItem>
              <PageItemTitle>Destination</PageItemTitle>
              <PageItemInput placeholder={destination} />
            </HotelsPageItem>
            <HotelsPageItem>
              <PageItemTitle>The Check-in Date</PageItemTitle>
              <PageItemText onClick={() => setShow(!show)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </PageItemText>
              {show && (
                <DateRange
                  onChange={(item: any) => setDate([item.selection] as any)}
                  minDate={new Date()}
                  ranges={date} // [{ startDate, endDate }]
                />
              )}
            </HotelsPageItem>
            <HotelsPageItem>
              <PageItemTitle>Options</PageItemTitle>

              <HotelsPageOptions>
                <PageOptionItem>
                  <OptionItemText>
                    Min price <small className="">per a day</small>
                  </OptionItemText>
                  <OptionItemInput type="number" />
                </PageOptionItem>

                <PageOptionItem>
                  <OptionItemText>
                    Max price <small className="">per a day</small>
                  </OptionItemText>
                  <OptionItemInput type="number" />
                </PageOptionItem>

                <PageOptionItem>
                  <OptionItemText>Person</OptionItemText>
                  <OptionItemInput
                    min={1}
                    type="number"
                    placeholder={options.person}
                  />
                </PageOptionItem>

                <PageOptionItem>
                  <OptionItemText>Children</OptionItemText>
                  <OptionItemInput
                    min={0}
                    type="number"
                    placeholder={options.children}
                  />
                </PageOptionItem>
                <PageOptionItem>
                  <OptionItemText>Room</OptionItemText>
                  <OptionItemInput
                    min={1}
                    type="number"
                    placeholder={options.room}
                  />
                </PageOptionItem>
              </HotelsPageOptions>
            </HotelsPageItem>
            <SearchResultButton type="button">Search</SearchResultButton>
          </HotelsPageSearch>

          <HotelsPageResult>
            <HotelsSearchItem />
            <HotelsSearchItem />
            <HotelsSearchItem />
            <HotelsSearchItem />
            <HotelsSearchItem />
            <HotelsSearchItem />
            <HotelsSearchItem />
          </HotelsPageResult>
        </HotelsPageWrapper>
      </HotelsPageContainer>
    </>
  );
};
