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
      <!-- <div class="fow-move-tactical">Move Tactical</div>
      <div class="fow-move-terrain">Move Terrain</div>
      <div class="fow-move-country">Move Cross Country</div>
      <div class="fow-move-road">Move Road</div>
      <div class="fow-move-cross-check">Cross Check</div> -->
    </div>
    <div class="fow-weapon">
      <CardWeaponComponent :itemWeapons="this.cardData.weapons" />
      <!-- <div class="fow-weapon-desc">Weapon</div>
      <div class="fow-weapon-range">Range</div>
      <div class="fow-weapon-for-halted">ROF Halted</div>
      <div class="fow-weapon-rof-moved">ROF Moved</div>
      <div class="fow-weapon-antitank">Antitank</div>
      <div class="fow-weapon-firepower">Firepower</div>
      <div class="fow-weapon-note">Note</div> -->
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
  width: 8.9cm * 2;
  height: 5.7cm * 2;
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
  /* display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px 1px;
  grid-template-areas:
    "fow-move-tactical fow-move-terrain fow-move-country fow-move-road fow-move-cross-check"
    ". . . . ."; */
}
/* .fow-move-tactical {
  grid-area: fow-move-tactical;
}
.fow-move-terrain {
  grid-area: fow-move-terrain;
}
.fow-move-country {
  grid-area: fow-move-country;
}
.fow-move-road {
  grid-area: fow-move-road;
}
.fow-move-cross-check {
  grid-area: fow-move-cross-check;
} */
.fow-weapon {
  grid-area: fow-weapon;
  /* display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px 1px;
  grid-template-areas:
    "fow-weapon-desc fow-weapon-range fow-weapon-for-halted fow-weapon-rof-moved fow-weapon-antitank fow-weapon-firepower fow-weapon-note"
    ". . . . . . ."; */
}
/* .fow-weapon-desc {
  grid-area: fow-weapon-desc;
}
.fow-weapon-range {
  grid-area: fow-weapon-range;
}
.fow-weapon-for-halted {
  grid-area: fow-weapon-for-halted;
}
.fow-weapon-rof-moved {
  grid-area: fow-weapon-rof-moved;
}
.fow-weapon-antitank {
  grid-area: fow-weapon-antitank;
}
.fow-weapon-firepower {
  grid-area: fow-weapon-firepower;
}
.fow-weapon-note {
  grid-area: fow-weapon-note;
} */
</style>
