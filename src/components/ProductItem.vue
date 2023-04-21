<script>
import { state } from "../state.js";
import axios from "axios";
import LangFlag from "vue-lang-code-flags";
import lang_db from "../data/lang.json";

export default {
  name: "ProductItem",
  components: { LangFlag },

  data() {
    return {
      state,
      cast: [],
    };
  },

  props: {
    title: String,
    original: String,
    lang: String,
    vote: Number,
    poster: String,
    overview: String,
    type: String,
    id: Number,
    genre_ids: Array,
  },

  methods: {
    // If lang is inclued in lang.notSupported -> supported() return false
    supported(lang) {
      return !lang_db.notSupported.includes(lang);
    },

    //Builds the full path where the poster is located
    srcPath(endPath) {
      return `https://image.tmdb.org/t/p/w342/${endPath}`;
    },

    // Return the number of star, from 1 to 5, corresponding to the vote
    fillStars(vote) {
      vote = vote ? vote : 0; // put to zero if vote is null
      return Math.round(vote / 2);
    },

    //Return the number of void star, complementair to 5
    emptyStars(vote) {
      return 5 - this.fillStars(vote);
    },

    getCast() {
      const url = state.API_URL_BASE + this.type + "/" + this.id + "/credits?" + state.API_URL_KEY;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          this.cast = response.data.cast;
        })
        .catch((err) => {
          console.log(err);
          console.error(err.message);
        });
    },

    // Return the name from genre's id
    toGenre(genre_id) {
      let genres = this.getGenres(this.type);
      const genre = genres.find((genre) => genre.id === genre_id).name;
      return genre;
    },

    // Return the list of genres by product type
    getGenres(type) {
      if (type == "movie") {
        return state.moviesGenres;
      } else {
        return state.seriesGenres;
      }
    },
  },

  created() {
    this.getCast();
  },
};
</script>
<template>
  <div class="card">
    <img v-if="poster" :src="srcPath(poster)" class="card-img" :alt="title" />
    <div class="card-body h-100 w-100">
      <h5 class="card-title">{{ title }}</h5>
      <!-- /.ms_title -->
      <p class="card-text">{{ original }}</p>
      <!-- /.ms_original -->
      <div class="ms_lang">
        <span v-if="supported(lang)"><LangFlag :iso="lang" /></span>
        <span v-else>{{ lang }} - not supported</span>
      </div>
      <!-- /.ms_lang -->
      <div class="ms_vote">
        <span v-for="n in fillStars(vote)" class="fa-solid fa-star"></span>
        <span v-for="n in emptyStars(vote)" class="fa-regular fa-star"></span>
      </div>
      <!-- /.ms_vote -->
      <p class="card-text ms_overview">{{ overview }}</p>
      <!-- /.ms_overview -->
      <div class="ms_actor">
        <span class="ms_title fw-bold">Actors: </span>
        <span class="ms_list" v-for="actor in cast.slice(0, 5)">{{ actor.original_name }}</span>
      </div>
      <!-- /.ms_actor -->
      <div class="ms_genres">
        <span class="ms_title fw-bold">Genres: </span>
        <span class="ms_list" v-for="genre_id in genre_ids">{{ toGenre(genre_id) }}</span>
      </div>
      <!-- /.ms_genres -->
    </div>
    <!-- /.body -->
  </div>
  <!-- /.card -->
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  aspect-ratio: 0.66;
  .card-img {
    position: relative;
    z-index: 2;
    height: 100%;
    object-fit: cover;
  }
  .card-body {
    position: absolute;
    background-color: white;
    z-index: 1;
    .ms_overview {
      font-style: italic;
      font-size: 0.8rem;
    }
    .ms_list:after {
      content: ", ";
    }
    .ms_list:last-child:after {
      content: none;
    }
  }
}

.card:hover .card-img {
  display: none;
}
</style>
