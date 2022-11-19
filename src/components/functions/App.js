import WelcomePage from "../pages/WelcomePage";
import MainPageHook from "./MainPage";
import MainPage from "../pages/MainPage";

const AppHook = () => {
  const { firstLoad, handleAskModalSubmit } = MainPageHook();

  const onScreenNow = firstLoad ? (
    <WelcomePage onWelcomePageSubmit={handleAskModalSubmit} />
  ) : (
    <MainPage />
  );
  return { onScreenNow };
};

export default AppHook;
