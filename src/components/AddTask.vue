<template>
  <form @submit.prevent="submit">
      <input v-model="text" />
      <input v-model="day"/>
      <input type="checkbox" v-model="reminder" name="reminder" />
      <button>Save Task</button>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    }
  },
  methods: {
    submit(e) {

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }
      this.$emit('add-task', newTask)
    },
  },
}
</script>

