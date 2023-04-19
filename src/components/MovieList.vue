<script>
export default {
  name: "MovieList",
  props: {
    movies: Object,
  },
};
</script>
<template>
  <ul v-if="movies">
    <li v-for="movie in movies">
      <div>{{ movie.title }}</div>
      <div>{{ movie.original_title }}</div>
      <div>{{ movie.original_language }}</div>
      <div>{{ movie.vote_average }}</div>
    </li>
  </ul>
</template>
