import { FaLocationArrow } from 'react-icons/fa';
import { Header } from '../../components/header/Header';
import { hotelPagePhotos } from '../../utils/data';
import {
  HotelPageContainer,
  HotelPageTitle,
  HotelPageWrapper,
  HotelAddressText,
  HotelPageDistance,
  HotelPagePrice,
  HotelPageImages,
  HotelPageAddress,
  HotelImageWrapper,
  HotelPageImage,
  HotelPageDetails,
  HotelDetailsTexts,
  HotelDetailsPrice,
  HotelPageDescription,
  HotelPriceTitle,
  HotelPriceText,
  HotelPriceValue,
  HotelReserveButton,
  HotelBookButton,
} from './singleHotelPage.tw';

interface Props {}

export const SingleHotelPage: React.FC = (props: Props) => {
  return (
    <>
      <Header />
      <HotelPageWrapper>
        <HotelPageContainer>
          <HotelBookButton>Reserve or book now.</HotelBookButton>
          <HotelPageTitle>Hotel name here</HotelPageTitle>

          <HotelPageAddress>
            <FaLocationArrow />
            <HotelAddressText>Hotel address here</HotelAddressText>
          </HotelPageAddress>

          <HotelPageDistance>300m from center</HotelPageDistance>

          <HotelPagePrice>
            Book a stay over $111 at this property and get a free airport taxi
          </HotelPagePrice>

          <HotelPageImages>
            {hotelPagePhotos.map((photo, index) => (
              <HotelImageWrapper key={index}>
                <HotelPageImage src={photo.src} alt="hotel" />
              </HotelImageWrapper>
            ))}
          </HotelPageImages>

          <HotelPageDetails>
            <HotelDetailsTexts>
              <HotelPageTitle>Stay in the Makkah City</HotelPageTitle>
              <HotelPageDescription>
                Some information about the hotel here. Some information about
                the hotel here. Some information about the hotel here. Some
                information about the hotel here. Some information about the
                hotel here. Some information about the hotel here. Some
                information about the hotel here. Some information about the
                hotel here. Some information about the hotel here. Some.
              </HotelPageDescription>
            </HotelDetailsTexts>
            <HotelDetailsPrice>
              <HotelPriceTitle>Price per day</HotelPriceTitle>
              <HotelPriceText>
                Located in the Makkah, this property has an an good location
                score of 7.
              </HotelPriceText>
              <HotelPriceValue>
                <b>$111</b>
              </HotelPriceValue>
              <HotelReserveButton>Reserve or Book Now.</HotelReserveButton>
            </HotelDetailsPrice>
          </HotelPageDetails>
        </HotelPageContainer>
      </HotelPageWrapper>
    </>
  );
};
