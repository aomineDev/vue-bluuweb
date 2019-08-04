<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Buttons</h2>
        <v-btn>Texto</v-btn>
        <v-btn dark color="blue">Texto</v-btn>
        <v-btn color="red white--text">Texto</v-btn>
        <v-btn flat color="green">Texto</v-btn>
        <v-btn small color="success">Texto</v-btn>
        <v-btn color="warning">Texto</v-btn>
        <v-btn large @click="disabledEnabled" color="error">{{ disabled.text }}</v-btn>
        <v-btn large :disabled="disabled.state" color="error">Texto</v-btn>
        <v-btn large depressed dark color="red">Texto</v-btn>
      </v-flex>
      <v-flex xs12>
        <h2 class="mt-3">Icons</h2>
        <v-btn>
          <v-icon>forum</v-icon>
        </v-btn>
        <v-btn flat icon color="red">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn fab small color="blue white--text">
          <v-icon>important_devices</v-icon>
        </v-btn>
        <v-btn fab color="green white--text">
          <v-icon>important_devices</v-icon>
        </v-btn>
        <v-btn fab large color="cyan white--text">
          <v-icon>important_devices</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <h2 class="my-3">Buttons + Icons</h2>
        <v-btn color="error">
          Texto
          <v-icon>cloud_upload</v-icon>
        </v-btn>
        <v-btn color="primary">
          Texto
          <v-icon class="ml-2">cloud_upload</v-icon>
        </v-btn>
        <v-btn color="success">
          Texto
          <v-icon right>cloud_upload</v-icon>
        </v-btn>
        <v-btn color="warning">
          <v-icon left>cloud_upload</v-icon>
          Texto
        </v-btn>
        <v-btn color="secondary">
          <v-icon left>cloud_upload</v-icon>
          Texto
        </v-btn>
        <v-btn outline color="accent">
          <v-icon left>cloud_upload</v-icon>
          Texto
        </v-btn>
        <v-btn round color="info">
          Rounded Button
          <v-icon right>cloud_upload</v-icon>
        </v-btn>
        <v-btn block color="info">
          <v-icon left>cloud_upload</v-icon>
          Texto
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Buttons',
  data: () => ({
    disabled: {
      text: 'enabled',
      state: true
    }
  }),
  methods: {
    disabledEnabled(){
      if (this.disabled.state) {
        this.disabled.text = 'disabled';
      } else {
        this.disabled.text = 'enabled';
      }
        this.disabled.state = !this.disabled.state
    }

  }
}
</script>
