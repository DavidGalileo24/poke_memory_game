import { defineStore } from 'pinia'
import axios from 'axios';

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        data: [],
        active: false,
        id: Math.floor(Math.random() * 1000) + 1,
        limit: 1000,
    }),
    actions: {
        async getAllPokemon(){
            await axios.get('/pokemon?limit='+this.limit).then((resp) => {
                this.data = resp.data.results;
            }).catch((e) => {
                console.log(e);
            });
        },
        activeCard(status){
            console.log(status)
            this.active = status;
        },
        getUrlPokemon(){
            
        }
    }
});