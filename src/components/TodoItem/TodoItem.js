import PropTypes from "prop-types";
import styled from "styled-components";

const TodoItem = ({ label, onTaskClick, isDone, onDeleteClick }) => {
  return (
    <TodoItemWrapper>
      <span className={isDone ? "done" : null}>
        <input
          type="checkbox"
          id={label}
          onChange={onTaskClick}
          checked={isDone}
        />
        <label htmlFor={label}>{label}</label>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 20 20"
        onClick={onDeleteClick}
        data-name={label}
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
      </svg>
    </TodoItemWrapper>
  );
};

TodoItem.propTypes = {
  label: PropTypes.string,
  onTaskClick: PropTypes.func,
  isDone: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

export default TodoItem;

const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid transparent;

  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    }
  }

  .done {
    color: ${({ theme }) => theme.inputTextColor};
    text-decoration: line-through;
  }

  svg {
    color: ${({ theme }) => theme.color};
    min-width: 20px;
  }

  @media (hover: hover) {
    svg:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.accentColor};
    }
  }

  & :first-child {
    flex-grow: 1;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
  }

  input[type="checkbox"] + label:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.inputTextColor};
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 4px;
    transition: all 0.12s, border-color 0.08s;
  }

  input[type="checkbox"]:checked + label:before {
    width: 5px;
    top: 0;
    left: 7px;
    border-radius: 0;
    border-color: ${({ theme }) => theme.color};
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
`;
