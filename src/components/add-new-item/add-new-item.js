import { Component } from "react";

export default class AddNewItem extends Component {
  state = {
    newTask: "",
  };

  onChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  onCancelPress = (e) => {
    if (e.code === "Escape") this.setState({ newTask: "" });
    const { onCancelPress } = this.props;
    onCancelPress(e);
  };

  render() {
    const { prepareToAddNewItem, addNewItem, isHidden } = this.props;

    let clazz = "";
    clazz += isHidden ? " hidden" : "";

    return (
      <form
        className="AddNewItem"
        onKeyDown={this.onCancelPress}
        onSubmit={(e) => {
          e.preventDefault();
          addNewItem(this.state.newTask);
          this.setState({
            newTask: "",
          });
        }}
      >
        <label className={clazz} onClick={prepareToAddNewItem}>
          + Add new item
        </label>
        <input
          type="text"
          placeholder="Add new item"
          onChange={this.onChange}
          value={this.state.newTask}
        />
      </form>
    );
  }
}
