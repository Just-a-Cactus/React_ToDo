import styled from "styled-components";
import Input from "../UI/atoms/Input";
import Button from "../UI/atoms/Button";
import WelcomePageHook from "../functions/WelcomePage";

const WelcomePage = ({ onWelcomePageSubmit }) => {
  const { username, onInputChange, onInputKeyDown } = WelcomePageHook();

  return (
    <StyledWelcomePage>
      <Input
        type={"text"}
        placeholder={"Text your name, please"}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
      />
      <Button
        alignSelf={"flex-end"}
        type={"submit"}
        onClick={(e) => {
          e.preventDefault();
          onWelcomePageSubmit(username);
        }}
      >
        Next
      </Button>
    </StyledWelcomePage>
  );
};
export default WelcomePage;

const StyledWelcomePage = styled.form`
  background-color: ${({ theme }) => theme.appColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 400px;
  margin: 45vh auto;
  color: ${({ theme }) => theme.color};
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 13px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
