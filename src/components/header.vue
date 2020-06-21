<template>
  <div color="secondary">
    <v-container fluid="true" class="secondary" >
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-btn outline block class="primary">1</v-btn>
        </v-col>
          <v-col cols="12" md="6" lg="6">
          <v-btn outline block class="primary">1</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.v-container {
  width: 100%;
  background-color: red;
}
</style>

<script>
export default {
  data: () => ({
    alignments: ["center"]
  })
};
</script>