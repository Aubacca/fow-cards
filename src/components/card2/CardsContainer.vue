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

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.fow-card {
  background-color: gold;
  border: tan solid 2px;
  border-radius: 2mm;
  margin: auto;
  vertical-align: top;
}
</style>
