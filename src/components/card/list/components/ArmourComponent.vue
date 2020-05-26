<template>
  <div v-if="this.armourDefinition">
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <span class="armour-title">{{ this.pageTitle }}</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <div class="armour-main-key text-uppercase">
            Front
          </div>
        </v-col>
        <v-col cols="2">
          <div class="armour-main-value text-right">
            {{ this.armourDefinition.front }}
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <div class="armour-main-key text-uppercase">
            Side & Rear
          </div>
        </v-col>
        <v-col cols="2">
          <div class="armour-main-value text-right">
            {{ this.armourDefinition.side }}
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <div class="armour-main-key text-uppercase">
            Top
          </div>
        </v-col>
        <v-col cols="2">
          <div class="armour-main-value text-right">
            {{ this.armourDefinition.top }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ArmourComponent",
  props: { pageTitle: String, armourDefinition: Object },
};
</script>

<style>
.armour-title {
  color: red;
  font-size: small;
}
.armour-main-key,
.armour-main-value {
  font-size: x-small;
}
.armour-main-value {
  font-weight: bold;
}
</style>
