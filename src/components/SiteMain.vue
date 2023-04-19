<script>
import { state } from "../state.js";
import SearchBox from "./SearchBox.vue";
import ProductList from "./ProductList.vue";
export default {
  name: "SiteMain",
  components: {
    SearchBox,
    ProductList,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <main>
    <SearchBox @searchMovie="state.fetchMovies(state.API_URL_MOVIE, state.filter), state.fetchSeries(state.API_URL_SERIE, state.filter)" />
    <ProductList :movies="state.movies" :series="state.series" />
  </main>
</template>

<style lang="scss" scoped></style>
