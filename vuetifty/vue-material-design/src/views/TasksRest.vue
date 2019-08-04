<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <p v-if="voidValues">No hay tareas.</p>
        <v-card v-else v-for="(listTask, index) of listTasks" :key="index" class="mb-3">
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
</template>

<script>
import axios from 'axios';

export default {
  name: 'TasksRest',
  data: ()=>({
    url: 'http://localhost:8000/api/',
    listTasks: [],
    title: '',
    content: '',
    index: '',
    id: '',
    snackbar: false,
    snackbarText: '',
    form: true,
    loading: {
      state: false,
      title: 'Accediendo a la información' 
    },
    voidValues: false
  }),
  methods: {
    async getAllTasks(){
      this.loading.state = true;
      let data = await axios.get(this.url + 'tasks');
      if(data.data.length > 0){
        this.listTasks = data.data;
        // await data.data.forEach(e => {
        //   this.listTasks.push(e);
        // });
        this.voidValues = false
      }else {
        this.voidValues = true
        console.log('no hay datos');
      }
      this.loading.state = false;
    },
    async addTask(){
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
            await axios.post(this.url + 'addTask', {
              title: this.title,
              content: this.content
            })
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
            this.getAllTasks();
            this.title = '';
            this.content = '';
            this.snackbarText = 'Task added successfully';
            this.snackbar = true;
          }
        }
      }
    },
    async removeTask(id){
      let message = 'nel ppro :v';
      await axios.get(this.url + 'removeTask/' + id)
      .then(function (response) {
        console.log(response.data);
        message = response.data.message;
      })
      .catch(function (error) {
        console.log(error);
        message = 'eror al eliminar la tarea';
      });
      this.snackbarText = message;
      this.snackbar = true;
      // this.getAllTasks();
      this.listTasks = this.listTasks.filter(e => e.id != id);
      if(this.listTasks.length < 1){
        this.voidValues = true
      }
    },
    editTask(index){
      this.form = false;
      this.title = this.listTasks[index].title;
      this.content = this.listTasks[index].content;
      this.index = index;
      this.id = this.listTasks[index].id;
    },
    async updateTask(){
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
            await axios.post(this.url + 'updateTask/' + this.id, {
              title: this.title,
              content: this.content
            })
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
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
  },
  created() {
    this.getAllTasks();
  }
}
</script>
