<template>
  <div>
    <div>
      <span>{{ this.itemMotivation.name }}</span>
      <span>{{ this.itemMotivation.w6 }}</span>
    </div>
    <div
      class="skill"
      v-for="(skill, index) in this.itemMotivation.skill"
      :key="index"
    >
      <div>
        <span>
          <div>{{ skill.name }}</div>
          <div>{{ skill.rule }}</div>
        </span>
        <span>{{ skill.w6 }}</span>
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

<style scoped></style>
