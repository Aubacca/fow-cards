<template>
  <div>
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <span class="skill-title">{{ this.pageTitle }}</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <div class="skill-main-key text-uppercase text-center">
            {{ this.skills.name }}
          </div>
        </v-col>
        <v-col cols="2">
          <div class="skill-main-value text-right">
            {{ this.skills.w6 }}
          </div>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        v-for="(skillItem, index) in this.skills.skill"
        :key="index"
      >
        <v-col cols="9">
          <div class="text-center">
            <div class="skill-extra-name">{{ skillItem.name }}</div>
            <div class="skill-extra-rule">{{ skillItem.rule }}</div>
          </div>
        </v-col>
        <v-col cols="3" class="text-right">
          <div class="skill-extra-value">{{ skillItem.w6 }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "skillBoxComponent",
  props: { pageTitle: String, skills: Object },
};
</script>

<style>
.skill-title {
  color: red;
  font-size: small;
}
.skill-main-key,
.skill-main-value {
  font-size: x-small;
}
.skill-main-value {
  font-weight: bold;
}
.skill-extra-value {
  font-size: x-small;
  font-style: italic;
  font-weight: bold;
}
.skill-extra-name {
  font-size: x-small;
  font-style: italic;
}
.skill-extra-rule {
  font-size: x-small;
  font-style: italic;
  font-weight: bold;
}
</style>
