<template>
<div>
  <v-toolbar dark app>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
   <v-toolbar-title>Vuetify</v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-xs-only">
     <v-btn flat :to="{name: 'home'}" exact>Home</v-btn>
   <v-btn flat :to="{name: 'grid'}">Grid</v-btn>
   <v-btn flat :to="{name: 'buttons'}">Buttons</v-btn>
   <v-btn flat :to="{name: 'card'}">Card</v-btn>
   <v-btn flat :to="{name: 'tasks'}">Tasks</v-btn>
   <v-btn flat :to="{name: 'tasksRest'}">Tasks Rest</v-btn>
   </v-toolbar-items>
</v-toolbar>

<v-navigation-drawer app v-model="drawer" temporary dark>
  <v-layout mt-4 column align-center>
    <v-flex>
      <v-avatar>
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
      </v-avatar>
    </v-flex>
    <v-flex>
      <p class="white--text mt-3 headline">Juanito Perez</p>
    </v-flex>
  </v-layout>
</v-navigation-drawer>
    
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data:()=>({
    drawer: false
  })
}
</script>
