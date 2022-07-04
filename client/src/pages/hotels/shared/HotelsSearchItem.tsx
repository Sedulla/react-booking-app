import {
  ResultItemImage,
  SearchResultItem,
  ResultItemInfo,
  ResultItemTitle,
  ResultItemDistance,
  ResultItemTaxi,
  ResultItemSubtitle,
  ResultItemFeatures,
  ResultItemCancel,
  ResultItemDetails,
  ResultItemRating,
  ResultRatingText,
  ResultRatingNumber,
  ResultDetailsTexts,
  ResultItemPrice,
  ResultItemFee,
  ResultItemCheck,
} from '../hotels.tw';

interface Props {}

export const HotelsSearchItem = (props: Props) => {
  return (
    <>
      <SearchResultItem>
        <ResultItemImage src="https://i.ibb.co/XsdmR2c/3.png" alt="" />
        <ResultItemInfo>
          <ResultItemTitle>Hotel name here</ResultItemTitle>
          <ResultItemDistance>300m from center</ResultItemDistance>
          <ResultItemTaxi>Free airport taxi</ResultItemTaxi>
          <ResultItemSubtitle>Hotel subtitle here</ResultItemSubtitle>
          <ResultItemFeatures>
            • Feature 1 • Feature • Feature 3
          </ResultItemFeatures>
          <ResultItemCancel>
            Free cancellation up to 15 days before arrival
          </ResultItemCancel>
        </ResultItemInfo>
        <ResultItemDetails>
          <ResultItemRating>
            <ResultRatingText>Good</ResultRatingText>
            <ResultRatingNumber>7.0</ResultRatingNumber>
          </ResultItemRating>
          <ResultDetailsTexts>
            <ResultItemPrice>$111</ResultItemPrice>
            <ResultItemFee>Includes the fees</ResultItemFee>
            <ResultItemCheck>availability</ResultItemCheck>
          </ResultDetailsTexts>
        </ResultItemDetails>
      </SearchResultItem>
    </>
  );
};
