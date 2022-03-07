import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    showNavigationTitle: false,
    title: "",
    selectedValues: [],
    questions: [
      {
        id: 1,
        title: "Ваш пол:",
        options: [
          {
            id: 1,
            text: "Мужчина",
          },
          {
            id: 2,
            text: "Женщина",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 2,
        title: "Укажите ваш возраст:",
        options: [
          {
            id: 1,
            text: "До 18",
          },
          {
            id: 2,
            text: "От 18 до 28",
          },
          {
            id: 3,
            text: "От 29 до 35",
          },
          {
            id: 4,
            text: "От 36",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 3,
        title: "Выберите лишнее:",
        options: [
          {
            id: 1,
            text: "Дом",
          },
          {
            id: 2,
            text: "Шалаш",
          },
          {
            id: 3,
            text: "Бунгало",
          },
          {
            id: 4,
            text: "Скамейка",
          },
          {
            id: 5,
            text: "Хижина",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 4,
        title: "Продолжите числовой ряд:<br> 18  20  24  32",
        options: [
          {
            id: 1,
            text: "62",
          },
          {
            id: 2,
            text: "48",
          },
          {
            id: 3,
            text: "74",
          },
          {
            id: 4,
            text: "57",
          },
          {
            id: 5,
            text: "60",
          },
          {
            id: 6,
            text: "77",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 5,
        title: "Выберите цвет, который сейчас наиболее Вам приятен:",
        options: [
          {
            id: 1,
            text: "#A8A8A8",
          },
          {
            id: 2,
            text: "#0000A9",
          },
          {
            id: 3,
            text: "#00A701",
          },
          {
            id: 4,
            text: "#F60100",
          },
          {
            id: 5,
            text: "#FDFF19",
          },
          {
            id: 6,
            text: "#A95403",
          },
          {
            id: 7,
            text: "#000000",
          },
          {
            id: 8,
            text: "#850068",
          },
          {
            id: 9,
            text: "#46B2AC",
          },
        ],
        image: null,
        type: "grid",
      },
      {
        id: 6,
        title:
          "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
        options: [
          {
            id: 1,
            text: "#A8A8A8",
          },
          {
            id: 9,
            text: "#46B2AC",
          },
          {
            id: 6,
            text: "#A95403",
          },
          {
            id: 3,
            text: "#00A701",
          },
          {
            id: 7,
            text: "#000000",
          },
          {
            id: 4,
            text: "#F60100",
          },
          {
            id: 8,
            text: "#850068",
          },
          {
            id: 5,
            text: "#FDFF19",
          },
          {
            id: 2,
            text: "#0000A9",
          },
        ],
        image: null,
        type: "grid",
      },
      {
        id: 7,
        title: "Какой из городов лишний?",
        options: [
          {
            id: 1,
            text: "Вашингтон",
          },
          {
            id: 2,
            text: "Лондон",
          },
          {
            id: 3,
            text: "Париж",
          },
          {
            id: 4,
            text: "Нью-Йорк",
          },
          {
            id: 5,
            text: "Москва",
          },
          {
            id: 6,
            text: "Оттава",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 8,
        title: "Выберите правильную фигуру из четырёх пронумерованных.",
        options: [
          {
            id: 1,
            text: "1",
          },
          {
            id: 2,
            text: "2",
          },
          {
            id: 3,
            text: "3",
          },
          {
            id: 4,
            text: "4",
          },
        ],
        image: "imagefigure.png",
        type: "row",
      },
      {
        id: 9,
        title: "Вам привычнее и важнее:",
        options: [
          {
            id: 1,
            text: "Наслаждаться каждой минутой проведенного времени",
          },
          {
            id: 2,
            text: "Быть устремленными мыслями в будущее",
          },
          {
            id: 3,
            text: "Учитывать в ежедневной практике прошлый опыт",
          },
        ],
        image: null,
        type: "list",
      },
      {
        id: 10,
        title:
          "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
        options: [
          {
            id: 1,
            text: "оно остроконечное",
          },
          {
            id: 2,
            text: "оно устойчиво",
          },
          {
            id: 3,
            text: "оно-находится в состоянии равновесия",
          },
        ],
        image: "imagepyramid.png",
        type: "list",
      },
      {
        id: 11,
        title: "Вставьте подходящее число",
        options: [
          {
            id: 1,
            text: "34",
          },
          {
            id: 2,
            text: "36",
          },
          {
            id: 3,
            text: "53",
          },
          {
            id: 4,
            text: "44",
          },
          {
            id: 5,
            text: "66",
          },
          {
            id: 6,
            text: "42",
          },
        ],
        image: "imagestar.png",
        decoration: true,
        type: "row",
      },
    ],
    result_main: "<u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! ",
    result: null,
  },
  mutations: {
    setSelectedValue(state, value) {
      state.selectedValues.push(value);
    },
    setShowTitle(state, show) {
      state.showNavigationTitle = show;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setResult(state, payload) {
      state.result = payload;
    },
  },
  getters: {
    getQuestion:
      (state) =>
      ({ id }) => {
        const questions = state.questions.filter(
          (question) => question.id == id
        );
        return questions.length >= 0 ? questions[0] : null;
      },
    getQuestionLength(state) {
      return state.questions.length;
    },
    getProgress:
      (state, getters) =>
      ({ id }) => {
        const index =
          state.questions
            .map(function (x) {
              return x.id;
            })
            .indexOf(id) + 1;
        return (index / getters.getQuestionLength) * 100;
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
});
