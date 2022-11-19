import styled from "styled-components";
import { lightTheme } from "../../themes/theme";

import AddNewItem from "../UI/molecules/AddNewItem";
import Filter from "../UI/molecules/Filter";
import Search from "../UI/molecules/Search";
import TaskList from "../UI/molecules/TaskList";
import MainPageHook from "../functions/MainPage";
import Header from "../UI/organisms/Header";

const MainPage = () => {
  const {
    tasks,
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
    theme,
    welcomeMessageToggle,
  } = MainPageHook();

  return (
    <>
      {welcomeMessageToggle}
      <StyledMainPage>
        <Header
          amountFinishedTasks={tasks.filter((e) => e.done).length}
          amountOfAllTasks={tasks.length}
          onToggleThemeClick={handleToggleThemeClick}
          isChecked={theme === lightTheme}
        />
        <Search
          onSearchChange={handleSearchChange}
          searchValue={searchValue}
          onCancelPress={handleCancelPress}
        />
        <Filter onButtonClick={handleFilterClick} buttons={buttons} />
        <TaskList
          tasks={tasks}
          searchValue={searchValue}
          onTaskClick={handleTaskClick}
          filterStatus={isActive}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
          onSaveClick={handleSaveClick}
        />
        <AddNewItem onNewItemAdd={handleNewItemAdd} />
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
