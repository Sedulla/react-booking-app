import {
  FnCity,
  FnName,
  FnPrice,
  FpContainer,
  FpImage,
  FpItem,
  FpRating,
  FpRatingStar,
  FpRatingText,
} from './featuredProperties.tw';

interface Props {}

export const FeaturedProperties = (props: Props) => {
  return (
    <>
      <FpContainer>
        <FpItem>
          <FpImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FnName>Pullman ZamZam Makkah</FnName>
          <FnCity>Makkah, Saudi Arabia</FnCity>
          <FnPrice>$102</FnPrice>
          <FpRating>
            <FpRatingStar>7</FpRatingStar>
            <FpRatingText>Good</FpRatingText>
          </FpRating>
        </FpItem>

        <FpItem>
          <FpImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FnName>Pullman ZamZam Makkah</FnName>
          <FnCity>Makkah, Saudi Arabia</FnCity>
          <FnPrice>$102</FnPrice>
          <FpRating>
            <FpRatingStar>7</FpRatingStar>
            <FpRatingText>Good</FpRatingText>
          </FpRating>
        </FpItem>

        <FpItem>
          <FpImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FnName>Pullman ZamZam Makkah</FnName>
          <FnCity>Makkah, Saudi Arabia</FnCity>
          <FnPrice>$102</FnPrice>
          <FpRating>
            <FpRatingStar>7</FpRatingStar>
            <FpRatingText>Good</FpRatingText>
          </FpRating>
        </FpItem>
      </FpContainer>
    </>
  );
};
