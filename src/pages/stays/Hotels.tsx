import { Header } from '../../components/header/Header';
interface Props {
  page?: React.ReactNode;
}

export const Hotels = (props: Props) => {
  return (
    <>
      <Header page="hotels" />
    </>
  );
};
