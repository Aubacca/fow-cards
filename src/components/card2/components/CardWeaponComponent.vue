<template>
  <div class="item-container card-topic">
    <div class="weapon-container">
      <div class="weapon-desc"><h5>Weapon</h5></div>
      <div class="weapon-range"><h5>Range</h5></div>
      <div class="weapon-rof-halted"><h5>ROF Halted</h5></div>
      <div class="weapon-rof-moved"><h5>ROF Moved</h5></div>
      <div class="weapon-rof-antitank"><h5>Anti-tank</h5></div>
      <div class="weapon-rof-firepower"><h5>Fire-power</h5></div>
      <div class="weapon-rof-note"><h5>Note</h5></div>
    </div>
    <div
      class="weapon-container"
      v-for="(itemWeapon, index) in this.itemWeapons"
      :key="index"
    >
      <div class="weapon-desc weapon-value">{{ itemWeapon.weapon }}</div>
      <div class="weapon-range weapon-value">{{ itemWeapon.range }}</div>
      <div class="weapon-rof-halted weapon-value">
        {{ itemWeapon.rofHalted }}
      </div>
      <div class="weapon-rof-moved weapon-value">
        {{ itemWeapon.rofMoving }}
      </div>
      <div class="weapon-rof-antitank weapon-value">
        {{ itemWeapon.antiTank }}
      </div>
      <div class="weapon-rof-firepower weapon-value">
        {{ itemWeapon.firePower }}
      </div>
      <div class="weapon-rof-note weapon-value">{{ itemWeapon.note }}</div>
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
.weapon-value {
  background: white;
  color: black;
  border-bottom: solid 0.5px olive;
  border-right: solid 1.5px olive;
}
</style>
