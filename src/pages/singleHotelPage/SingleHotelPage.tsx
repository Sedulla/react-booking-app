import { useState } from 'react';
import {
  FaArrowCircleLeft as LeftArrowIcon,
  FaArrowCircleRight as RightArrowIcon,
  FaHotel as FaHotelIcon,
  FaWindowClose,
} from 'react-icons/fa';
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
  Slider,
  SliderImageWrapper,
  SliderSingleImage,
} from './singleHotelPage.tw';

interface Props {}

export const SingleHotelPage: React.FC = (props: Props) => {
  const [slideImgNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSlideImage = (index: number) => (event: React.MouseEvent) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMoveDir = (direction: string) => (event: React.MouseEvent) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideImgNumber === 0 ? 3 : slideImgNumber - 1;
    } else {
      newSlideNumber = slideImgNumber === 3 ? 0 : slideImgNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Header />
      <HotelPageWrapper>
        {open && (
          <Slider>
            <FaWindowClose
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-3xl text-gray-50 cursor-pointer"
            />
            <LeftArrowIcon
              className="m-5 text-5xl text-gray-50 cursor-pointer"
              onClick={() => handleMoveDir('left')}
            />

            <SliderImageWrapper>
              <SliderSingleImage src={hotelPagePhotos[slideImgNumber].src} />
            </SliderImageWrapper>

            <RightArrowIcon
              className="m-5 text-5xl text-gray-50 cursor-pointer"
              onClick={() => handleMoveDir('right')}
            />
          </Slider>
        )}

        <HotelPageContainer>
          <HotelBookButton>Reserve or book now.</HotelBookButton>
          <HotelPageTitle>Hotel name here</HotelPageTitle>

          <HotelPageAddress>
            <FaHotelIcon />
            <HotelAddressText>Hotel address here</HotelAddressText>
          </HotelPageAddress>

          <HotelPageDistance>300m from center</HotelPageDistance>

          <HotelPagePrice>
            Book a stay over $111 at this property and get a free airport taxi
          </HotelPagePrice>

          <HotelPageImages>
            {hotelPagePhotos.map((photo, index) => (
              <HotelImageWrapper key={index}>
                <HotelPageImage
                  onClick={handleSlideImage(index)}
                  src={photo.src}
                  alt="hotel"
                />
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
      <div className="bg-black text-3xl">abcde</div>
    </>
  );
};
