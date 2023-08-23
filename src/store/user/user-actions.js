const AddUsers = (data) => ({
  type: "ADD_USERS",
  payload: data,
});
const AddLoading = () => ({
  type: "ADD_LOADING",
});
const AddError = (err) => ({
  type: "ADD_ERROR",
  payload: err,
});

export const actionThunk = () => (dispatch, _, axios) => {
  dispatch(AddLoading());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      dispatch(AddUsers(resp));
    })
    .catch((err) => {
      dispatch(AddError(err));
    });
};

export const actionThunk2 = () => (dispatch, _, axios) => {
  dispatch(AddLoading());
  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      text: "hi",
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      dispatch(AddError(err));
    });
};
