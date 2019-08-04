<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <v-card v-for="(listTask, index) of listTasks" :key="index" class="mb-3">
          <v-card-title>
            <v-chip label class="pink white--text ml-0">
              <v-icon left>label</v-icon>
              {{ listTask.title }}
            </v-chip>
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ listTask.content }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" flat @click="editTask(index)">Edit</v-btn>
            <v-btn color="red" flat @click="removeTask(listTask.id)">Remove</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card class="mb-3 pa-3">

          <v-form @submit.prevent="addTask" v-if="form">
            <v-text-field color="blue" label="Titulo de la tarea" v-model="title" value="asdasdsadasd"></v-text-field>
            <v-textarea auto-grow clearable color="blue" label="Descripción de la tarea" v-model="content"></v-textarea>
            <v-btn type="submit" flat color="blue" class="ml-0">Add Task</v-btn>
          </v-form>

          <v-form @submit.prevent="updateTask" v-else>
            <v-text-field color="blue" label="Titulo de la tarea" v-model="title"></v-text-field>
            <v-textarea auto-grow clearable color="blue" label="Descripción de la tarea" v-model="content"></v-textarea>
            <v-btn type="submit" flat color="blue" class="ml-0">Edit Task</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'Tasks',
  data: ()=>({
    listTasks: [
      {id: 1, title: 'Titulo de la tarea #1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit libero a exercitationem facere minima id, in iste nisi! Eos quia consequatur quasi, magnam laborum temporibus harum cupiditate repudiandae sapiente nesciunt.'},
      {id: 2, title: 'Titulo de la tarea #2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit libero a exercitationem facere minima id, in iste nisi! Eos quia consequatur quasi, magnam laborum temporibus harum cupiditate repudiandae sapiente nesciunt.'}
    ],
    title: '',
    content: '',
    index: '',
    snackbar: false,
    snackbarText: '',
    form: true
  }),
  methods: {
    addTask(){
      if ((this.title == '' || this.title == null) && (this.content == '' || this.content == null)) {
        this.snackbarText = 'Los campos estan vacios';
        this.snackbar = true;
      } else {
          if (this.title == '' || this.title == null) {
          this.snackbarText = 'El titulo esta vacio';
          this.snackbar = true;
        } else {
          if (this.content == '' || this.content == null) {
            this.snackbarText = 'La descripción esta vacia';
            this.snackbar = true;
          } else {
            this.listTasks.push({
              id: Date.now(),
              title: this.title,
              content: this.content
            });
            this.title = '';
            this.content = '';
            this.snackbarText = 'Tarea agregada';
            this.snackbar = true;
          }
        }
      }
    },
    removeTask(id){
      this.listTasks = this.listTasks.filter(e => e.id != id);
    },
    editTask(index){
      this.form = false;
      this.title = this.listTasks[index].title;
      this.content = this.listTasks[index].content;
      this.index = index;
    },
    updateTask(){
      if ((this.title == '' || this.title == null) && (this.content == '' || this.content == null)) {
        this.snackbarText = 'Los campos estan vacios';
        this.snackbar = true;
      } else {
        if (this.title == '' || this.title == null) {
            this.snackbarText = 'El titulo esta vacio';
            this.snackbar = true;
        } else {
          if (this.content == '' || this.content == null) {
            this.snackbarText = 'La descripción esta vacia';
            this.snackbar = true;
          } else {
            this.listTasks[this.index].title = this.title;
            this.listTasks[this.index].content = this.content;
            this.title = '';
            this.content = '';
            this.form = true;
            this.snackbarText = 'Tarea editada';
            this.snackbar = true;
          }
        }
      }
    }
  }
}
</script>
