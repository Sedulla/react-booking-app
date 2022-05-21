import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Home } from './pages/home/Home';
import { Hotels } from './pages/hotels/Hotels';
import { SingleHotelPage } from './pages/singleHotelPage/SingleHotelPage';

interface Props {}

export const App: React.FC = (props: Props) => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

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
