import styled from "styled-components";

const WelcomeMessage = ({ username }) => {
  return (
    <WelcomeMessageWrapper>You are welcome, {username}!</WelcomeMessageWrapper>
  );
};

export default WelcomeMessage;

const WelcomeMessageWrapper = styled.div`
  background-color: ${({ theme }) => theme.appColor};
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  font-size: 1rem;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  color: ${({ theme }) => theme.color};
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 13px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
