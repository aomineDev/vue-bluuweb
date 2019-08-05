<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <h1>{{ post.title }}</h1>
        <h2 class="subtitle-1 pb-3">@{{ user.username }}</h2>
      </v-flex>
      <v-flex xs12>
        <p>{{ post.body }}</p>
      </v-flex>
      <v-flex xs12>
        <v-btn to="/blog">Go Back</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  head(){
    return {
      title: this.post.id
    }
  },
  async asyncData ({ params }) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);
      return {
        post: res.data,
        user: user.data
      }
    }catch(error) {
      console.log(error);
    }
  }
}
</script>
