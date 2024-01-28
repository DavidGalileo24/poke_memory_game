import { defineStore } from 'pinia'
import axios from 'axios';

export const usePokemonStore = defineStore('pokemon', {
    state: () => {
        data: []
    },
    actions: {
        async getPokemon(){
            await axios.get('/493/').then((resp) => {
                this.data = resp;
            }).catch((e) => {
                console.log(e);
            });
        }
    } 
});