<template>
    <div class='card container d-flex justify-content-between m-3 mb-0'>
        <div v-if="store.state.updating !== id" class='row justify-content-between p-2'>
            <div class='col-3'>
                <li class="d-flex flex-column align-items-start" :key="id">
                    <h6 class='mb-0'>{{ name }}</h6>
                    <p class="mb-0">{{ gender }}</p>
                </li>
            </div>
             <div class='col-2'>
                <button type="button" class="btn btn-info mx-1" @click="store.methods.setUpdating(id)">Update</button>
                <button type="button" class="btn btn-danger" @click="$emit('remove', id)">Delete</button>
            </div>   
        </div> 
        <div v-else class='row justify-content-start p-2'>
            <div class='col-6 d-flex'>
                <div class='col-6'>
                    <input type="name" class="form-control" id="name" v-model="store.state.name" />
                </div>
                 <div class='col-6 mx-3'>
                    <input type="name" class="form-control" id="name" v-model="store.state.gender" />
                </div>
               
            </div>
             <div class='col-5'>
                <button type="button" class="btn btn-info mx-1" @click="store.methods.cancelUpdating()">Cancel</button>
                <button type="button" class="btn btn-danger" @click="$emit('remove', id)">Delete</button>
            </div>
        </div>
    </div>

</template>
<script>
import { inject } from 'vue'
export default {
    name: 'Item',
    setup(){
        return{
            store: inject('store')
        }
    },
    props: ['name', 'gender', 'id']
        }
</script>
<style scoped>
li {
    h6 {
        color: #656565
    }
   
}
.card {
    background: white !important;
}
p {
    font-size: 14px;
}
</style>