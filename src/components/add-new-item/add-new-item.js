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

    let className = "";
    className += isHidden ? " hidden" : "";

    return (
      <form
        className="add-new-item"
        onKeyDown={this.onCancelPress}
        onSubmit={(e) => {
          e.preventDefault();
          addNewItem(this.state.newTask);
          this.setState({
            newTask: "",
          });
        }}
      >
        <label className={className} onClick={prepareToAddNewItem}>
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
