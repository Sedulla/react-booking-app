import tw from 'twin.macro';
import { Featured } from '../../components/featured/Feature';
import { Header } from '../../components/header/Header';

interface Props {}

const HomeContainer = tw.div`
  flex flex-col mt-[51px] items-center gap-[31px]
`;

export const Home = (props: Props) => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Featured />
      </HomeContainer>
    </>
  );
};
