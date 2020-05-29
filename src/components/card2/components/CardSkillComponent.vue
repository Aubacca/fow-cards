<template>
  <div class="item-container">
    <div class="item-header">{{ this.itemSkill.name }}</div>
    <div class="item-value">{{ this.itemSkill.w6 }}</div>
    <div
      class="skill"
      v-for="(skill, index) in this.itemSkill.skill"
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
  name: "CardSkillComponent",
  props: { itemSkill: Object },
};
</script>

<style scoped>
.item-container {
  border: brown solid 1px;
}
.item-header {
  float: left;
  margin-top: 5px;
}
.item-value {
  text-align: right;
  margin-top: 5px;
}
</style>
