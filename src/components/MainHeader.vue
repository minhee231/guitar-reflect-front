<template>
  <v-app id="inspire">
    <v-app-bar flat color="black">
      <v-container class="mx-auto d-flex justify-center align-center">
        <v-avatar
          class="me-4"
          color="grey-darken-4"
          size="32"
        >
          <v-img :src="headerIcon"></v-img>
        </v-avatar>
        
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import headerIcon from '@/assets/headerIcon.png'

const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>
