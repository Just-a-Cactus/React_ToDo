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
      this.createNewItem("Look at React", true),
      this.createNewItem("Start to learning...", true),
      this.createNewItem("Make first app", true),
      this.createNewItem("Find a job", false),
      this.createNewItem("Become a better everyday", false),
    ],
    buttons: [
      { name: "all", label: "All", active: true },
      { name: "active", label: "Active", active: false },
      { name: "done", label: "Done", active: false },
    ],
    isHidden: false,
    isActive: "",
    search: "",
    firstLoad: true,
    theme: "dark",
  };

  handleNewItemClick = () => {
    this.setState({
      isHidden: true,
    });
  };

  handleNewItemAdd = (label) => {
    this.setState({
      isHidden: false,
    });
    this.addNewTask(label);
  };

  addNewTask(label) {
    const newItem = this.createNewItem(label);
    const newState = [...this.state.tasks];

    this.setState({
      tasks: [...newState, newItem],
    });

    localStorage.setItem("tasks", JSON.stringify([...newState, newItem]));
  }

  createNewItem(label, done = false) {
    return {
      label,
      done,
    };
  }

  handleLocalstorageLoad() {
    const temp = JSON.parse(localStorage.getItem("tasks"));
    const newState = temp.map((e) => {
      return this.createNewItem(e.label, e.done);
    });
    this.setState({ tasks: [...newState] });
  }

  handleTaskClick = (e) => {
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

  handleFilterClick = (e) => {
    const newState = [...this.state.buttons];

    newState.map((el) => {
      if (el.name === e.target.name) {
        this.setState({
          isActive: el.name,
        });
        return (el.active = true);
      } else return (el.active = false);
    });

    this.setState({ buttons: [...newState] });
  };

  handleSearchChange = (e) => {
    const newState = [...this.state.buttons];
    const search =
      e.target.name === "search"
        ? e.target.value
        : this.state.search.slice(0, this.state.search.length - 1);

    newState.map((el) => {
      if (el.name === "all") {
        this.setState({
          isActive: el.name,
        });
        return (el.active = true);
      } else return (el.active = false);
    });

    this.setState({ search, buttons: [...newState] });
  };

  handleCancelPress = (e) => {
    switch (e.target.name) {
      case "search":
        if (e.code === "Escape") this.setState({ search: "" });
        break;
      default:
        if (e.code === "Escape") this.setState({ isHidden: false });
        break;
    }
  };

  handleDeleteClick = (e) => {
    const newState = [...this.state.tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );

    this.setState({
      tasks: [...newState],
    });

    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  handleNewUser() {
    localStorage.getItem("tasks")
      ? this.handleLocalstorageLoad()
      : localStorage.setItem("tasks", JSON.stringify(this.state.tasks));

    this.setState({
      firstLoad: false,
    });
  }

  handleToggleThemeClick = () => {
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
      this.handleNewUser();
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
            onToggleThemeClick={this.handleToggleThemeClick}
            theme={this.state.theme}
          />
          <SearchTask
            onSearchChange={this.handleSearchChange}
            search={this.state.search}
            onCancelPress={this.handleCancelPress}
          />
          <TaskFilter
            onFilterClick={this.handleFilterClick}
            buttons={this.state.buttons}
          />
          <TodoList
            tasks={this.state.tasks}
            search={this.state.search}
            onTaskClick={this.handleTaskClick}
            isActive={this.state.isActive}
            onDeleteClick={this.handleDeleteClick}
          />
          <AddNewItem
            onNewItemClick={this.handleNewItemClick}
            onNewItemAdd={this.handleNewItemAdd}
            isHidden={this.state.isHidden}
            // isFocused={this.state.isFocused}
            onCancelPress={this.handleCancelPress}
          />
        </div>
      </ThemeProvider>
    );
  }
}
