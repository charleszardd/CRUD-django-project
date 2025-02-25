<template>
  <v-container fluid class="main-font container-center">
    <v-row class="d-flex justify-center align-center text-center">
      <v-col cols="12">
        <v-icon class="text-h1 mdi mdi-spin mb-5 text-black">mdi-react</v-icon>
        <h1 class="main-font text-grey-darken-4 text-h3 elevated-text font-weight-bold">
          Showcase Your Work to The World
        </h1>
        <p class="text-grey-darken-2 text-h6 font-weight-semibold">
          Create your professional portfolio projects in minutes
        </p>
        <Button
          height="45"
          to="/projects"
          color="#212121"
          elevation="10"
          class="mt-5"
          :noSpacing="false"
          icon="mdi-file-plus"
        >
          Create Projects
        </Button>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <style scoped>
.container-center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-h1 {
  font-size: 10rem !important;
}
</style>
  