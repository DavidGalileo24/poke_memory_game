import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    statusCard: false,
    image: '../../public/images/8.png', 
    firstArray: [
      {
        id: 1,
        name: "Hormiga",
        statusInCard: false,
        file: "../../public/images/1.png",
      },
      {
        id: 2,
        name: "Moneda",
        statusInCard: false,
        file: "../../public/images/2.png",
      },
      {
        id: 3,
        name: "Araña",
        statusInCard: false,
        file: "../../public/images/4.png",
      },
      {
        id: 4,
        name: "Duende",
        statusInCard: false,
        file: "../../public/images/6.png",
      },
      /**
          {
            id: 5,
            name: "Duende",
            statusInCard: false,
            file: '../../public/images/5.png',
          },
          {
            id: 6,
            name: "Duende",
            statusInCard: false,
            file: '../../public/images/6.png',
          },
          {
            id: 7,
            name: "Duende",
            statusInCard: false,
            file: '../../public/images/7.png',
          },
          {
            id: 8,
            name: "Duende",
            statusInCard: false,
            file: '../../public/images/8.png',
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
    getImage(data) {
      console.log(data);
      this.defaultImage = false;
      data.statusInCard = true
      if(data.statusInCard == false) {
        this.image = this.defaultImage;
      } else { 
        this.image = data.file;
      }
    },
  },
});
