<template>
  <div v-show="this.itemList">
    <h2>{{this.pageTitle}}</h2>
    <p v-for="(item, index) in this.itemList" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "ArmourListComponent",
  props: { pageTitle: String, itemList: Array },
};
</script>

<style>
h2 {
  color: red;
}
</style>