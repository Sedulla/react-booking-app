import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { Newsletter } from './components/newsletter/Newsletter';
import { Homepage } from './pages/homepage/Homepage';
import { Hotels } from './pages/hotels/Hotels';
import { SingleHotelPage } from './pages/singleHotelPage/SingleHotelPage';

interface Props {}

export const App: React.FC = (props: Props) => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleHotelPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
};
