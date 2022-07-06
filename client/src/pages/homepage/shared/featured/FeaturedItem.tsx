import {
  FeaturedItemContainer,
  FeaturedImage,
  FeaturedTitleBig,
  FeaturedTitles,
  FeaturedTitleSmall,
} from './featured.tw';

interface Props {
  listedPropertyCount: number;
  city: string;
  cityViewImage: string;
}

export const FeaturedItem = ({
  listedPropertyCount,
  city,
  cityViewImage,
}: Props) => {
  return (
    <>
      <FeaturedItemContainer>
        <FeaturedImage src={cityViewImage} />
        <FeaturedTitles>
          <FeaturedTitleBig>{city}</FeaturedTitleBig>
          <FeaturedTitleSmall>
            {listedPropertyCount} properties
          </FeaturedTitleSmall>
        </FeaturedTitles>
      </FeaturedItemContainer>
    </>
  );
};
