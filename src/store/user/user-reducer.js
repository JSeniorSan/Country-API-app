const infoData = {
  status: "idle",
  info: [],
  error: null,
};

export const userReducer = (state = infoData, action) => {
  switch (action.type) {
    case "ADD_USERS": {
      return {
        ...state,
        status: "fullfiled",
        info: action.payload.data,
      };
    }
    case "ADD_ERROR": {
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    }
    case "ADD_LOADING": {
      return {
        ...state,
        status: "loading",
      };
    }

    default: {
      return state;
    }
  }
};
