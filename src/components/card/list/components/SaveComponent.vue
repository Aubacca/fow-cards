<template>
  <div v-if="this.saveDefinition">
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <span class="save-title">{{ this.pageTitle }}</span>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        v-for="(saveItem, index) in this.saveDefinition"
        :key="index"
      >
        <v-col cols="9">
          <div class="save-main-key text-uppercase">
            {{ saveItem.name }}
          </div>
        </v-col>
        <v-col cols="3">
          <div class="save-main-value text-right">
            {{ saveItem.w6 }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SaveComponent",
  props: { pageTitle: String, saveDefinition: Array },
};
</script>

<style>
.save-title {
  color: red;
  font-size: small;
}
.save-main-key,
.save-main-value {
  font-size: x-small;
}
.save-main-value {
  font-weight: bold;
}
</style>
