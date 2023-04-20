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
};
</script>

<template>
  <main>
    <div class="row g-3">
      <ProductList :products="shuffle(state.movies, state.series)" />
    </div>
    <!-- /.row -->
  </main>
</template>

<style lang="scss" scoped></style>
