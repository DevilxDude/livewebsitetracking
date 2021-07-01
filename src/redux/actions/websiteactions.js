import checkWebsite from "../../library/checkWebsite";

const setWebsiteAction = (website) => ({
  type: "ADD_WEBSITE",
  payload: website,
});

const updateWebsiteAction = (website) => ({
  type: "UPDATE_WEBSITE",
  payload: website,
});

const checkWebsiteAction = (website) => async (dispatch) => {
  const websiteData = await checkWebsite(website.url);
  const newWebsite = {
    ...website,
    title: websiteData ? websiteData : "Website Not Found",
    isLoading: false,
    isLive: !!websiteData,
    lastChecked: new Date().toJSON(),
  };
  dispatch(updateWebsiteAction(newWebsite));
};

export const recheckWebsiteAction = (website) => async (dispatch) => {
  const reloadWebsite = {
    ...website,
    isLoading: true,
    lastChecked: new Date().toJSON(),
  };
  dispatch(updateWebsiteAction(reloadWebsite));
  dispatch(checkWebsiteAction(website));
};

export const addWebsiteAction = (url) => async (dispatch) => {
  const website = {
    title: "Loading",
    url,
    isLive: false,
    isLoading: true,
    lastChecked: new Date().toJSON(),
  };
  dispatch(setWebsiteAction(website));
  dispatch(checkWebsiteAction(website));
};
