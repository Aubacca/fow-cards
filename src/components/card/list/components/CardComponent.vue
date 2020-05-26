<template>
  <div>
    <v-container class="grey lighten-5" fluid>
      <v-row class="card-content">
        <v-col cols="2">{{ this.cardDetail.header.nation }}</v-col>
        <v-col cols="8" class="text-center">
          <h4>{{ this.cardDetail.header.title }}</h4>
          <span>{{ this.cardDetail.header.subtitle }}</span>
        </v-col>
        <v-col cols="2">{{ this.cardDetail.header.name }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <SkillBoxComponent
            class="card-content"
            :pageTitle="'Motivation'"
            :skills="this.cardDetail.motivation"
          ></SkillBoxComponent>
          <hr />
          <SkillBoxComponent
            class="card-content"
            :pageTitle="'Skill'"
            :skills="this.cardDetail.skill"
          ></SkillBoxComponent>
        </v-col>
        <v-col cols="6"></v-col>
        <v-col cols="3">
          <SkillBoxComponent
            class="card-content"
            :pageTitle="'Is Hit On'"
            :skills="this.cardDetail.isHitOn"
          ></SkillBoxComponent>
          <hr />
          <ArmourComponent
            class="card-content"
            :pageTitle="'Armour'"
            :armourDefinition="this.cardDetail.armour"
          ></ArmourComponent>
          <SaveComponent
            :pageTitle="'Save'"
            :saveDefinition="this.cardDetail.saves"
          ></SaveComponent>
        </v-col>
      </v-row>
    </v-container>
    <hr />
    <MovementComponent
      class="card-content"
      :pageTitle="''"
      :moveDefinition="this.cardDetail.move"
    />
    <hr />
    <WeaponComponent
      class="card-content"
      :weaptonList="this.cardDetail.weapons"
    />
    <hr />
    <!-- {{ this.cardDetail }} -->
  </div>
</template>

<script>
import ArmourComponent from "./ArmourComponent";
import MovementComponent from "./MovementComponent";
import SkillBoxComponent from "./SkillBoxComponent";
import WeaponComponent from "./WeaponComponent";

import SaveComponent from "./SaveComponent";

export default {
  name: "CardDetail",
  components: {
    ArmourComponent,
    MovementComponent,
    SaveComponent,
    SkillBoxComponent,
    WeaponComponent,
  },
  props: {
    cardDetail: Object,
  },
};
</script>

<style>
.card-content {
  border: blue solid 2px;
  border-radius: 10px;
  background-color: burlywood;
}
</style>
