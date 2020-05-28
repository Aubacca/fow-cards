<template>
  <div v-show="this.weaptonList">
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col class="weapon-header col-3">Weapon</v-col>
        <v-col class="weapon-header col-2">Range</v-col>
        <v-col class="weapon-header">ROF Halted</v-col>
        <v-col class="weapon-header">ROF Moving</v-col>
        <v-col class="weapon-header">Antitank</v-col>
        <v-col class="weapon-header">Fire-power</v-col>
        <v-col class="weapon-header col-3">Notes</v-col>
      </v-row>
      <v-row
        no-gutters
        v-for="(weaponItem, index) in this.weaptonList"
        :key="index"
      >
        <v-col cols="3" class="weapon-value">{{ weaponItem.weapon }}</v-col>
        <v-col cols="2" class="weapon-value">{{ weaponItem.range }}</v-col>
        <v-col class="weapon-value">{{ weaponItem.rofHalted }}</v-col>
        <v-col class="weapon-value">{{ weaponItem.rofMoving }}</v-col>
        <v-col class="weapon-value">{{ weaponItem.antiTank }}</v-col>
        <v-col class="weapon-value">{{ weaponItem.firePower }}</v-col>
        <v-col cols="3" class="weapon-value">{{ weaponItem.note }}</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WeaponComponent",
  props: { weaptonList: Array },
};
</script>

<style scoped>
.weapon-header {
  border: cornflowerblue solid 1px;
  color: red;
  font-size: small;
}
.weapon-value {
  border: cornflowerblue solid 1px;
  font-size: x-small;
}
</style>
