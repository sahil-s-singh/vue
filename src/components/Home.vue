<template>
  <AddTask @add-task="addTask" />
  <ItemList
    :items="items"
  />
</template>
<script>
import ItemList from '../components/ItemList'
import AddTask from '../components/AddTask'
export default {
  name: 'Home',
  components: {
    ItemList,
    AddTask,
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
     addTask(task) {
      this.items = [...this.items, task]
    },
  },
   created() {
    this.items = []
  },
}
</script>
