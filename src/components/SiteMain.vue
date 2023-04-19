<script>
import { state } from "../state.js";
import SearchBox from "./SearchBox.vue";
export default {
  name: "SiteMain",
  components: {
    SearchBox,
  },
  data() {
    return {
      state,
    };
  },
  mounted() {
    state.fetchMovies(state.API_URL_MOVIE);
  },
};
</script>

<template>
  <main>
    <SearchBox @searchMovie="state.fetchMovies(state.API_URL_MOVIE, state.filter)" />
  </main>
</template>

<style lang="scss" scoped></style>
