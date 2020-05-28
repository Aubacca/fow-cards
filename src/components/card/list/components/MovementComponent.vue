<template>
  <div v-if="this.moveDefinition">
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col class="move-header">Tactical</v-col>
        <v-col class="move-header">Terrain Dash</v-col>
        <v-col class="move-header">Cross Country Dash</v-col>
        <v-col class="move-header">Road Dash</v-col>
        <v-col class="move-header">Cross</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="move-value">{{ this.moveDefinition.tactical }}</v-col>
        <v-col class="move-value">{{ this.moveDefinition.terainDash }}</v-col>
        <v-col class="move-value">{{
          this.moveDefinition.crossCountryDash
        }}</v-col>
        <v-col class="move-value">{{ this.moveDefinition.roadDash }}</v-col>
        <v-col class="move-value">{{ this.moveDefinition.cross }}</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MovementComponent",
  props: { moveDefinition: Object },
};
</script>

<style scoped>
.move-header {
  border: cornflowerblue solid 1px;
  color: red;
  font-size: small;
}
.move-value {
  border: cornflowerblue solid 1px;
  font-size: x-small;
}
</style>
