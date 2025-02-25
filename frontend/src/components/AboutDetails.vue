<template>
  <v-container fluid class="about-page text-black main-font">
    <v-row>
      <v-col>
        <v-card class="mb-5" elevation="10">
          <v-card-title class="text-center main-font-semibold text-h4 my-5">
            {{ aboutItems.title }}
          </v-card-title>
          <v-card-text class="text-h6 mb-5">
            {{ aboutItems.description }}
          </v-card-text>
        </v-card>
        <v-card elevation="10">
          <v-row>
            <v-col class="px-0">
              <v-card height="400">
                <v-img height="400" cover :src="aboutItems.image"></v-img>
              </v-card>
            </v-col>

            <v-col class="bg-black">
              <v-card-text class="text-white text-h6 mt-5">
                {{ aboutItems.aboutMe }}
              </v-card-text>

              <div class="social-links pl-4 mt-10">
                <v-btn icon elevation="10" class="mr-5 bg-blue">
                  <v-icon class="text-white">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon elevation="10" class="mr-5">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn icon elevation="10" class="mr-5 bg-blue-darken-2">
                  <v-icon class="text-white">mdi-facebook</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const aboutItems = ref({
  title: "About Us",
  description:
    "Our Project Portfolio Management System is a final project for ITPROFEL, built using Django for the backend and Vue.js with Vuetify for the frontend. It enables users to create, view, update, and delete projects, providing an intuitive way to manage and showcase their work. This system ensures seamless CRUD operations with a modern, responsive UI, demonstrating our skills in full-stack development and API integration. ",
  aboutMe:
    "Im Charles Caseñas, a full-stack developer with a passion for creating innovative solutions. I have experience in web development. I am knowledgeable in languages such as Python, JavaScript, and PHP, and have worked with frameworks like Django, Vue.js, and Laravel. I am also skilled in database management and API integration. My goal is to leverage technology to build user-friendly applications that solve real-world problems.",
  image: "/charles.webp",
});
</script>
<style scoped>
.about-page{
  margin-top: 5rem;
}
</style>