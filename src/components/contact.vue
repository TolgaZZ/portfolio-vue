<template>
  <v-container fluid="true" class="secondary " absolute >  
    <v-card flat tile class="secondary primary--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 primary--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="primary--text pt-0">83396@glr.nl</v-card-text>
      <v-divider class="Pblue"></v-divider>
      <v-card-text class="primary--text">
        {{ new Date().getFullYear() }} —
        <strong>My portfolio is 100% made in Vue.JS and Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>