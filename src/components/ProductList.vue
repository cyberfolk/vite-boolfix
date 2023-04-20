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
    title(p) {
      return p.title ? p.title : p.name;
    },
    original_title(p) {
      return p.original_title ? p.original_title : p.original_name;
    },
  },
};
</script>
<template>
  <div class="col-6" v-for="p in products">
    <ProductItem :title="title(p)" :original="original_title(p)" :lang="p.original_language" :vote="p.vote_average" :poster="p.poster_path" :overview="p.overview" />
  </div>
  <!-- /.col-6 -->
</template>
