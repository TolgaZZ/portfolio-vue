<template>
  <v-container class="primary" fluid>
    <v-row no-gutters class="col-12 col-lg-6 offset-lg-3">
      <v-sheet class="mx-auto ma-10" elevation="8" width="100%">
        <v-slide-group v-model="model" class="pa-4" show-arrows center-active>
          <v-slide-item v-for="(item, i) in projects" :key="i" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="180"
              @click="toggle"
            >
              <v-img height="100%" :src="item.img"></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-expand-transition>
          <v-sheet v-if="model != null" color="Pblue" height="300">
            <v-row class="fill-height ma-5">
              <h3 class="title primary--text mt-5">{{ projects[model].title }}</h3>
              <subtitle-2 class="primary--text">{{ projects[model].content }}</subtitle-2>
              <v-btn rounded color="secondary" dark><a :href="projects[model].github" target="_blank">Github link</a></v-btn>
              <v-btn rounded color="secondary" dark class="ml-5"><a :href="projects[model].demo" target="_blank">Demo</a></v-btn>
              
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Design a new website",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        img: require("@/assets/projects/project1.png"),
        github: "https://github.com/TolgaZZ/xamarinApp"
      },
      {
        title: "Doodle Jump, Unity C#",
        content:
          'I made the exact replica of the game called "Doodle Jump", this project is made in Unity and uses C# I mainly focused on making this compatible for mobile as you needed to balance your screen to drag your character from left to right.  You can find this project on my Github page!',
        img: require("@/assets/projects/project2.png"),
        github: "https://github.com/TolgaZZ/xamarinApp",
        demo: "https://apps.apple.com/nl/app/doodle-jump/id307727765"
      },
      {
        title: "Code up the homepage",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        img: require("@/assets/projects/project3.jpg"),
        github: "https://github.com/TolgaZZ/xamarinApp"
      },
      {
        title: "School Linkedin",
        content:
          "Me and my 7 other classmates made a Linkedin for school, people can invite others to work with them on projects.",
        img: require("@/assets/projects/project4.jpg"),
        github: "https://github.com/TolgaZZ/xamarinApp"
      },
      {
        title: "Create a community forum",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        img: require("@/assets/projects/project1.png"),
        github: "https://github.com/TolgaZZ/xamarinApp"
      }
    ],
    model: null
  })
};
</script>