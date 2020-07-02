<template >
  <v-container class="primary mt-n15" fluid="true" id="about" >
    <v-row>
      <v-col cols="12" md="8"></v-col>
      <v-col cols="12" md="4">
        <v-avatar size="200">
          <img src="../assets/foto.png" />
        </v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" sm="12" class="mt-n1">
        <v-card class="pa-2 primary " outlined tile flat >
          <h1>Progression</h1>
          <div>
            <sub>HTML5</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="80" height="10"></v-progress-linear>
            <br />
            <sub>CSS3</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="80" height="10"></v-progress-linear>
            <br />
            <sub>PHP</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="70" height="10"></v-progress-linear>
            <br />
            <sub>PHP Frameworks</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="65" height="10"></v-progress-linear>
            <br />
            <sub>Javascript</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="75" height="10"></v-progress-linear>
            <br />
            <sub>Javascript Frameworks </sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="70" height="10"></v-progress-linear>
            <br />
            <sub>C#</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="60" height="10"></v-progress-linear>
            <br />
            <sub>Unity</sub>
            <v-progress-linear background-color="Pblue" color="secondary" rounded value="80" height="10"></v-progress-linear>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12" >
        <v-card class="primary" outlined tile>
          <h1>About me</h1>
          <p class="pt-md-5 mx-lg-auto primary">Hi, my name is Tolga I’m an 18 years old software developer student. I study on the Graphic Lyceum Rotterdam. I’ve chosen this study because I had some fun testing things out with code when I was in middleschool.</p>
          <p>
            Once I started this study, I understood that I chose the right Education and that I want to see myself in the future as a Software Developer. I’m experienced with multiple programming languages
            I haven’t decided yet if I want to be a front-end or back-end developer as everything is fun. I’ve also experience working mobile developement and also with frameworks that I didn’t learn on school but in my freetime.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pt-5 primary" cols="12" md="12"> 
                  <v-img src="../assets/divider2.svg" height="100%" class="secondary" flat outlined tile>
                  <h1 class=" pa-15 primary--text text-center margin-auto">“understanding the problem is half of the solution”</h1>

                  </v-img>
                  
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

