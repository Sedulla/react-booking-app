import {
  FeaturedContainer,
  FeaturedImage,
  FeaturedItem,
  FeaturedTitleBig,
  FeaturedTitles,
  FeaturedTitleSmall,
} from './featured.tw';

interface Props {}

export const Featured = (props: Props) => {
  return (
    <>
      <FeaturedContainer>
        <FeaturedItem>
          <FeaturedImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FeaturedTitles>
            <FeaturedTitleBig>Makkah</FeaturedTitleBig>
            <FeaturedTitleSmall>properties</FeaturedTitleSmall>
          </FeaturedTitles>
        </FeaturedItem>

        <FeaturedItem>
          <FeaturedImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FeaturedTitles>
            <FeaturedTitleBig>Madina</FeaturedTitleBig>
            <FeaturedTitleSmall>properties</FeaturedTitleSmall>
          </FeaturedTitles>
        </FeaturedItem>

        <FeaturedItem>
          <FeaturedImage src="https://i.ibb.co/XsdmR2c/3.png" />
          <FeaturedTitles>
            <FeaturedTitleBig>Quds</FeaturedTitleBig>
            <FeaturedTitleSmall>properties</FeaturedTitleSmall>
          </FeaturedTitles>
        </FeaturedItem>
      </FeaturedContainer>
    </>
  );
};
