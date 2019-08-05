<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="text-xs-center">Posts</h1>
      </v-flex>
      <v-flex xs4 v-for="post in posts" :key="post.id">
        <v-card>
          <v-card-title>
              <h3 class="headline mb-0 text-truncate">{{ post.title }}</h3>
          </v-card-title>
          <v-card-text>
              <p class="text-truncate">{{ post.body }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="white" :to="`/blog/${post.id}`">Go</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  head: {
    title: 'Blog',
    meta: [
      {hid: 'description', name: 'description', content: 'Esta es la descripcion de mi blog'}
    ]
  },
  async asyncData () {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      return {
        posts: res.data
      }
    }catch(error) {
      console.log(error);
    }
  }
}
</script>
