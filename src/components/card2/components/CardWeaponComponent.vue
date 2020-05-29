<template>
  <div class="item-container">
    <div class="weapon-container">
      <div class="weapon-desc">Weapon</div>
      <div class="weapon-range">Range</div>
      <div class="weapon-rof-halted">ROF Halted</div>
      <div class="weapon-rof-moved">ROF Moved</div>
      <div class="weapon-rof-antitank">Anti-tank</div>
      <div class="weapon-rof-firepower">Fire-power</div>
      <div class="weapon-rof-note">Note</div>
    </div>
    <div
      class="weapon-container"
      v-for="(itemWeapon, index) in this.itemWeapons"
      :key="index"
    >
      <div class="weapon-desc">{{ itemWeapon.weapon }}</div>
      <div class="weapon-range">{{ itemWeapon.range }}</div>
      <div class="weapon-rof-halted">{{ itemWeapon.rofHalted }}</div>
      <div class="weapon-rof-moved">{{ itemWeapon.rofMoving }}</div>
      <div class="weapon-rof-antitank">{{ itemWeapon.antiTank }}</div>
      <div class="weapon-rof-firepower">{{ itemWeapon.firePower }}</div>
      <div class="weapon-rof-note">{{ itemWeapon.note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWeaponComponent",
  props: { itemWeapons: Array },
};
</script>

<style scoped>
.item-container {
  border: brown solid 1px;
}
.weapon-container {
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr 2fr;
  grid-template-areas: "weapon-desc weapon-range weapon-rof-halted weapon-rof-moved weapon-rof-antitank weapon-rof-firepower weapon-rof-note";
}
.weapon-desc {
  grid-area: weapon-desc;
}
.weapon-range {
  grid-area: weapon-range;
}
.weapon-rof-halted {
  grid-area: weapon-rof-halted;
}
.weapon-rof-moved {
  grid-area: weapon-rof-moved;
}
.weapon-rof-antitank {
  grid-area: weapon-rof-antitank;
}
.weapon-rof-firepower {
  grid-area: weapon-rof-firepower;
}
.weapon-rof-note {
  grid-area: weapon-rof-note;
}
</style>
