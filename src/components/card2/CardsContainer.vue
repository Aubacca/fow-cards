<template>
  <div>
    <div class="card-container">
      <div class="fow-card" v-for="(cardData, n) in allUnitCards" :key="n">
        <CardComponent :cardData="cardData" />
      </div>
    </div>
    {{ this.allUnitCards }}
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent";

export default {
  name: "CardsContainer",
  components: { CardComponent },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadUnitCards");
  },
  computed: {
    allUnitCards() {
      return this.$store.getters.allUnitCards;
    },
  },
};
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.fow-card {
  border: tan solid 2px;
  border-radius: 2mm;
  margin: auto;
  vertical-align: top;
}
.card-topic {
  background: olive;
  border-radius: 5px;
  color: white;
  padding: 2px 5px;
}
.card-topic h5 {
  font-size: 8px;
  text-align: center;
}
.card-topic-data {
  background: white;
  color: black;
  font-size: 24px;
}
.card-topic-data-main {
  background: red;
  border: solid 2px white;
  border-radius: 6px;
  color: white;
  font-size: 20pxpx;
  font-weight: bold;
  padding: 0 5px;
}
</style>
