import tw from 'twin.macro';

// COMPONENTS
import { Header } from '../../components/header/Header';
import { Featured } from './shared/featured/Featured';
import { PropertyList } from './shared/propertyList/PropertyList';
import { FeaturedProperties } from './shared/featuredProperties/FeaturedProperties';

interface Props {}

const HomePageContainer = tw.div`
  flex flex-col items-center mt-[51px] gap-[31px]
`;

const HomePageTitle = tw.h1`
`;

export const Homepage = (props: Props) => {
  return (
    <>
      <Header page="homepage" />
      <HomePageContainer>
        <Featured />
        <HomePageTitle>Browse by property type</HomePageTitle>
        <PropertyList />
        <HomePageTitle>Homes guests like</HomePageTitle>
        <FeaturedProperties />
      </HomePageContainer>
    </>
  );
};
