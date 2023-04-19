<script>
import { state } from "../state.js";
import SearchBox from "./SearchBox.vue";
import MovieList from "./MovieList.vue";
export default {
  name: "SiteMain",
  components: {
    SearchBox,
    MovieList,
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
    <MovieList :movies="state.movies" />
  </main>
</template>

<style lang="scss" scoped></style>
