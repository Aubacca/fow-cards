<template>
  <div>
    <v-container fluid class="grey lighten-5">
      <v-row no-gutters>
        <template v-for="(card, n) in allUnitCards">
          <v-col cols="6" :key="n">
            <v-card class="pa-2 ms-1 ma-1" outlined tile>
              <CardComponent :cardDetail="card" class="fow-card" elevation-5 />
            </v-card>
          </v-col>
          <v-responsive
            v-if="n % 2 === 1"
            :key="`width-${n}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
    </v-container>
    <!-- <h1>Card List</h1> -->
    <!-- <h3>{{ this.cardList }}</h3> -->
    <!-- <div v-for="card of cardList" :key="card.id">
      <CardComponent :cardDetail="card" />
    </div> -->
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent";

export default {
  name: "cardList",
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
.fow-card {
  border: brown solid 2px;
  border-radius: 10px;
  background-color: burlywood;
}
</style>
