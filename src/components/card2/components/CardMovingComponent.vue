<template>
  <div class="parent-move">
    <div class="move-tactical">
      <div class="move-header">Tactical</div>
      <div class="move-value">{{ this.itemMoving.tactical }}</div>
    </div>
    <div class="move-terrain">
      <div class="move-header">Terrain Dash</div>
      <div class="move-value">{{ this.itemMoving.terainDash }}</div>
    </div>
    <div class="move-country">
      <div class="move-header">Cross Country Dash</div>
      <div class="move-value">{{ this.itemMoving.crossCountryDash }}</div>
    </div>
    <div class="move-road">
      <div class="move-header">Road Dash</div>
      <div class="move-value">{{ this.itemMoving.roadDash }}</div>
    </div>
    <div class="move-cross-check">
      <div class="move-header">Cross Check</div>
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
.parent-move {
  display: flex;
  justify-content: space-between;
}
.move-value {
  text-align: right;
}
</style>
