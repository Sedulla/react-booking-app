import tw from 'twin.macro';
import { Featured } from '../../components/featured/Featured';
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties';
import { Header } from '../../components/header/Header';
import { PropertyList } from '../../components/propertyList/PropertyList';

interface Props {}

const HomeContainer = tw.div`
  flex flex-col mt-[51px] items-center gap-[31px]
`;

const HomeTitle = tw.h1`
`;

export const Home = (props: Props) => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Featured />
        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
        <HomeTitle>Homes guests like</HomeTitle>
        <FeaturedProperties />
      </HomeContainer>
    </>
  );
};
