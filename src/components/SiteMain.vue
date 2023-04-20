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
};
</script>

<template>
  <main>
    <div class="row">
      <div class="col-6 border bg-primary">
        <div class="ms_movies px-3">
          <h2 class="py-3 text-center">Movies</h2>
          <ProductList :products="state.movies" />
        </div>
        <!-- /.ms_movies -->
      </div>

      <!-- /.col-6 -->
      <div class="col-6 border bg-warning">
        <div class="ms_series px-3">
          <h2 class="py-3 text-center">Series</h2>
          <ProductList :products="state.series" />
        </div>
        <!-- /.ms_series -->
      </div>
      <!-- /.col-6 -->
    </div>
    <!-- /.row -->
  </main>
</template>

<style lang="scss" scoped></style>
