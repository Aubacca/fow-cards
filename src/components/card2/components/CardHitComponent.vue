<template>
  <div class="item-container">
    <div class="item-header">{{ this.itemHit.name }}</div>
    <div class="item-value">{{ this.itemHit.w6 }}</div>
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
}
.item-header {
  float: left;
}
.item-value {
  text-align: right;
}
</style>
