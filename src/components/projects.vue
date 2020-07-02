<template >
  <v-container class="primary" fluid id="projects">
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
              <v-btn
                rounded
                color="secondary"
                dark
                class="ml-5"
                :disabled="projects[model].github == null"
                :to="projects.github"
              >
                <a
                  :href="projects[model].github"
                  target="_blank"
                  class="text-decoration-none"
                >Github link</a>
              </v-btn>
              <v-btn
                rounded
                color="secondary"
                dark
                class="ml-5"
                :disabled="projects[model].demo == null"
                :to="projects.demo"
              >
                <a :href="projects[model].demo" 
                target="_blank" 
                class="text-decoration-none">Demo</a>
              </v-btn>
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
        title: "Film Api",
        content:
          "Second attempt to use api's. It picks up everything it could from the api the frontend could've been better but I'm fine with it.",
        img: require("@/assets/projects/project6.jpeg"),
        github: "https://github.com/TolgaZZ/filmAPI",
        demo: "https://83396.ict-lab.nl/back2/back2_api/opdracht2/opdracht2.php"
      },
      {
        title: "Portfolio",
        content:
          "My portfolio was my first attempt of working with VueJS and also Vuetify. I like them a lot and I'm looking forward to use them in the future.",
        img: require("@/assets/projects/project8.png"),
        github: "https://github.com/TolgaZZ/portfolio-vue",
        buttonStatus: "disable"
      },
      {
        title: "Doodle Jump, Unity C#",
        content:
          'I made the exact replica of the game called "Doodle Jump", this project is made in Unity and uses C# I mainly focused on making this compatible for mobile as you needed to balance your screen to drag your character from left to right.  You can find this project on my Github page!',
        img: require("@/assets/projects/project2.png"),
        github: "https://github.com/TolgaZZ/DoodleReplica",
        demo: "https://apps.apple.com/nl/app/doodle-jump/id307727765"
      },
      {
        title: "Parent - Teacher day",
        content:
          "Parents can sign up through our site to make an appointment with the teacher to talk about the grades of their kid.",
        img: require("@/assets/projects/project3.jpg"),
        github: "https://github.com/TolgaZZ/ouderbc4",
        demo: "https://ouderbc4.ict-lab.nl/"
      },
      {
        title: "School Linkedin",
        content:
          "Me and my 7 other classmates made a Linkedin for school, people can invite others to work with them on projects. I made a livechat system where people can talk to each other it's not perfect but it does the work.",
        img: require("@/assets/projects/project4.jpg"),
        github: "https://github.com/TolgaZZ/mdtbc4",
        demo: "https://mdtbc4.ict-lab.nl/"
      },
      {
        title: "Illustrator",
        content:
          "Personal project that I'm working on with a good friend of mine, this project is still running as we are working on a website that we are making in Laravel. We have 10+ customers right now and are sure to get more after our website is finished. ",
        img: require("@/assets/projects/project1.png"),
        buttonStatus: "disable",
        demo: "https://discord.gg/3Fpy2UB"
      },
      {
        title: "Single Page Application",
        content:
          "Worked with modals in this project, you can add/delete/change peoples data in the tabel. This changes live instead of you restarting the page everything you change something.",
        img: require("@/assets/projects/project7.jpg"),
        github: "https://github.com/TolgaZZ/mdtbc4",
        demo: "https://83396.ict-lab.nl/front2/SPA/eindopdracht/index.html"
      }
    ],
    model: null
  })
};
</script>