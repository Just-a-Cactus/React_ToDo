import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Svg from "../atoms/Svg";
import TaskItemHook from "../../functions/TaskItem";

const TaskItem = ({
  labelText,
  onTaskClick,
  isDone,
  onDeleteClick,
  onEditClick,
  onSaveClick,
  isEdit,
}) => {
  const { handleCancelEdit, temp, setTemp } = TaskItemHook(
    labelText,
    onTaskClick,
    isDone,
    onDeleteClick,
    onEditClick,
    onSaveClick
  );

  const itemShow = (
    <>
      <span>
        <Input
          type="checkbox"
          id={labelText}
          onChange={onTaskClick}
          checked={isDone}
          display={"none"}
        />
        <Text
          fontSize={".9rem"}
          pLeft={"30px"}
          tag={"label"}
          checked={isDone}
          checkbox={true}
          htmlFor={labelText}
          color={"inherit"}
        >
          {labelText}
        </Text>
      </span>
      <Svg icon={"edit"} onClick={onEditClick} data-name={labelText} />
      <Svg icon={"trash"} onClick={onDeleteClick} data-name={labelText} />
    </>
  );

  const itemEdit = (
    <>
      <Input
        type="text"
        id={labelText}
        value={temp}
        fontSize={".9rem"}
        onChange={(e) => setTemp(e.target.value)}
        onKeyDown={handleCancelEdit}
      />
      <Svg
        icon={"done"}
        onClick={() =>
          onSaveClick(labelText, document.getElementById(labelText).value)
        }
      />
    </>
  );

  return (
    <li>
      <StyledTaskItem
        onSubmit={(e) => {
          e.preventDefault();
          onSaveClick(labelText, e.target[labelText].value);
        }}
      >
        {isEdit ? itemEdit : itemShow}
      </StyledTaskItem>
    </li>
  );
};

TaskItem.propTypes = {
  labelText: PropTypes.string,
  onTaskClick: PropTypes.func,
  isDone: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

export default TaskItem;

const StyledTaskItem = styled.form`
  display: flex;
  align-items: end;

  & :first-child {
    flex-grow: 1;
  }

  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
  border-bottom: 1px solid transparent;
`;
