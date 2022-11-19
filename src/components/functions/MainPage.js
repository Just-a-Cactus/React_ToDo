import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../../themes/theme";
import Notification from "../UI/atoms/Notification";

const MainPageHook = () => {
  const [tasks, setTasks] = useState([]);
  const [buttons, setButtons] = useState([
    { name: "all", label: "All", active: true },
    { name: "active", label: "Active", active: false },
    { name: "done", label: "Done", active: false },
  ]);
  const [isActive, setIsActive] = useState("");
  const [searchValue, setSearch] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [theme, setTheme] = useState(darkTheme);
  const [username, setUsername] = useState(null);
  const [isShowWelcomeMessage, toggleShowWelcomeMessage] = useState(true);

  const handleNewItemAdd = (label) => {
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
        : searchValue.slice(0, searchValue.length - 1);

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
  });

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
    <Notification>You are welcome, {username}!</Notification>
  ) : null;

  return {
    tasks,
    theme, //?
    handleSearchChange,
    handleToggleThemeClick,
    handleCancelPress,
    buttons,
    handleFilterClick,
    searchValue,
    handleTaskClick,
    isActive,
    handleDeleteClick,
    handleEditClick,
    handleSaveClick,
    handleNewItemAdd,
    firstLoad,
    handleAskModalSubmit,
    welcomeMessageToggle,
  };
};

export default MainPageHook;
