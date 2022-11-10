import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes/theme";
import { GlobalStyles } from "../../themes/global";

import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import TaskFilter from "../TaskFilter/TaskFilter";
import AddNewItem from "../AddNewItem/AddNewItem";
import SearchTask from "../SearchTask/SearchTask";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [buttons, setButtons] = useState([
    { name: "all", label: "All", active: true },
    { name: "active", label: "Active", active: false },
    { name: "done", label: "Done", active: false },
  ]);
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [search, setSearch] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [theme, setTheme] = useState("dark");

  const handleNewItemClick = () => {
    setIsHidden(true);
  };

  const handleNewItemAdd = (label) => {
    setIsHidden(false);
    addNewTask(label);
  };

  const addNewTask = (label) => {
    const newItem = createNewItem(label);
    const newState = [...tasks];
    setTasks([...newState, newItem]);
    localStorage.setItem("tasks", JSON.stringify([...newState, newItem]));
  };

  const createNewItem = (label, done = false) => {
    return {
      label,
      done,
    };
  };

  const handleLocalstorageLoad = () => {
    const temp = JSON.parse(localStorage.getItem("tasks"));
    const newState = temp.map((e) => {
      return createNewItem(e.label, e.done);
    });
    setTasks([...newState]);
  };

  const handleTaskClick = (e) => {
    const newState = [...tasks];

    newState.map((el) => {
      if (el.label === e.target.id) {
        return (el.done = !el.done);
      }
      return 0;
    });

    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleFilterClick = (e) => {
    const newState = [...buttons];

    newState.map((el) => {
      if (el.name === e.target.name) {
        setIsActive(el.name);
        return (el.active = true);
      } else return (el.active = false);
    });

    setButtons([...newState]);
  };

  const handleSearchChange = (e) => {
    const newState = [...buttons];
    const tempSearch =
      e.target.name === "search"
        ? e.target.value
        : search.slice(0, search.length - 1);

    newState.map((el) => {
      if (el.name === "all") {
        setIsActive(el.name);
        return (el.active = true);
      } else return (el.active = false);
    });
    setSearch(tempSearch);
    setButtons([...newState]);
  };

  const handleCancelPress = (e) => {
    switch (e.target.name) {
      case "search":
        if (e.code === "Escape") setSearch("");
        break;
      default:
        if (e.code === "Escape") setIsHidden(false);
        break;
    }
  };

  const handleDeleteClick = (e) => {
    const newState = [...tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );
    setTasks([...newState]);

    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleNewUser = () => {
    localStorage.getItem("tasks")
      ? handleLocalstorageLoad()
      : localStorage.setItem("tasks", JSON.stringify(tasks));
    setFirstLoad(false);
  };

  const handleToggleThemeClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (firstLoad) {
      handleNewUser();
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className={theme === "dark" ? styles.appDark : styles.appLight}>
        <Header
          amountFinishedTasks={tasks.filter((e) => e.done).length}
          amountOfAllTasks={tasks.length}
          onToggleThemeClick={handleToggleThemeClick}
          theme={theme}
        />
        <SearchTask
          onSearchChange={handleSearchChange}
          search={search}
          onCancelPress={handleCancelPress}
          theme={theme}
        />
        <TaskFilter
          onFilterClick={handleFilterClick}
          theme={theme}
          buttons={buttons}
        />
        <TodoList
          tasks={tasks}
          search={search}
          onTaskClick={handleTaskClick}
          filterStatus={isActive}
          onDeleteClick={handleDeleteClick}
          theme={theme}
        />
        <AddNewItem
          theme={theme}
          onNewItemClick={handleNewItemClick}
          onNewItemAdd={handleNewItemAdd}
          isHidden={isHidden}
          onCancelPress={handleCancelPress}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
