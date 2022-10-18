<template>
    <div class="card text-center p-5 mt-4">
        <ui class="container">
            <div class='row'>
                <div class='item' v-for="item in items">
                    <Item :name="item.name" :id="item.id" :gender="item.gender" @remove="$emit('remove', item.id)" />
                </div>
            </div>
        </ui>
    </div>
</template>
<script>
import Item from './Item.vue'
export default {
    name: 'List',
    props: ['items'],
    components: {
        Item
    },
    emit: ['remove']
        }
</script>

<style scoped>
aside {
    background-color: gold;
    padding: 1rem;
    text-align: center;
    min-height: calc(100vh - 160px);
}
li {
    color: blue
}
.item {
    display: flex
}
.card {
    list-style-type: none;
    background: #f7f7f7;
}
</style>