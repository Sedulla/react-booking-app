import { FaHome, FaCarAlt, FaPlane } from 'react-icons/fa';
import {
  HeaderContainer,
  HeaderList,
  Wrapper,
  HeaderListItem,
  ListItemText,
  HeaderTitle,
  HeaderDescription,
  HeaderButton,
} from './header.tw';
import { HeaderSearchBox } from './shared/HeaderSearchBox';

interface Props {
  page?: React.ReactNode;
}

export const Header = ({ page }: Props) => {
  return (
    <>
      <Wrapper>
        <HeaderContainer
          className={
            page === 'homepage' ? 'mt-5 mb-[99px] mx-0' : 'mt-5 mb-0 mx-0'
          }
        >
          <HeaderList>
            <HeaderListItem>
              <FaHome />
              <ListItemText>Stays</ListItemText>
            </HeaderListItem>
            <HeaderListItem>
              <FaPlane />
              <ListItemText>Flights</ListItemText>
            </HeaderListItem>
            <HeaderListItem>
              <FaCarAlt />
              <ListItemText>Car rentals</ListItemText>
            </HeaderListItem>
          </HeaderList>

          {page === 'homepage' && (
            <>
              <HeaderTitle>Some text here and some here</HeaderTitle>
              <HeaderDescription>
                Some text here and some text here and some text here and some
                text here and some text here and some text here
              </HeaderDescription>
              <HeaderButton>Sign Up / Log In</HeaderButton>

              {/* Search Box Component */}
              <HeaderSearchBox />
            </>
          )}
        </HeaderContainer>
      </Wrapper>
    </>
  );
};
