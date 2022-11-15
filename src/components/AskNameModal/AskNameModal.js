import styled from "styled-components";
import { useState } from "react";

const AskNameModal = ({ onAskModalSubmit }) => {
  const [username, setUsername] = useState(null);

  const checkIsNumber = (input) => {
    return input.toLowerCase() !== input.toUpperCase();
  };

  const onInputChange = (e) => {
    if (e.target.value.length > 2)
      setUsername(
        e.target.value.charAt(0).toUpperCase() +
          e.target.value.slice(1).toLowerCase()
      );
  };

  return (
    <AskNameModalWrapper>
      <input
        type="text"
        placeholder="Input your name, please"
        onChange={onInputChange}
        onKeyPress={(e) => {
          if (!checkIsNumber(e.key)) {
            e.preventDefault();
          }
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onAskModalSubmit(username);
        }}
      >
        Next
      </button>
    </AskNameModalWrapper>
  );
};
export default AskNameModal;

const AskNameModalWrapper = styled.form`
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

  button {
    border-radius: 10px;
    padding: 5px 10px;
    border-color: transparent;
    background-color: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 20px;
    align-self: flex-end;

    :hover {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.inputColor};
    }
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.inputColor};
    color: inherit;
    border-radius: 10px;
    border-color: transparent;
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
    padding-right: 30px;
    padding-left: 30px;
  }

  input:focus {
    outline: none;
  }
`;
