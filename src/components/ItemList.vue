<template>
    <ui>
        <div v-for="item in items">
            <li :key="item.id">{{ item.text }}</li>
        </div>
    </ui>
</template>
<script>
export default {
  name: 'ItemList',
  props: ['items'],
}
</script>
