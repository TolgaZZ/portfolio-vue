<template>
  <nav>
    <v-app-bar flat color="secondary">
    
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="primary--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase primary--text"></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      class="indigo primary--text"
      absolute
      right
      color="Lblue-dark4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="primary"></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: "About", icon: "fa fa-user" },
        { title: "Skills", icon: "fas fa-circle-notch" },
        { title: "My Projects", icon: "mdi-folder-open" },
        { title: "Contacts", icon: "fas fa-id-card-alt" }
      ],

      drawer: false
    };
  }
};
</script>

