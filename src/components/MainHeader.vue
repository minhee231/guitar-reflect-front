<template>
    <v-app id="inspire">
      <v-app-bar flat color="black">
        <v-container class="mx-auto d-flex align-center justify-center" >
          <v-avatar
            class="me-4 "
            color="grey-darken-4"
            size="32"
          ></v-avatar>
  
          <v-btn
            v-for="link in links"
            :key="link"
            :text="link"
            variant="text"
          ></v-btn>
          <v-spacer></v-spacer>
  
        </v-container>
      </v-app-bar>
  

    </v-app>
  </template>
  
  <script setup>
    const links = [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ]
  </script>