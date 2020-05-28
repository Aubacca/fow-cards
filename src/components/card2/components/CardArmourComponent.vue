<template>
  <div v-if="this.itemArmour">
    <div>
      <span>Front</span>
      <span>{{ this.itemArmour.front }}</span>
    </div>
    <div>
      <span>Side & Rear</span>
      <span>{{ this.itemArmour.side }}</span>
    </div>
    <div>
      <span>Top</span>
      <span>{{ this.itemArmour.top }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArmourComponent",
  props: { itemArmour: Object },
};
</script>

<style scoped></style>
