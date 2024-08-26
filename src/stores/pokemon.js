import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    statusCard: false,
    firstArray: [
      {
        id: 1,
        name: "Hormiga",
        file: "../../public/images/1.png",
      },
      {
        id: 2,
        name: "Moneda",
        file: "../../public/images/2.png",
      },
      {
        id: 3,
        name: "Araña",
        file: "../../public/images/4.png",
      },
      {
        id: 4,
        name: "Duende",
        file: "../../public/images/6.png",
      },
      /**
          {
            id: 5,
            file: '../../public/images/5.png'
          },
          {
            id: 6,
            file: '../../public/images/6.png'
          },
          {
            id: 7,
            file: '../../public/images/7.png'
          },
          {
            id: 8,
            file: '../../public/images/8.png'
          }, */
    ],
  }),
  actions: {
    /** async getAllPokemon(){
            await axios.get('/pokemon').then((resp) => {
                this.data = resp.data;
            }).catch((e) => {
                console.log(e);
            });
        } */
    getImage(id) {
      console.log(id);
      this.statusCard = true;
    },
  },
});
