import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TodoItem = ({
  label,
  onTaskClick,
  isDone,
  onDeleteClick,
  onEditClick,
  onSaveClick,
  isEdit,
}) => {
  const [temp, setTemp] = useState("");

  const showItem = (
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
      <EditIconWrapper
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 20 20"
        onClick={onEditClick}
        data-name={label}
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
      </EditIconWrapper>
      <TrashIconWrapper
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
      </TrashIconWrapper>
    </TodoItemWrapper>
  );

  const editItem = (
    <TodoItemEditWrapper>
      <EditForm
        onSubmit={(e) => {
          e.preventDefault();
          onSaveClick(label, e.target[0].value);
        }}
      >
        <input
          type="text"
          id={label}
          name={label}
          onChange={(e) => {
            setTemp(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Escape") {
              onSaveClick(label, label);
            }
          }}
          value={temp}
        />

        <TransparentButton type="submit" className="hidden">
          <EditIconWrapper
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </EditIconWrapper>
        </TransparentButton>
      </EditForm>
    </TodoItemEditWrapper>
  );

  useEffect(() => {
    if (temp === "") setTemp(label);
  }, []);

  return <>{isEdit ? editItem : showItem}</>;
};

TodoItem.propTypes = {
  label: PropTypes.string,
  onTaskClick: PropTypes.func,
  isDone: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

export default TodoItem;

const TrashIconWrapper = styled.svg`
  color: ${({ theme }) => theme.color};
  margin-left: 5px;

  @media (hover: hover) {
    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const EditIconWrapper = styled(TrashIconWrapper)`
  @media (hover: hover) {
    :hover {
      color: ${({ theme }) => theme.editColor};
    }
  }
`;

const EditForm = styled.form`
  display: flex;

  input {
    margin-right: 5px;
  }
`;

const TransparentButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;

  svg {
    height: 100%;
  }
`;

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

const TodoItemEditWrapper = styled(TodoItemWrapper)`
  border: none;

  input {
    background-color: ${({ theme }) => theme.inputColor};
    color: inherit;
    border-radius: 10px;
    border-color: transparent;
    text-align: center;
    margin-bottom: 5px;
    font-size: 18px;
  }

  input:focus {
    outline: none;
  }

  @media (hover: hover) {
    :hover {
      border: none;
    }
  }
`;
