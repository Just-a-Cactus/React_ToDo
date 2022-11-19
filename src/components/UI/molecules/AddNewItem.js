import PropTypes from "prop-types";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import AddNewItemHook from "../../functions/AddNewItem";

const AddNewItem = ({ onNewItemAdd }) => {
  const {
    newTask,
    handleNewItemChange,
    handleKeyPress,
    handleFormSubmit,
    handleLabelClick,
  } = AddNewItemHook(onNewItemAdd);

  return (
    <form onKeyDown={handleKeyPress} onSubmit={handleFormSubmit}>
      {newTask !== undefined ? (
        <Input
          type={"text"}
          fontSize={".9rem"}
          placeholder={"Add new item"}
          onChange={handleNewItemChange}
          value={newTask}
        />
      ) : (
        <Text
          tag={"label"}
          fontSize={".9rem"}
          display={"flex"}
          onClick={handleLabelClick}
        >
          + Add new item
        </Text>
      )}
    </form>
  );
};

AddNewItem.propTypes = {
  onNewItemAdd: PropTypes.func,
};

export default AddNewItem;
