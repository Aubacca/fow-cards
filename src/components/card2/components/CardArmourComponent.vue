<template>
  <div v-if="this.itemArmour">
    <h5>Armour</h5>
    <div class="item-container">
      <div>
        <div class="item-header">Front</div>
        <div class="item-value">{{ this.itemArmour.front }}</div>
      </div>
      <div>
        <div class="item-header">Side & Rear</div>
        <div class="item-value">{{ this.itemArmour.side }}</div>
      </div>
      <div>
        <div class="item-header">Top</div>
        <div class="item-value">{{ this.itemArmour.top }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArmourComponent",
  props: { itemArmour: Object },
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
