import { defineStore } from "pinia";
import axios from "axios";
// set base urls
const baseUrl = "http://localhost:3000/";

export const useBenefitsStore = defineStore("useBenefits", {
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
      // get data
      try {
        const response = await axios.get(`${baseUrl}`).then((res) => {
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
