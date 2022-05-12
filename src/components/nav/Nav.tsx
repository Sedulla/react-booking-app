import { Logo, TopNav, NavItems, NavButton, NavContainer } from './nav.tw';

export const Nav = () => {
  return (
    <>
      <TopNav>
        <NavContainer>
          <Logo>booking</Logo>
          <NavItems>
            <NavButton>Sign Up</NavButton>
            <NavButton>Log In</NavButton>
          </NavItems>
        </NavContainer>
      </TopNav>
    </>
  );
};
