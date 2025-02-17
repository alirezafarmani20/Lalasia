import { defineStore } from "pinia";
import axios from "axios";
import { baseUrl } from "./base";

export const usePopularProductStore = defineStore("usePopularProduct", {
  state: () => ({
    data: [],
    loading: true,
  }),

  getters: () => {
    showData: (state) => {
      return state.data;
    };
  },

  actions: {
    async getData() {
      // get data
      try {
        const response = await axios.get(`${baseUrl}popular-product`).then((res) => {
          this.data = res.data;
          console.log(res.data);
          this.loading = false;
        });
      } catch (err) {
        console.log(`this is a error: ${err.message}`);
        this.loading = true;
      }
    },
  },
});
