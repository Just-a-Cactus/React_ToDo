import { useEffect, useState } from "react";
import styled from "styled-components";

import { lightTheme } from "../../themes/theme";

import AddNewItem from "../UI/molecules/AddNewItem";
import Filter from "../UI/molecules/Filter";
import Search from "../UI/molecules/Search";
import TaskList from "../UI/molecules/TaskList";
import Header from "../UI/organisms/Header";
import Notification from "../UI/atoms/Notification";
import PropTypes from "prop-types";

const MainPage = ({
  tasks,
  theme,
  setTasks,
  setTheme,
  username,
  setUsername,
  setFirstLoad,
  isShowWelcomeMessage,
  toggleShowWelcomeMessage,
}) => {
  const [isActive, setIsActive] = useState("");
  const [searchValue, setSearch] = useState("");
  const [buttons, setButtons] = useState([
    { name: "all", label: "All", active: true },
    { name: "active", label: "Active", active: false },
    { name: "done", label: "Done", active: false },
  ]);

  const handleNewUser = () => {
    if (localStorage.getItem("username")) {
      handleLocalStorageLoad();
      setFirstLoad(false);
      setTimeout(() => {
        toggleShowWelcomeMessage(false);
      }, 10000);
    } else setFirstLoad(true);
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

  useEffect(() => {
    handleNewUser();
  }, []);

  return (
    <>
      {isShowWelcomeMessage && (
        <Notification>You are welcome, {username}!</Notification>
      )}
      <StyledMainPage>
        <Header
          theme={theme}
          setTheme={setTheme}
          amountFinishedTasks={tasks.filter((e) => e.done).length}
          amountOfAllTasks={tasks.length}
          isChecked={theme === lightTheme}
        />
        <Search
          buttons={buttons}
          setSearch={setSearch}
          searchValue={searchValue}
          setIsActive={setIsActive}
          setButtons={setButtons}
        />
        <Filter
          buttons={buttons}
          setIsActive={setIsActive}
          setButtons={setButtons}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          searchValue={searchValue}
          filterStatus={isActive}
        />
        <AddNewItem
          createNewItem={createNewItem}
          tasks={tasks}
          setTasks={setTasks}
        />
      </StyledMainPage>
    </>
  );
};

export default MainPage;

export const StyledMainPage = styled.div`
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

MainPage.propTypes = {
  tasks: PropTypes.array,
  theme: PropTypes.object,
  setTasks: PropTypes.func,
  setTheme: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  isShowWelcomeMessage: PropTypes.bool,
  toggleShowWelcomeMessage: PropTypes.func,
};
