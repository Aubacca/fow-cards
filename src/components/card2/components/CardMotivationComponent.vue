<template>
  <div class="item-container">
    <div>
      <div class="item-header">{{ this.itemMotivation.name }}</div>
      <div class="item-value">{{ this.itemMotivation.w6 }}</div>
    </div>
    <div
      class="skill"
      v-for="(skill, index) in this.itemMotivation.skill"
      :key="index"
    >
      <div>
        <div class="item-header">
          <div>{{ skill.name }}</div>
          <div>{{ skill.rule }}</div>
        </div>
        <div class="item-value">{{ skill.w6 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMotivationComponent",
  props: { itemMotivation: Object },
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
