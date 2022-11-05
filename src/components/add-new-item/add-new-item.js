import { Component } from "react";

export default class AddNewItem extends Component {
  state = {
    newTask: "",
  };

  handleNewItemChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.code === "Escape") this.setState({ newTask: "" });
    this.props.onCancelPress(e);
  };

  render() {
    const { onNewItemClick, onNewItemAdd, isHidden } = this.props;

    let clazz = "";
    clazz += isHidden ? " hidden" : "";

    return (
      <form
        className="AddNewItem"
        onKeyDown={this.handleKeyPress}
        onSubmit={(e) => {
          e.preventDefault();
          onNewItemAdd(this.state.newTask);
          this.setState({
            newTask: "",
          });
        }}
      >
        <label className={clazz} onClick={onNewItemClick}>
          + Add new item
        </label>
        <input
          type="text"
          placeholder="Add new item"
          onChange={this.handleNewItemChange}
          value={this.state.newTask}
        />
      </form>
    );
  }
}
