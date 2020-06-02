<template>
  <div>
    <h5>Is Hit On</h5>
    <div class="item-container">
      <div class="item-header">{{ this.itemHit.name }}</div>
      <div class="item-value">{{ this.itemHit.w6 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHitComponent",
  props: { itemHit: Object },
};
</script>

<style scoped>
.item-container {
  border: brown solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-value {
  text-align: right;
}
</style>
