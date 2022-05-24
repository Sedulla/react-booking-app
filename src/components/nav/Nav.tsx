import { Link } from 'react-router-dom';
import { Logo, TopNav, NavItems, NavButton, NavContainer } from './nav.tw';

interface Props {}

export const Nav: React.FC = (props: Props) => {
  return (
    <TopNav>
      <NavContainer>
        <Link className="link" to="/">
          <Logo>Booking</Logo>
        </Link>
        <NavItems>
          <NavButton>Sign Up</NavButton>
          <NavButton>Log In</NavButton>
        </NavItems>
      </NavContainer>
    </TopNav>
  );
};
