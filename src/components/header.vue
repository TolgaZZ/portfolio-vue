<template>
  <div flat>
    <v-container
      class="secondary mx-auto"
      fluid="true"
      v-for="align in alignments"
      :key="align"
      min-width="100%"
    >
      <v-row :align="align">
        <v-col cols="12" md="6">
          <v-card class="pa-2 secondary primary--text pa-md-4 mx-lg-auto" outlined tile flat>
            <div class="mb-1 primary--text ml-15"><h1>“Teamwork makes the dreamwork”</h1></div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" flat >
          <v-card flat>
            <v-img
              src="../assets/header-icon.svg"
              aspect-ratio="1.7"
              contain
              class="secondary "
              flat
              outlined
              tile
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-img src="../assets/wave.svg" class="mb-3 secondary"></v-img>
  </div>
</template>



<script>
export default {
  data: () => ({
    alignments: ["center"]
  })
};
</script>
