import { Component } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes/theme";
import { GlobalStyles } from "../../themes/global";

import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TaskFilter from "../task-filter/task-filter";
import AddNewItem from "../add-new-item/add-new-item";
import SearchTask from "../search-task/search-task";

export default class App extends Component {
  state = {
    tasks: [
      this.createItem("Look at React", true),
      this.createItem("Start to learning...", true),
      this.createItem("Make first app", true),
      this.createItem("Find a job", false),
      this.createItem("Become a better everyday", false),
    ],
    buttons: [
      { name: "all", label: "All", active: true },
      { name: "active", label: "Active", active: false },
      { name: "done", label: "Done", active: false },
    ],
    isHidden: false,
    filterStatus: "",
    search: "",
    firstLoad: true,
    theme: "dark",
  };

  prepareToAddNewItem = () => {
    this.setState({
      isHidden: true,
    });
  };

  addNewItem = (label) => {
    this.setState({
      isHidden: false,
    });
    this.addNewTask(label);
  };

  addNewTask(label) {
    const newItem = this.createItem(label);
    const newState = [...this.state.tasks];

    this.setState({
      tasks: [...newState, newItem],
    });

    localStorage.setItem("tasks", JSON.stringify([...newState, newItem]));
  }

  createItem(label, done = false) {
    return {
      label,
      done,
    };
  }

  loadItems() {
    const temp = JSON.parse(localStorage.getItem("tasks"));
    const newState = temp.map((e) => {
      return this.createItem(e.label, e.done);
    });
    this.setState({ tasks: [...newState] });
  }

  makeDone = (e) => {
    const newState = [...this.state.tasks];

    newState.map((el) => {
      if (el.label === e.target.id) {
        return (el.done = !el.done);
      }
      return 0;
    });

    this.setState({ tasks: [...newState] });
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  onFilterClick = (e) => {
    const newState = [...this.state.buttons];

    newState.map((el) => {
      if (el.name === e.target.name) {
        this.setState({
          filterStatus: el.name,
        });
        return (el.active = true);
      } else return (el.active = false);
    });

    this.setState({ buttons: [...newState] });
  };

  onSearch = (e) => {
    const newState = [...this.state.buttons];
    const search =
      e.target.name === "search"
        ? e.target.value
        : this.state.search.slice(0, this.state.search.length - 1);

    newState.map((el) => {
      if (el.name === "all") {
        this.setState({
          filterStatus: el.name,
        });
        return (el.active = true);
      } else return (el.active = false);
    });

    this.setState({ search, buttons: [...newState] });
  };

  onCancelPress = (e) => {
    switch (e.target.name) {
      case "search":
        if (e.code === "Escape") this.setState({ search: "" });
        break;
      default:
        if (e.code === "Escape") this.setState({ isHidden: false });
        break;
    }
  };

  onDelete = (e) => {
    const newState = [...this.state.tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );

    this.setState({
      tasks: [...newState],
    });

    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  setupNewUser() {
    localStorage.getItem("tasks")
      ? this.loadItems()
      : localStorage.setItem("tasks", JSON.stringify(this.state.tasks));

    this.setState({
      firstLoad: false,
    });
  }

  toggleTheme = () => {
    if (this.state.theme === "light") {
      this.setState({
        theme: "dark",
      });
    } else {
      this.setState({
        theme: "light",
      });
    }
  };

  componentDidMount() {
    if (this.state.firstLoad) {
      this.setupNewUser();
    }
  }

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <div className="app">
          <Header
            need={this.state.tasks.filter((e) => e.done).length}
            all={this.state.tasks.length}
            toggleTheme={this.toggleTheme}
            theme={this.state.theme}
          />
          <SearchTask
            onSearch={this.onSearch}
            search={this.state.search}
            onCancelPress={this.onCancelPress}
          />
          <TaskFilter
            onFilterClick={this.onFilterClick}
            buttons={this.state.buttons}
          />
          <TodoList
            tasks={this.state.tasks}
            search={this.state.search}
            makeDone={this.makeDone}
            filterStatus={this.state.filterStatus}
            onDelete={this.onDelete}
          />
          <AddNewItem
            prepareToAddNewItem={this.prepareToAddNewItem}
            addNewItem={this.addNewItem}
            isHidden={this.state.isHidden}
            isFocused={this.state.isFocused}
            onCancelPress={this.onCancelPress}
          />
        </div>
      </ThemeProvider>
    );
  }
}
