import {
  MailButton,
  MailContainer,
  MailDesc,
  MailForm,
  MailInput,
  MailTitle,
} from './newsletter.tw';

interface Props {}

export const Newsletter = (props: Props) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <MailContainer>
        <MailTitle>Some text here, some here.</MailTitle>
        <MailDesc>Sign up and they'll send the deals to you.</MailDesc>
        <MailForm action="" onSubmit={handleFormSubmit}>
          <MailInput type="email" placeholder="Enter your email" />
          <MailButton type="submit">Subscribe</MailButton>
        </MailForm>
      </MailContainer>
    </>
  );
};
