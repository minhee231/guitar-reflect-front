<template>
  <v-app id="inspire">
    <v-app-bar flat color="black">
      <v-container>
        <v-row>
          <!-- 왼쪽 공백 -->
          <v-col cols="3" />
          
          <!-- 가운데 -->
          <v-col cols="6">
            <div class="d-flex justify-space-between align-center">
              <v-btn @click="navigatorTo(home.path)">
                <!-- <v-avatar color="grey-darken-4" size="40"> -->
                  <v-img :width="40" :src="guitarIcon"></v-img>
                <!-- </v-avatar> -->
                guitar-Reflect
              </v-btn>
              <div>
                <v-btn
                  v-for="link in links"
                  :key="link.name"
                  variant="text"
                  class="mx-2"
                  text
                  @click="navigatorTo(link.path)"
                >
                  {{ link.name }}
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

<script>
import guitarIcon from '@/assets/guitar-icon-3rd.png'

export default {
  name: "MainHeader",
  data: () => ({
    links: [
      {"name": 'Digimart', "path": "/digimart"},
    ],
    home: {"name": "Home", "path": "/"}
  }),

  methods: {
    navigatorTo(path) {
      this.$router.push(path);
    },
  },
}
</script>
