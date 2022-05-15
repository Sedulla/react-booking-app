import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Home } from './pages/home/Home';
import { Hotels } from './pages/stays/Hotels';
import { SingleHotelPage } from './pages/stays/SingleHotelPage';

interface Props {}

export const App: React.FC = (props: Props) => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleHotelPage />} />
      </Routes>
    </>
  );
};
