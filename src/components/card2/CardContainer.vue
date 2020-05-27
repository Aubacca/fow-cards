<template>
  <div>
    <h2>FoW Cards Second</h2>
    <div class="card-parent">
      <div class="fow-card">
        <div class="header-left">US</div>
        <div class="header-middle">Tank</div>
        <div class="header-right">Army</div>
        <div class="item-motivation">Motivation</div>
        <div class="item-skill">Skill</div>
        <div class="item-hit">Is Hit On</div>
        <div class="item-armour">Armour</div>
        <div class="item-save">Save</div>
        <div class="item-move">Moving</div>
        <div class="item-weapon">Weapon</div>
      </div>
      <div class="fow-card"></div>
      <div class="fow-card"></div>
      <div class="fow-card"></div>
      <div class="fow-card"></div>
      <div class="fow-card"></div>
      <div class="fow-card"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardContainer",
};
</script>

<style scoped>
h2 {
  color: dodgerblue;
}
.card-parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.fow-card {
  width: 12cm;
  height: 8cm;
  background-color: gold;
  border: tan solid 2px;
  border-radius: 2mm;

  display: grid;
  /* grid-template-columns: 1fr 3fr 1fr; */
  grid-gap: 10px;
  grid-template-areas:
    "header-left header-middle header-right"
    "item-motivation . item-hit"
    "item-skill . item-save"
    "item-move item-move item-move"
    "item-weapon item-weapon item-weapon";
}
</style>
