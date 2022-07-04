import {
  PropertyListContainer,
  PropertyListImage,
  PropertyListItem,
  PropertyListTitleBig,
  PropertyListTitles,
  PropertyListTitleSmall,
} from './propertyList.tw';

interface Props {}

export const PropertyList = (props: Props) => {
  return (
    <PropertyListContainer>
      <PropertyListItem>
        <PropertyListImage src="https://i.ibb.co/XsdmR2c/3.png" />
        <PropertyListTitles>
          <PropertyListTitleBig>Hotels</PropertyListTitleBig>
          <PropertyListTitleSmall>hotels</PropertyListTitleSmall>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyListImage src="https://i.ibb.co/XsdmR2c/3.png" />
        <PropertyListTitles>
          <PropertyListTitleBig>Hotels</PropertyListTitleBig>
          <PropertyListTitleSmall>hotels</PropertyListTitleSmall>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyListImage src="https://i.ibb.co/XsdmR2c/3.png" />
        <PropertyListTitles>
          <PropertyListTitleBig>Hotels</PropertyListTitleBig>
          <PropertyListTitleSmall>hotels</PropertyListTitleSmall>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyListImage src="https://i.ibb.co/XsdmR2c/3.png" />
        <PropertyListTitles>
          <PropertyListTitleBig>Hotels</PropertyListTitleBig>
          <PropertyListTitleSmall>hotels</PropertyListTitleSmall>
        </PropertyListTitles>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyListImage src="https://i.ibb.co/XsdmR2c/3.png" />
        <PropertyListTitles>
          <PropertyListTitleBig>Hotels</PropertyListTitleBig>
          <PropertyListTitleSmall>hotels</PropertyListTitleSmall>
        </PropertyListTitles>
      </PropertyListItem>
    </PropertyListContainer>
  );
};
