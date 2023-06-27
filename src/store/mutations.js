import Vue from "vue";

export default {
  SET_CHART_DATA: (state, { data }) => {
    Vue.set(state, "chartData", data);
  }
};
