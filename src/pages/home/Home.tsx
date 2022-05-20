import tw from 'twin.macro';

// COMPONENTS
import { Header } from '../../components/header/Header';
import { Featured } from '../../components/featured/Featured';
import { PropertyList } from '../../components/propertyList/PropertyList';
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { Footer } from '../../components/footer/Footer';

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
        <Newsletter />
        <Footer />
      </HomeContainer>
    </>
  );
};
