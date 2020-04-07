import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        header: {
          nation: "US",
          name: "Army",
          title: "M7 Priest",
          subtitle: "Armored Artillery Battery",
        },
        image: "",
        motivation: {
          name: "Confident",
          w6: "4+",
        },
        skill: {
          name: "Veteran",
          w6: "3+",
        },
        isHitOn: {
          name: "Careful",
          w6: "4+",
        },
        armour: [
          {
            Front: "1",
          },
          {
            "Side & Rear": "0",
          },
          {
            Top: "0",
          },
        ],
        move: {
          tactical: "25cm",
          terainDash: "30cm",
          crossCountryDash: "45cm",
          roadDash: "50cm",
          cross: "3+",
        },
        weapons: [
          {
            weapon: "M7 Priest (105mm)",
            range: "180cm",
            rofHalted: "Artillery",
            rofMoving: "Artillery",
            antiTank: "3",
            firePower: "3+",
            note: "Forward Firing. Smoke Bombardment.",
          },
          {
            weapon: "or Direct Fire",
            range: "60cm",
            rofHalted: "1",
            rofMoving: "1",
            antiTank: "9",
            firePower: "2+",
            note: "Breakthrough Gun. Forward Firing. Slow Firing. Smoke.",
          },
          {
            weapon: "M7 Priest (.50 cal MG)",
            range: "40cm",
            rofHalted: "3",
            rofMoving: "3",
            antiTank: "4",
            firePower: "5+",
            note: "Self-defence AA.",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
