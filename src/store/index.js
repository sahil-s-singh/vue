import { reactive } from "vue";

const state = reactive({
    name: '',
    gender: '',
    items: [],
    updating: null
});

const methods = {
    add() {
        const { name, gender } = state;
        state.items = [...state.items, { name, gender, id: state.items.length+1 }];
        state.name = '';
        state.gender = '';
        console.log('state', state)
    },
    remove(id) {
       state.items = state.items.filter((e)=>e.id !== id); 
    },
    setUpdating(id){
        const { name, gender } = state.items.filter((e)=> e.id === id)[0];
        state.updating = id;
        state.name = name;
        state.gender = gender;
        console.log(state, 'idddddd')
    },
    cancelUpdating(){
       state.name = '';
       state.gender = '';
       state.updating = null;
    }
}

export default {
    state,
    methods
}