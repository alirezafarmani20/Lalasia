import { defineStore } from "pinia";
import axios from "axios";
import { baseUrl } from "./base";

export const usePopularProductStore = defineStore("usePopularProduct", {
  state: () => ({
    data: [],
    loading: true,
  }),

  getters: {
    showData: (state) => {
      return state.data;
    },
  },

  actions: {
    async getData() {
      try {
        const response = await axios.get(`${baseUrl}popular-product`);
        this.data = response.data;
        console.log(response.data);
        this.loading = false;
      } catch (err) {
        console.log(`this is an error: ${err.message}`);
        this.loading = true;
      }
    },
  },
});
