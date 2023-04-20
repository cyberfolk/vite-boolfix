<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  props: {
    products: Array,
  },
  methods: {
    isMovies(p) {
      // Distinguishing whether p is a MOVIES or a SERIES is easy
      // MOVIES  have fields called "title" and "original_title" but instead Series have fields called "name" and "original_name"
      // If "p" is a SERIES "p.title" returns "null" -> because we are accessing a field not present in that object
      return p.title ? true : false;
    },
    type(p) {
      return this.isMovies(p) ? "movie" : "tv";
    },
  },
};
</script>
<template>
  <div class="row g-3">
    <div class="col-3" v-for="p in products"><ProductItem :type="type(p)" :title="isMovies(p) ? p.title : p.name" :original="isMovies(p) ? p.original_title : p.original_name" :lang="p.original_language" :vote="p.vote_average" :poster="p.poster_path" :overview="p.overview" :id="p.id" :genre_ids="p.genre_ids" /></div>
    <!-- /.col-6 -->
  </div>
  <!-- /.row -->
</template>
