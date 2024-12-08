<template>
  <v-app id="inspire">
    <v-app-bar flat color="black">
      <v-container>
        <v-row>
          <!-- 왼쪽 공백 -->
          <v-col cols="3" />
          
          <!-- 가운데 아이콘과 버튼 -->
          <v-col cols="6">
            <div class="d-flex justify-space-between align-center">
              <v-btn>
                <!-- <v-avatar color="grey-darken-4" size="40"> -->
                  <v-img :width="40" :src="guitarIcon"></v-img>
                <!-- </v-avatar> -->
                guitar-Reflect
              </v-btn>

              <!-- 버튼 -->
              <div>
                <v-btn
                  v-for="link in links"
                  :key="link"
                  class="mx-2"
                  variant="text"
                  text
                >
                  {{ link }}
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- 오른쪽 공백 -->
          <v-col cols="3" />
        </v-row>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import headerIcon from '@/assets/headerIcon.png'
import guitarIcon from '@/assets/guitar-icon-3rd.png'

const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>
