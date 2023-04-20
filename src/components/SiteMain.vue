<script>
import { store } from "../../../../l-55-vite-store/vite-yu-gi-oh/src/store";
import { state } from "../state.js";
import ProductList from "./ProductList.vue";
export default {
  name: "SiteMain",
  components: {
    ProductList,
  },
  data() {
    return {
      state,
    };
  },
  methods: {
    shuffle(array1, array2) {
      const unity = array1.concat(array2);
      let i = unity.length; // i: current index
      let r; // r:  random index

      while (i != 0) {
        // While there remain elements to shuffle.
        r = Math.floor(Math.random() * i); // Pick a remaining element.
        i--;
        [unity[i], unity[r]] = [unity[r], unity[i]]; // Swap current element with ranndom element. Destructuring assignment
      }
      return unity;
    },
  },
  mounted() {
    state.getSeriesGenres();
    state.getMoviesGenres();
  },
};
</script>

<template>
  <main>
    <ProductList :products="shuffle(state.movies, state.series)" />
  </main>
</template>

<style lang="scss" scoped></style>
