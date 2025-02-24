<template>
    <v-app-bar color="#212121" class="px-10 d-flex main-font" app>
      <!-- Logo -->
      <router-link to="/" class="logo cursor-pointer text-white font-weight-bold main-font" style="text-decoration: none;">
  <strong>Portfolio</strong>
</router-link>

      <v-spacer></v-spacer>
  
      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex ">
        <v-btn variant="text" class="text-white mr-5" to="/projects">Projects</v-btn>
      </div>
  
      <!-- Mobile Menu Button -->
      <v-btn icon class="d-md-none" @click="drawer = !drawer">
        <v-icon class="text-white">mdi-menu</v-icon>
      </v-btn>
  
      <!-- Mobile Drawer -->
      <v-navigation-drawer v-model="drawer" temporary right>
        <v-list>
          <v-list-item to="/projects" @click="drawer = false">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </template>
  <script setup>
  import { ref } from 'vue'
  
  const drawer = ref(false) // Controls the mobile menu
  </script>
  <style scoped>
  .logo {
    font-size: 1.5rem;
  }
  </style>