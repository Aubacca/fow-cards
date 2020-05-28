<template>
  <div class="parent-weapon">
    <div class="weapon-desc">Weapon</div>
    <div class="weapon-range">Range</div>
    <div class="weapon-rof-halted">ROF Halted</div>
    <div class="weapon-rof-moved">ROF Moved</div>
    <div class="weapon-rof-antitank">Antitank</div>
    <div class="weapon-rof-firepower">Firepower</div>
    <div class="weapon-rof-note">Note</div>
    <span v-for="(itemWeapon, index) in this.itemWeapons" :key="index">
      <div class="weapon-desc">{{ itemWeapon.weapon }}</div>
      <div class="weapon-range">{{ itemWeapon.range }}</div>
      <div>{{ itemWeapon.rofHalted }}</div>
      <div>{{ itemWeapon.rofMoving }}</div>
      <div>{{ itemWeapon.antiTank }}</div>
      <div>{{ itemWeapon.firePower }}</div>
      <div>{{ itemWeapon.note }}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: "CardWeaponComponent",
  props: { itemWeapons: Array },
};
</script>

<style scoped>
.parent-weapon {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 2fr;
}
</style>
