<template>
  <div>
    <div>
      <span>{{ this.itemSkill.name }}</span>
      <span>{{ this.itemSkill.w6 }}</span>
      <div
        class="skill"
        v-for="(skill, index) in this.itemSkill.skill"
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
  </div>
</template>

<script>
export default {
  name: "CardSkillComponent",
  props: { itemSkill: Object },
};
</script>

<style scoped></style>
