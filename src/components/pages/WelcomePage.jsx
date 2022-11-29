import styled from "styled-components";
import Input from "../UI/atoms/Input";
import Button from "../UI/atoms/Button";
import PropTypes from "prop-types";

const WelcomePage = ({
  username,
  setUsername,
  tasks,
  toggleShowWelcomeMessage,
  setFirstLoad,
}) => {
  const onWelcomePageSubmit = (username) => {
    setUsername(username);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("username", username);
    setFirstLoad(false);
    setTimeout(() => {
      toggleShowWelcomeMessage(false);
    }, 10000);
  };

  const onInputChange = (e) => {
    setUsername(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
  };

  const onInputKeyDown = (e) => {
    if (isFinite(+e.key)) e.preventDefault();
  };

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
          onWelcomePageSubmit(username);
          e.preventDefault();
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

WelcomePage.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  tasks: PropTypes.array,
  toggleShowWelcomeMessage: PropTypes.func,
  setFirstLoad: PropTypes.func,
};
