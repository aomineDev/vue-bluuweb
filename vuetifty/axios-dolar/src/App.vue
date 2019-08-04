<template>
  <v-app>
<v-toolbar dark>
  <v-toolbar-title>Vuetify</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat append :to="{name: 'home'}" exact>Home</v-btn>
    <v-btn flat append :to="{name: 'about'}">About</v-btn>
  </v-toolbar-items>
</v-toolbar>
    <v-content>
      <v-container>
        <router-view/>

        <v-dialog
          v-model="loading.state"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            dark
          >
            <v-card-text>
              {{ loading.title }}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>
