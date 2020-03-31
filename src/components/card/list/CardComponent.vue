<template>
  <div>
    <h2>{{ this.cardDetail.header.title }}</h2>
    <h3>{{ this.cardDetail.header.subtitle }}</h3>
    <span
      >{{ this.cardDetail.header.nation }} /
      {{ this.cardDetail.header.name }}</span
    >
    <hr />
    <div>
      <h3>Motivation</h3>
      <div>
        {{ this.cardDetail.motivation.name }}:
        {{ this.cardDetail.motivation.w6 }}
      </div>
    </div>
    <hr />
    <div>
      <h3>Sills</h3>
      <div>
        {{ this.cardDetail.skill.name }}:
        {{ this.cardDetail.skill.w6 }}
      </div>
    </div>
    <hr />
    <div>
      <h3>Is Hit On</h3>
      <div>
        {{ this.cardDetail.isHitOn.name }}:
        {{ this.cardDetail.isHitOn.w6 }}
      </div>
    </div>
    <div v-if="this.cardDetail.armour">
      <hr />
      <h3>Armour</h3>
      <div v-for="arm in this.cardDetail.armour" :key="arm.id">
        Armour: <span>{{ arm }}</span>
      </div>
    </div>
    <hr />
    <div>
      <h3>Move</h3>
      <div>
        <span>Tactical: {{ this.cardDetail.move.tactical }}</span>
        <span>Terrain Dash: {{ this.cardDetail.move.terainDash }}</span>
        <span
          >Cross Country Dash: {{ this.cardDetail.move.crossCountryDash }}</span
        >
        <span>Road Dash: {{ this.cardDetail.move.roadDash }}</span>
        <span>Cross Check: {{ this.cardDetail.move.cross }}</span>
      </div>
    </div>
    <hr />
    <div>
      <h3>Weapons</h3>
      <div v-for="weapon in this.cardDetail.weapons" :key="weapon.id">
        Weapon: <span>{{ weapon.weapon }}</span> Range:
        <span>{{ weapon.range }}</span> RoF Halted:
        <span>{{ weapon.rofHalted }}</span> RoF Moving:
        <span>{{ weapon.rofMoving }}</span> Anti Tank:
        <span>{{ weapon.antiTank }}</span> Fire Power:
        <span>{{ weapon.firePower }}</span> NOte: <span>{{ weapon.note }}</span>
      </div>
    </div>
    <hr />
    <!-- {{ this.cardDetail }} -->
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  props: {
    cardDetail: Object,
  },
};
</script>

<style></style>
