import { defineStore } from 'pinia'
import axios from 'axios';

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        data: [],
        active: false,
    }),
    actions: {
        async getAllPokemon(){
            await axios.get('/pokemon?limit=10').then((resp) => {
                this.data = resp.data.results;
                console.log(this.data);
            }).catch((e) => {
                console.log(e);
            });
        },
        activeCard(status){
            console.log(status)
            this.active = status;
        }
    }
});