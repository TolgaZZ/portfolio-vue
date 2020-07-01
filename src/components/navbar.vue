<template>
  <nav>
    <v-app-bar flat color="secondary">
      <v-img src="../assets/logo.svg" height="45" contain position="relative"></v-img>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="primary--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
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
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
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
        { title: "About", icon: "fa fa-user", route: "@/components/about" },
        { title: "Skills", icon: "fas fa-circle-notch", route: "@/components/about"  },
        { title: "My Projects", icon: "mdi-folder-open", route: "@/components/projects"  },
        { title: "Contacts", icon: "fas fa-id-card-alt", route: "@/components/contact"}
      ],

      drawer: false
    };
  }
};
</script>

