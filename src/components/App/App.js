import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../themes/theme";
import GlobalStyles from "../../themes/global";

import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import TaskFilter from "../TaskFilter/TaskFilter";
import AddNewItem from "../AddNewItem/AddNewItem";
import SearchTask from "../SearchTask/SearchTask";
import AskNameModal from "../AskNameModal/AskNameModal";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

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
  const [theme, setTheme] = useState(darkTheme);
  const [username, setUsername] = useState(null);
  const [isShowWelcomeMessage, toggleShowWelcomeMessage] = useState(true);

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

  const createNewItem = (label, done = false, isEdit = false) => {
    return {
      label,
      done,
      isEdit,
    };
  };

  const handleLocalStorageLoad = () => {
    const temp = JSON.parse(localStorage.getItem("tasks"));
    const newState = temp.map((e) => {
      return createNewItem(e.label, e.done);
    });
    setTasks([...newState]);
    setUsername(localStorage.getItem("username"));
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

  const handleEditClick = (e) => {
    const newState = tasks.map((el) => {
      if (el.label === e.currentTarget.getAttribute("data-name"))
        el.isEdit = true;
      return el;
    });

    setTasks([...newState]);
  };

  const handleSaveClick = (oldLabel, newLabel) => {
    const newState = tasks.map((el) => {
      if (el.label === oldLabel) {
        el.isEdit = false;
        el.label = newLabel;
      }

      return el;
    });

    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleDeleteClick = (e) => {
    const newState = [...tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );
    setTasks([...newState]);

    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleNewUser = () => {
    if (localStorage.getItem("username")) {
      handleLocalStorageLoad();
      setFirstLoad(false);
      setTimeout(() => {
        toggleShowWelcomeMessage(false);
      }, 10000);
    }
  };

  const handleToggleThemeClick = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    if (firstLoad) {
      handleNewUser();
    }
  }, []);

  const handleAskModalSubmit = (username) => {
    setUsername(username);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("username", username);
    setFirstLoad(false);
    setTimeout(() => {
      toggleShowWelcomeMessage(false);
    }, 10000);
  };

  const welcomeMessageToggle = isShowWelcomeMessage ? (
    <WelcomeMessage username={username} />
  ) : null;

  const onScreen = firstLoad ? (
    <AskNameModal onAskModalSubmit={handleAskModalSubmit} />
  ) : (
    <>
      {welcomeMessageToggle}
      <AppWrapper>
        <Header
          amountFinishedTasks={tasks.filter((e) => e.done).length}
          amountOfAllTasks={tasks.length}
          onToggleThemeClick={handleToggleThemeClick}
          isChecked={theme === lightTheme}
        />
        <SearchTask
          onSearchChange={handleSearchChange}
          search={search}
          onCancelPress={handleCancelPress}
        />
        <TaskFilter onFilterClick={handleFilterClick} buttons={buttons} />
        <TodoList
          tasks={tasks}
          search={search}
          onTaskClick={handleTaskClick}
          filterStatus={isActive}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
          onSaveClick={handleSaveClick}
        />
        <AddNewItem
          onNewItemClick={handleNewItemClick}
          onNewItemAdd={handleNewItemAdd}
          isHidden={isHidden}
          onCancelPress={handleCancelPress}
        />
      </AppWrapper>
    </>
  );

  return (
    <ThemeProvider theme={theme} test={theme}>
      <GlobalStyles />
      {onScreen}
    </ThemeProvider>
  );
};

export default App;

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.appColor};
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  margin: 20vh auto;
  color: ${({ theme }) => theme.color};
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 13px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
