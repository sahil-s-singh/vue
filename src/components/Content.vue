<template>
    <section>
        <FormContainer @add="add" />
          <ItemList 
            :items="store.state.items"
            @remove="remove"
            />
    </section>
</template>
<script>
import FormContainer from './FormContainer.vue'
import ItemList from './ItemList.vue'
import { inject } from 'vue'
export default {
        name: 'Content',
        components: {
            FormContainer,
            ItemList
        },
        setup(){
           return {
                store: inject('store')
           }
        },
        methods:{
             async add(e){
                const { name, gender } = e;
                console.log(e, 'eeeee');
                const res = await fetch('http://localhost:8080/users/add-user', {
                    method: 'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    body: JSON.stringify({name, gender}),
                })

                this.items = [...this.items, {...e, id: this.items.length + 1}];
            },
            remove(id){
                this.store.methods.remove(id)
            }
        },
         async created(){
            const x = await fetch('http://localhost:8080/users/get-users');
            console.log(x, 'x');
            this.items = [
                {name: 'sahil singh', gender: 'male', id: 1},
                {name: 'ishit bajpai', gender: 'female', id: 2},
                {name: 'varinder brar', gender: 'trans', id: 3}
            ];
            console.log('again');
        },
         updated(){
            console.log('updated');
        }
    }
</script>
<style scoped>
    section {
        background-color: white;
        padding: 1rem;
        text-align: center;
        min-height: calc(100vh - 160px)
    }
</style>