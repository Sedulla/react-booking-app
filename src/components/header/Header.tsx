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

interface Props {}

export const Header: React.FC = (props: Props) => {
  return (
    <>
      <Wrapper>
        <HeaderContainer>
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

          <HeaderTitle>Some text here. and some</HeaderTitle>
          <HeaderDescription>
            some text here and some text here and some text here and some text
            here and some text here and some text here
          </HeaderDescription>
          <HeaderButton>Sign Up / Log In</HeaderButton>
        </HeaderContainer>
      </Wrapper>
    </>
  );
};
