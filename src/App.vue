<template>
  <v-app>
    <navbar />
    <mainHeader/>
    <v-content class="grey lighten-4">
      <router-view></router-view>
  
    </v-content>
  </v-app>
</template>




<script>
import Navbar from "@/components/navbar"
import mainHeader from "@/components/header"

export default {
  name: "App",
  components: { Navbar, mainHeader},
  data: () => ({
    //
  })
};
</script>
