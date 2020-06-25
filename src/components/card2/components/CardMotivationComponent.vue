<template>
  <div class="card-topic">
    <h5>Motivation</h5>
    <div class="item-container card-topic-data">
      <div class="card-topic-data-main">
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
  </div>
</template>

<script>
export default {
  name: "CardMotivationComponent",
  props: { itemMotivation: Object },
};
</script>

<style scoped>
/* .item-container {
  border: brown solid 1px;
} */
.item-header {
  float: left;
  font-size: 16px;
  font-weight: bold;
}
.item-value {
  text-align: right;
  font-size: 16px;
  font-weight: bold;
}
</style>
