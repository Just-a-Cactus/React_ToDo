import { useState } from "react";

const WelcomePageHook = () => {
  const [username, setUsername] = useState(null);

  const onInputChange = (e) => {
    setUsername(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
  };

  const onInputKeyDown = (e) => {
    if (isFinite(+e.key)) e.preventDefault();
  };

  return { username, onInputChange, onInputKeyDown };
};

export default WelcomePageHook;

//
// const WelcomePageHook = () => {
//   return {  };
// };
//
// export default WelcomePageHook;
