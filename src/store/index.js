import { createStore } from "vuex";
import resultModule from "./resultModule";
import testModule from "./testModule";

export default createStore({
  state: {
    showNavigationTitle: false,
    title: "",
  },
  mutations: {
    setShowTitle(state, show) {
      state.showNavigationTitle = show;
    },
    setTitle(state, title) {
      state.title = title;
    },
  },
  modules: {
    test: testModule,
    results:resultModule
  }
});
