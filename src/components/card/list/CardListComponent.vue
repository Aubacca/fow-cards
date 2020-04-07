<template>
  <div>
    <v-container fluid class="grey lighten-5">
      <v-row no-gutters>
        <template v-for="(card, n) in cardList">
          <v-col :key="n">
            <v-card class="pa-2 ms-1 ma-1" outlined tile>
              <CardComponent :cardDetail="card" />
            </v-card>
          </v-col>
          <v-responsive v-if="(n%2) === 1" :key="`width-${n}`" width="100%"></v-responsive>
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
import axios from "axios";

import CardComponent from "./CardComponent";

export default {
  name: "cardList",
  components: { CardComponent },
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/cards")
      .then(response => {
        this.cardList = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>
