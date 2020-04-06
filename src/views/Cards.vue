<template>
  <div class="fow-cards">
    <h1>Flames of War - Cards</h1>
    <CardListComponent />
  </div>
</template>

<script>
import CardListComponent from "../components/card/list/CardListComponent";

export default {
  name: "Cards",
  components: { CardListComponent },
};
</script>
