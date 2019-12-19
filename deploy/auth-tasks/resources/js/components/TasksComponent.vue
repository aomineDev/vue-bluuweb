<template>
  <div>
    <h3>{{ title }}</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="task.name"
        >
      </div>
      <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            class="form-control"
            v-model="task.description"
          >
      </div>
      <button
        class="btn btn-primary"
      >
        {{ create ? 'Add' : 'Update' }}
      </button>
      <button
        type="button"
        v-show="!create"
        class="btn btn-danger"
        @click="cancelEdit"
      >
        Cancel
      </button>
    </form>

    <hr class="my-3">

    <h2>Tasks</h2>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(task, index) in tasks"
      >
        <span class="badge badge-primary float-right mt-2">
          {{ task.updated_at }}
        </span>
        <h3>{{ index + 1 }}. {{ task.name }}</h3>
        <p>{{ task.description }}</p>
        <div class="d-flex justify-content-around">
          <button
            class="btn btn-success px-4"
            @click="editTask(task, index)"
          >
            +
          </button>
          <button
             class="btn btn-danger px-4"
             @click="removeTask(task.id, index)"
          >
            -
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Add Task',
    create: true,
    tasks: [],
    task: {
      index: '',
      id: '',
      name: '',
      description: ''
    },
  }),
  watch: {
    create (value) {
      if (value) this.title = 'Add Task'
    else this.title = 'Edit Task'
    }
  },
  created () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const { data } = await axios.get('/tasks')
      this.tasks = data
    },
    handleSubmit () {
      if (this.task.name.trim() === '' ||this.task.description.trim() === '') {
        alert('empty fields detected.')
        return
      }

      const task = {
        name: this.task.name,
        description: this.task.description
      }

      this.cleanFields()

      if (this.create) this.createTask(task)
      else  this.updateTask(task)
    },
    async createTask (task) {
      const { data } = await axios.post('/tasks', task)

      this.tasks.push(data)
    },
    async updateTask (task) {
        const index = this.task.index
        const id = this.task.id
        this.tasks[index].name = task.name
        this.tasks[index].description = task.description
        this.create = true
        const { data: { updated_at } } = await axios.put(`/tasks/${id}`, task)
        this.tasks[index].updated_at = updated_at
    },
    editTask (task, index) {
      this.create = false
      this.task.index = index
      this.task.id = task.id
      this.task.name = task.name
      this.task.description = task.description
    },
    cancelEdit () {
      this.task.index = null
      this.cleanFields()
      this.create = true
    },
    removeTask (id, index) {
      this.tasks.splice(index, 1)

      axios.delete(`/tasks/${id}`)
    },
    // Utils
    cleanFields () {
      this.task.name = ''
      this.task.description = ''
    }
  }
}
</script>
