import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../themes/global";
import MainPageHook from "../functions/MainPage";
import AppHook from "../functions/App";

const App = () => {
  const { theme } = MainPageHook();
  const { onScreenNow } = AppHook();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {onScreenNow}
    </ThemeProvider>
  );
};

export default App;
