<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="info" v-on:click="dialog = !dialog">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="info" v-on:click="dialog = !dialog">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container fill-height fluid>
              <v-layout fill-height align-center>
                <v-flex>
                  <p class="headline white--text text-xs-center">Lorem ipsum dolor sit.</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="info" v-on:click="dialog = !dialog">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Dialog -->
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card>
        <v-card-title>
          <h2>Este es el titulo</h2>
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis voluptatem. Aperiam quis blanditiis dignissimos. Consequuntur ipsum ducimus nostrum accusantium est dolore aliquam iusto obcaecati? Itaque quia possimus reprehenderit eveniet.</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" flat @click="dialog = !dialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  data:()=>({
    dialog: false
  })
}
</script>

