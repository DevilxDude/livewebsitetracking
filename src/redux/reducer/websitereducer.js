const initialValue = {
  websites: [],
};

const websitereducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD_WEBSITE":
      if (!state.websites.length) return { websites: [{ ...payload }] };
      if (state.websites.find((website) => website.url === payload.url))
        return state;
      let newWebsites = state.websites;
      newWebsites.push(payload);
      return {
        websites: newWebsites,
      };
    case "UPDATE_WEBSITE":
      return {
        websites: state.websites.map((website) =>
          website.url !== payload.url ? website : payload
        ),
      };
    default:
      return state;
  }
};

export default websitereducer;
