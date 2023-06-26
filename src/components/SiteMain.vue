<script>
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
    unify(array1, array2) {
      return array1.concat(array2);
    },
    //NOT USED
    shuffle(array) {
      let i = array.length; // i: current index
      let r; // r:  random index

      while (i != 0) {
        // While there remain elements to shuffle.
        r = Math.floor(Math.random() * i); // Pick a remaining element.
        i--;
        [array[i], array[r]] = [array[r], array[i]]; // Swap current element with ranndom element. Destructuring assignment
      }
      return unity;
    },
  },
  mounted() {
    state.fetchSeriesGenres();
    state.fetchMoviesGenres();
  },
};
</script>

<template>
  <main class="m-5">
    <ProductList :products="unify(state.movies, state.series)" />
  </main>
</template>

<style lang="scss" scoped></style>
