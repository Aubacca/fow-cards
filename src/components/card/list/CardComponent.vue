<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="2">{{ this.cardDetail.header.nation }}</v-col>
        <v-col cols="8">
          <h4>{{ this.cardDetail.header.title }}</h4>
          <span>{{ this.cardDetail.header.subtitle }}</span>
        </v-col>
        <v-col cols="2">{{ this.cardDetail.header.name }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <SkillBoxComponent
            :pageTitle="'Motivation'"
            :skills="this.cardDetail.motivation"
          ></SkillBoxComponent
        ></v-col>
        <v-col cols="8">2 </v-col>
        <v-col cols="2">3</v-col>
      </v-row>
    </v-container>

    <hr />
    <SkillBoxComponent
      :pageTitle="'Skill'"
      :skills="this.cardDetail.skill"
    ></SkillBoxComponent>
    <hr />
    <SkillBoxComponent
      :pageTitle="'Is Hit On'"
      :skills="this.cardDetail.isHitOn"
    ></SkillBoxComponent>
    <hr />
    <ArmourListComponent
      :pageTitle="'Armour'"
      :itemList="this.cardDetail.armour"
    ></ArmourListComponent>
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
        Weapon:
        <span>{{ weapon.weapon }}</span> Range:
        <span>{{ weapon.range }}</span> RoF Halted:
        <span>{{ weapon.rofHalted }}</span> RoF Moving:
        <span>{{ weapon.rofMoving }}</span> Anti Tank:
        <span>{{ weapon.antiTank }}</span> Fire Power:
        <span>{{ weapon.firePower }}</span> NOte:
        <span>{{ weapon.note }}</span>
      </div>
    </div>
    <hr />
    <!-- {{ this.cardDetail }} -->
  </div>
</template>

<script>
import ArmourListComponent from "./ArmourListComponent";
import SkillBoxComponent from "./SkillBoxComponent";

export default {
  name: "CardDetail",
  components: { ArmourListComponent, SkillBoxComponent },
  props: {
    cardDetail: Object,
  },
};
</script>

<style></style>
