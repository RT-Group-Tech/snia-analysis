import service from "../util/service";

export default {
  FETCH_CHART_DATA: ({ commit, state }) =>
    state.homePageData
      ? true
      : service
          .get(`/parse-json`)
          .then(response =>
            commit("SET_CHART_DATA", {
              data: response.data
            })
          )
        };
