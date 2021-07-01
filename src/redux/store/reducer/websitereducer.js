const initialValue = {
  websites: [],
};

const websitereducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD_WEBSITE":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default websitereducer;
