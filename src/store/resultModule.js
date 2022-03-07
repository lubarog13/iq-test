import axios from "axios";

export default {
    state: {
        result_main: "<u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! ",
        result: null,
    },
    mutations: {
        setResult(state, payload) {
          state.result = payload;
        },
      },
      actions: {
        async fetchResult({ commit }) {
          return axios
            .get("https://swapi.dev/api/people/1/")
            .then((res) => {
              commit("setResult", res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        },
      },
      namespaced: true
};