<template>
  <div v-if="this.itemSaves">
    <h5>Save</h5>
    <div
      class="item-container"
      v-for="(itemSave, index) in this.itemSaves"
      :key="index"
    >
      <div class="item-header">{{ itemSave.name }}</div>
      <div class="item-value">{{ itemSave.w6 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSaveComponent",
  props: { itemSaves: Array },
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
