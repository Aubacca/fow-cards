<template>
  <div class="fow-grid-container">
    <div class="fow-header-left">{{ this.cardData.header.nation }}</div>
    <div class="fow-header">
      <div class="title">{{ this.cardData.header.title }}</div>
      <div class="subtitle">{{ this.cardData.header.subtitle }}</div>
    </div>
    <div class="fow-header-right">{{ this.cardData.header.name }}</div>
    <div class="fow-image">
      <img
        src="https://dummyimage.com/180x100/000/f2ff00&text=Item+Image"
        alt=""
      />
    </div>
    <div class="fow-data-left">
      <div>
        <CardMotivationComponent :itemMotivation="this.cardData.motivation" />
        <CardSkillComponent :itemSkill="this.cardData.skill" />
      </div>
    </div>
    <div class="fow-data-right">
      <CardHitComponent :itemHit="this.cardData.isHitOn" />
      <CardArmourComponent :itemArmour="this.cardData.armour" />
    </div>
    <div class="fow-move">
      <CardMovingComponent :itemMoving="this.cardData.move" />
    </div>
    <div class="fow-weapon">
      <CardWeaponComponent :itemWeapons="this.cardData.weapons" />
    </div>
  </div>
</template>

<script>
import CardMotivationComponent from "./CardMotivationComponent";
import CardSkillComponent from "./CardSkillComponent";
import CardHitComponent from "./CardHitComponent";
import CardArmourComponent from "./CardArmourComponent";
import CardMovingComponent from "./CardMovingComponent";
import CardWeaponComponent from "./CardWeaponComponent";

export default {
  name: "CardComponent",
  props: { cardData: Object },
  components: {
    CardMotivationComponent,
    CardSkillComponent,
    CardHitComponent,
    CardArmourComponent,
    CardMovingComponent,
    CardWeaponComponent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

.fow-grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px 1px;
  grid-template-areas:
    "fow-header-left fow-header fow-header-right"
    "fow-data-left fow-image fow-data-right"
    "fow-move fow-move fow-move"
    "fow-weapon fow-weapon fow-weapon";
  width: 17.8cm;
  height: 11.4cm;
  /* width: 8.9cm;
  height: 5.7cm; */
  border: blue solid 1px;
  border-radius: 2.5mm;
}
.fow-header-left {
  grid-area: fow-header-left;
}
.fow-header {
  grid-area: fow-header;
  text-align: center;
}
.fow-header-right {
  grid-area: fow-header-right;
  text-align: right;
}
.fow-data-left {
  grid-area: fow-data-left;
}
.fow-data-right {
  grid-area: fow-data-right;
}
.fow-image {
  grid-area: fow-image;
  text-align: center;
}
.fow-move {
  grid-area: fow-move;
}
.fow-weapon {
  grid-area: fow-weapon;
}
</style>
