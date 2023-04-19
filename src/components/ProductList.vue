<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  props: {
    movies: Array,
    series: Array,
  },
};
</script>
<template>
  <div class="row">
    <div class="col-6">
      <h2>Movies</h2>
      <ul v-if="movies">
        <li v-for="movie in movies">
          <ProductItem :title="movie.title" :original="movie.original_title" :lang="movie.original_language" :vote="movie.vote_average" :poster="movie.poster_path" />
        </li>
      </ul>
    </div>
    <!-- /.col-6 -->
    <div class="col-6">
      <h2>Series</h2>
      <ul v-if="series">
        <li v-for="serie in series">
          <ProductItem :title="serie.name" :original="serie.original_name" :lang="serie.original_language" :vote="serie.vote_average" :poster="serie.poster_path" />
        </li>
      </ul>
    </div>
    <!-- /.col-6 -->
  </div>
  <!-- /.row -->
</template>
