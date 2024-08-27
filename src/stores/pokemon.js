import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    statusCard: false,
    image: '../../public/images/8.png', 
    firstArray: [
      {
        id: 1,
        statusInCard: false,
        file: "../../public/images/1.png",
        defaulImage: '../../public/images/8.png', 
      },
      {
        id: 2,
        statusInCard: false,
        file: "../../public/images/2.png",
        defaulImage: '../../public/images/8.png', 
      },
      {
        id: 3,
        statusInCard: false,
        file: "../../public/images/4.png",
        defaulImage: '../../public/images/8.png', 
      },
      {
        id: 4,
        statusInCard: false,
        file: "../../public/images/6.png",
        defaulImage: '../../public/images/8.png', 
      },
      /**
          {
            id: 5,
            statusInCard: false,
            file: '../../public/images/5.png',
          },
          {
            id: 6,
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
      data.defaultImage = false;
      data.statusInCard = true
      if(data.statusInCard == false) {
        this.image = data.defaultImage;
      } else { 
        this.image = data.file;
      }
    },
  },
});
