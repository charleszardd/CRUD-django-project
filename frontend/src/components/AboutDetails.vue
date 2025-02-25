<template>
  <v-container fluid class="about-page text-black main-font">
    <v-row>
      <v-col class="justify-center d-flex flex-column align-center">
        <v-card elevation="10" class="rounded-circle" height="300" width="300">
          <v-img cover height="300" :src="aboutItems.image"></v-img>
        </v-card>
        <div class="mt-3 text-center">
          <h1>{{ aboutItems.creatorName }}</h1>
          <p class="mb-10  text-grey-darken-3 main-font-semibold">{{ aboutItems.creatorRole }}</p>
          <p class="text-h6 ">{{ aboutItems.creatorDescription }}</p>

          <div class="social-links mt-5"> 
            <v-btn elevation="10" icon class="mr-5">
              <v-icon  size="24">mdi-github</v-icon>
            </v-btn>
            <v-btn elevation="10" icon class="mr-5">
              <v-icon size="24">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn elevation="10" icon class="mr-5">
              <v-icon size="24">mdi-instagram</v-icon>
            </v-btn>
            <v-btn elevation="10" icon class="mr-5">
              <v-icon size="24">mdi-web</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const aboutItems = ref({
  image: "/charles.webp",
  creatorName: 'Charles David P. Caseñas',
  creatorRole: 'Pull Stack Developer',
  creatorDescription: '🙶 Fuel your hunger for growth with the same passion you have for food. 🗿 🙷',
});
</script>
<style scoped>
.about-page{
  margin-top: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
</style>