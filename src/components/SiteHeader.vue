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
      moviesGenresSelected: "",
      seriesGenresSelected: "",
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
    toggleMoviesGenres() {
      this.isActiveMovies = false;
      this.isActiveSeries = false;
      this.isActiveSeriesGenres = false;
      this.seriesGenresSelected = "";
      this.isActiveMoviesGenres = !this.isActiveMoviesGenres;
      state.series = [];
      this.filterMovie();
    },
    toggleSeriesGenres() {
      this.isActiveMovies = false;
      this.isActiveSeries = false;
      this.isActiveMoviesGenres = false;
      this.moviesGenresSelected = "";
      this.isActiveSeriesGenres = !this.isActiveSeriesGenres;
      state.movies = [];
      this.filterSeries();
    },
    toggleMovies() {
      this.isActiveSeries = false;
      this.isActiveMoviesGenres = false;
      this.isActiveSeriesGenres = false;
      this.moviesGenresSelected = "";
      this.seriesGenresSelected = "";
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
      this.moviesGenresSelected = "";
      this.seriesGenresSelected = "";
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
    filterMovie() {
      state.movies = state.movies.filter((movie) => {
        return movie.genre_ids[0].id == this.moviesGenresSelected.id;
      });
    },
    filterSeries() {
      state.series = state.series.filter((serie) => {
        return movie.serie[0].id == this.seriesGenresSelected.id;
      });
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-beetwen px-5 py-2">
      <a class="navbar-brand" href="#">
        <img height="80" :src="getImageUrl('logo.png')" alt="logo" />
      </a>

      <!-- /.navbar-brand -->
      <button class="navbar-toggler d-lg-none bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- /.navbar-toggler -->
      <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item"><button class="btn text-white fw-bold" :class="{ active: isActiveMovies }" @click="toggleMovies()">MOVIES</button></li>
          <li class="nav-item"><button class="btn text-white fw-bold" :class="{ active: isActiveSeries }" @click="toggleSeries()">SERIES</button></li>
          <li>
            <select class="form-select border-0 bg-transparent text-white fw-bold" v-model="this.moviesGenresSelected" @change="toggleMoviesGenres()" :class="{ active: isActiveMoviesGenres }">
              <option value="" selected>MOVIES GENRES</option>
              <option v-for="genre in state.moviesGenres" :value="genre">{{ genre.name }}</option>
            </select>
          </li>
          <li>
            <select class="form-select border-0 bg-transparent text-white fw-bold" v-model="this.seriesGenresSelected" @change="toggleSeriesGenres()" :class="{ active: isActiveSeriesGenres }">
              <option value="" selected>SERIES GENRES</option>
              <option v-for="genre in state.seriesGenres" :value="genre">{{ genre.name }}</option>
            </select>
          </li>
          <li class="nav-item ps-3"><SearchBox @search="fetch()" /></li>
        </ul>
      </div>
      <!-- /#main_nav -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

nav {
  background-color: $dark !important;

  select {
    text-transform: uppercase;
    option {
      background-color: $darkless;
    }
  }
}
.active {
  color: red !important;
  border: 1px solid red !important;
}
</style>
