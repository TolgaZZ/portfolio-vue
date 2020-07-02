<template>
  <v-app>
    <navbar />
    <Theader />
    <about />
    <projects />
    <contact />
    <v-main class="grey lighten-4">
     
    </v-main>
  </v-app>
</template>


<script>
import Navbar from "@/components/navbar";
import Theader from "@/components/header";
import about from "@/components/about";
import projects from "@/components/projects";
import contact from "@/components/contact";

export default {
  name: "App",
  components: { Navbar, Theader, about, projects, contact },
  data: () => ({
    //
  })
};
</script>
