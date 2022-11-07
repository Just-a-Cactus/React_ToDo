import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes/theme";
import { GlobalStyles } from "../../themes/global";

import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import TaskFilter from "../task-filter/task-filter";
import AddNewItem from "../add-new-item/add-new-item";
import SearchTask from "../search-task/search-task";

const App = () => {
  const [tasks, setTasks] = useState([
    { label: "Look at React", done: true },
    { label: "Start to learning...", done: true },
    { label: "Make first app", done: true },
    { label: "Find a job", done: false },
    { label: "Become a better everyday", done: false },
  ]);
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

  const prepareToAddNewItem = () => {
    setIsHidden(true);
  };

  const addNewItem = (label) => {
    setIsHidden(false);
    addNewTask(label);
  };

  const addNewTask = (label) => {
    const newItem = createItem(label);
    const newState = [...tasks];

    setTasks([...newState, newItem]);

    localStorage.setItem("tasks", JSON.stringify([...newState, newItem]));
  };

  const createItem = (label, done = false) => {
    return {
      label,
      done,
    };
  };

  const loadItems = () => {
    const temp = JSON.parse(localStorage.getItem("tasks"));
    const newState = temp.map((e) => {
      return createItem(e.label, e.done);
    });
    setTasks([...newState]);
  };

  const makeDone = (e) => {
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

  const onFilterClick = (e) => {
    const newState = [...buttons];

    newState.map((el) => {
      if (el.name === e.target.name) {
        setIsActive(el.name);
        return (el.active = true);
      } else return (el.active = false);
    });

    setButtons([...newState]);
  };

  const onSearch = (e) => {
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

  const onCancelPress = (e) => {
    switch (e.target.name) {
      case "search":
        if (e.code === "Escape") setSearch("");
        break;
      default:
        if (e.code === "Escape") setIsHidden(false);
        break;
    }
  };

  const onDelete = (e) => {
    const newState = [...tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );
    setTasks([...newState]);

    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const setupNewUser = () => {
    localStorage.getItem("tasks")
      ? loadItems()
      : localStorage.setItem("tasks", JSON.stringify(tasks));
    setFirstLoad(false);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (firstLoad) {
      setupNewUser();
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Header
          need={tasks.filter((e) => e.done).length}
          all={tasks.length}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <SearchTask
          onSearch={onSearch}
          search={search}
          onCancelPress={onCancelPress}
        />
        <TaskFilter onFilterClick={onFilterClick} buttons={buttons} />
        <TodoList
          tasks={tasks}
          search={search}
          makeDone={makeDone}
          isActive={isActive}
          onDelete={onDelete}
        />
        <AddNewItem
          prepareToAddNewItem={prepareToAddNewItem}
          addNewItem={addNewItem}
          isHidden={isHidden}
          onCancelPress={onCancelPress}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
