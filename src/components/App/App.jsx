import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../themes/global";
import { darkTheme } from "../../themes/theme";

import WelcomePage from "../pages/WelcomePage";
import MainPage from "../pages/MainPage";

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [firstLoad, setFirstLoad] = useState();
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState(null);
  const [isShowWelcomeMessage, toggleShowWelcomeMessage] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {firstLoad ? (
        <WelcomePage
          tasks={tasks}
          setFirstLoad={setFirstLoad}
          toggleShowWelcomeMessage={toggleShowWelcomeMessage}
          username={username}
          setUsername={setUsername}
        />
      ) : (
        <MainPage
          tasks={tasks}
          theme={theme}
          setTasks={setTasks}
          setTheme={setTheme}
          username={username}
          setUsername={setUsername}
          setFirstLoad={setFirstLoad}
          isShowWelcomeMessage={isShowWelcomeMessage}
          toggleShowWelcomeMessage={toggleShowWelcomeMessage}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
