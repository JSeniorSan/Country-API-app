import CountOfUsers from "./components/CountOfUsers";
import Header from "./components/Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionThunk } from "./store/user/user-actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionThunk());
  }, []);
  return (
    <>
      <Header />
      <CountOfUsers />
    </>
  );
}

export default App;
