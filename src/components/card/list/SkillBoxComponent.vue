<template>
  <div>
    <h2>{{ this.pageTitle }}</h2>
    <span class="motivation">{{ this.skills.name }}</span>
    <span class="motivation w6">{{ this.skills.w6 }}</span>
    <div v-for="(item, index) in this.skills.skill" :key="index">
      <span>
        <div>{{ item.name }}</div>
        <div>{{ item.rule }}</div>
      </span>
      <span class="w6">{{ item.w6 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillBoxComponent",
  props: { pageTitle: String, skills: Object },
};
</script>

<style>
h2 {
  color: red;
}
.motivation {
  font-size: larger;
}
.w6 {
  font-weight: bold;
}
</style>
