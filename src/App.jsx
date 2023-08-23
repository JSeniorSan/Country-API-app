import CountOfUsers from "./components/CountOfUsers";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionThunk } from "./store/user/user-actions";
import { actionThunk2 } from "./store/user/user-actions";
import styles from "./main.module.scss";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionThunk());
    dispatch(actionThunk2());
  }, []);
  return (
    <div className={styles.bodyEl}>
      <Header />
      <CountOfUsers />
      <Grid />
    </div>
  );
}

export default App;
