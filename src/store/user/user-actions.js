import axios from "axios";
const ax = axios;
const AddUsers = (data) => ({
  type: "ADD_USERS",
  payload: data,
});

export const actionThunk = () => (dispatch) => {
  ax.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
    dispatch(AddUsers(resp));
  });
};
