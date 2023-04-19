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
  methods: {
    langFix(lang) {
      let fix = lang;
      const noSupport = " - Not ISO supported - ";
      switch (lang) {
        case "sv":
          fix += noSupport + "svedish";
          break;
        case "bs":
          fix += noSupport;
          break;
        case "id":
          fix += noSupport;
          break;
        case "ml":
          fix += noSupport + "Malayalam";
          break;
        case "kn":
          fix += noSupport;
          break;
        case "nl":
          fix += noSupport + "olandese";
          break;
        case "el":
          fix += noSupport;
          break;
        case "sh":
          fix += noSupport + "Serbo-Croatian";
          break;
        case "cn":
          fix += noSupport;
          break;
      }
      return fix;
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col-6">
      <h2>Movies</h2>
      <ul v-if="movies">
        <li v-for="movie in movies">
          <ProductItem :title="movie.title" :original="movie.original_title" :lang="movie.original_language" :vote="movie.vote_average" />
        </li>
      </ul>
    </div>
    <!-- /.col-6 -->
    <div class="col-6">
      <h2>Series</h2>
      <ul v-if="series">
        <li v-for="serie in series">
          <ProductItem :title="serie.name" :original="serie.original_name" :lang="serie.original_language" :vote="serie.vote_average" />
        </li>
      </ul>
    </div>
    <!-- /.col-6 -->
  </div>
  <!-- /.row -->
</template>
