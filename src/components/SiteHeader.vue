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
      isActiveMoviesGenres: false,
      isActiveSeriesGenres: false,
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
    toggleMoviesGenres() {
      (this.isActiveMovies = false), (this.isActiveSeries = false), (this.isActiveSeriesGenres = false);
      this.isActiveMoviesGenres = !this.isActiveMoviesGenres;
    },
    toggleSeriesGenres() {
      (this.isActiveMovies = false), (this.isActiveSeries = false), (this.isActiveMoviesGenres = false);
      this.isActiveSeriesGenres = !this.isActiveSeriesGenres;
    },
    toggleMovies() {
      this.isActiveSeries = false;
      this.isActiveMoviesGenres = false;
      this.isActiveSeriesGenres = false;
      state.series = [];
      this.isActiveMovies = !this.isActiveMovies;
      if (this.isActiveMovies) {
        state.fetchMovies();
      } else {
        state.fetchSeries();
      }
    },
    toggleSeries() {
      this.isActiveMovies = false;
      this.isActiveMoviesGenres = false;
      this.isActiveSeriesGenres = false;
      state.movies = [];
      this.isActiveSeries = !this.isActiveSeries;
      if (this.isActiveSeries) {
        state.fetchSeries();
      } else {
        state.fetchMovies();
      }
    },
    fetch() {
      if (this.isActiveMovies) {
        state.fetchMovies();
        return;
      }
      if (this.isActiveSeries) {
        state.fetchSeries();
        return;
      }
      if (!this.isActiveSeries && !this.isActiveMovies) {
        state.fetchSeries();
        state.fetchMovies();
        return;
      }
    },
    filterMovie(genre) {
      console.log("ciao");
      console.log(state.movies);
      /*       state.movies = state.movies.filter((movie) => {
        console.log(movie.genre_ids);
        //console.log(genre.id);

        return true; //movie.genre_ids[0].id == genre.id;
      });
      state.series = [];
      state.fetchMovies(); */
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-beetwen px-3">
      <a class="navbar-brand" href="#">
        <img height="80" :src="getImageUrl('logo.png')" alt="logo" />
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
          <li>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ active: isActiveSeriesGenres }" @click="toggleSeriesGenres()">TV GENRES</button>
              <ul class="dropdown-menu">
                <li v-for="genre in state.seriesGenres">
                  <a class="dropdown-item" href="#">{{ genre.name }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ active: isActiveMoviesGenres }" @click="toggleMoviesGenres()">MOVIE GENRES</button>
              <ul class="dropdown-menu">
                <li v-for="genre in state.moviesGenres" @click="filterMovie(genre)">
                  <a class="dropdown-item" href="#">{{ genre.name }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item ps-2"><SearchBox @search="fetch()" /></li>
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
