<template>
  <div class="move-container item-container card-topic">
    <div class="move-tactical">
      <div class="move-header"><h5>Tactical</h5></div>
      <div class="move-value">{{ this.itemMoving.tactical }}</div>
    </div>
    <div class="move-terrain">
      <div class="move-header"><h5>Terrain Dash</h5></div>
      <div class="move-value">{{ this.itemMoving.terainDash }}</div>
    </div>
    <div class="move-country">
      <div class="move-header"><h5>Cross Country Dash</h5></div>
      <div class="move-value">{{ this.itemMoving.crossCountryDash }}</div>
    </div>
    <div class="move-road">
      <div class="move-header"><h5>Road Dash</h5></div>
      <div class="move-value">{{ this.itemMoving.roadDash }}</div>
    </div>
    <div class="move-cross-check">
      <div class="move-header"><h5>Cross Check</h5></div>
      <div class="move-value">{{ this.itemMoving.cross }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovingComponent",
  props: { itemMoving: Object },
};
</script>

<style scoped>
.item-container {
  border: brown solid 1px;
}
.move-container {
  display: flex;
  justify-content: space-evenly;
}
.move-value {
  text-align: right;
  background: white;
  color: black;
}
</style>
