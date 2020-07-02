<template >
  <v-container fluid="true" class="secondary" absolute id="contact">
    <v-card flat tile class="secondary primary--text text-center">
      <v-card-text>
        <v-btn v-for="item in items" :key="item.icon" class="mx-4 primary--text" icon>
          <a :href="item.href" target="_blank" class="text-decoration-none">
          <v-icon size="24px">{{ item.icon }}</v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="primary--text pt-0">tolga.z@outlook.com</v-card-text>
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
    items: [
      { icon: "fab fa-github", 
      href: "https://github.com/TolgaZZ" 
      },

      { icon: "mdi-twitter", 
      href: "https://twitter.com/TolgaZ_" 
      },
      {
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/tolga-zorlu-68a444145/"
      },
      {
        icon: "mdi-instagram",
        href: "https://www.instagram.com/tolga.zm/?hl=nl"
      }
    ]
  })
};
</script>