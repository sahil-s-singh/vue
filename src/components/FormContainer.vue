<template>
    <div class="card text-center p-5">
        <form clas="container" @submit.prevent="submit">
            <div class="row">
                <div class="col input-col">
                    <label for="name" class="form-label mb-0">Name</label>
                    <input type="name" class="form-control" id="name" v-model="store.state.name" />
                </div>
                <div class="col input-col">
                    <label for="gneder" class="form-label mb-0">Gender</label>
                    <select class="form-select" v-model="store.state.gender">
                        <option selected>Open this select menu</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="trans">Trans</option>
                    </select>
                </div>
                 <div class="d-flex justify-content-center col align-items-end">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            
        </form>
    </div>
</template>
<script>
import { inject } from 'vue';
export default {
    setup(){
        return {
            store: inject('store')
        }
    },
    data() {
        return {
            name: '',
            gender: ''
        }
    },
    methods: {
        submit(e){
            const { name, gender } = this;
            const x = { name, gender }
           this.store.methods.add();
        }
    }
} 
</script>
<style scoped>
    p {
        color: black
    }
    aside {
        background-color: gold;
        padding: 1rem;
        text-align: center;
        min-height: calc(100vh - 160px)
    }
    .card {
        background: #f7f7f7;
    }
    .input-col { 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>