import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const moduleUnitCards = {
  state: {
    cards: [],
  },
  getters: {
    allUnitCards: state => {
      return state.cards;
    },
  },
  mutations: {
    initUnitCards(state, payload) {
      state.cards = payload.unitCards;
    },
  },
  actions: {
    async loadUnitCards(context) {
      const unitCards = await getUnitCards();
      context.commit("initUnitCards", { unitCards });
    },
  },
};

async function getUnitCards() {
  return axios
    .get("http://localhost:8000/cards")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

export default new Vuex.Store({
  state: {
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    unitCards: moduleUnitCards,
  },
});
