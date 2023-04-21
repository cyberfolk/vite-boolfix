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
      isActiveMovies: false,
      isActiveSeries: false,
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
    toggleMovies() {
      this.isActiveSeries = false;
      this.isActiveMovies = !this.isActiveMovies;
    },
    toggleSeries() {
      this.isActiveMovies = false;
      this.isActiveSeries = !this.isActiveSeries;
    },
    fetch() {
      if (this.isActiveMovies) {
        state.fetchMovies();
        state.series = null;
        return;
      }
      if (this.isActiveSeries) {
        state.fetchSeries();
        state.movies = null;
        return;
      }
      if (!this.isActiveSeries && !this.isActiveMovies) {
        state.fetchSeries();
        state.fetchMovies();
        return;
      }
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-beetwen px-3">
      <a class="navbar-brand" href="#">
        <img height="80" src="../assets/image/logo.png" alt="logo" />
      </a>

      <!-- /.navbar-brand -->
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- /.navbar-toggler -->
      <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item"><button class="btn" :class="{ active: isActiveMovies }" @click="toggleMovies()">MOVIES</button></li>
          <li class="nav-item"><button class="btn" :class="{ active: isActiveSeries }" @click="toggleSeries()">SERIES</button></li>
          <li class="nav-item"><button class="btn">GENRES</button></li>
          <li class="nav-item"><SearchBox @search="fetch()" /></li>
        </ul>
      </div>
      <!-- /#main_nav -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>
