<template>
  <div>
    <span>{{ this.itemHit.name }}</span>
    <span>{{ this.itemHit.w6 }}</span>
  </div>
</template>

<script>
export default {
  name: "CardHitComponent",
  props: { itemHit: Object },
};
</script>

<style scoped></style>
