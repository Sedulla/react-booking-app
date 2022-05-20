import { Logo, TopNav, NavItems, NavButton, NavContainer } from './nav.tw';

interface Props {}

export const Nav: React.FC = (props: Props) => {
  return (
    <TopNav>
      <NavContainer>
        <Logo>Booking</Logo>
        <NavItems>
          <NavButton>Sign Up</NavButton>
          <NavButton>Log In</NavButton>
        </NavItems>
      </NavContainer>
    </TopNav>
  );
};
