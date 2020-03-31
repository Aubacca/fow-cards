<template>
  <div>
    <!-- <h1>Card List</h1> -->
    <!-- <h3>{{ this.cardList }}</h3> -->
    <div v-for="card of cardList" :key="card.id">
      <!-- <hr />
      card: {{ card }}
      <hr /> -->
      <CardComponent :cardDetail="card" />
    </div>
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
