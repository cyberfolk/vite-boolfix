<script>
import { state } from "../state.js";
import SearchBox from "./SearchBox.vue";
export default {
  name: "SiteHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <header class="d-flex justify-content-between align-items-center">
    <h1>Boolfix</h1>
    <SearchBox @searchMovie="state.fetchMovies(state.API_URL_MOVIE, state.filter), state.fetchSeries(state.API_URL_SERIE, state.filter)" />
  </header>
</template>
<style lang="scss" scoped></style>
