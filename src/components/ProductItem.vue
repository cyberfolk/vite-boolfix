<script>
import { state } from "../state.js";
import axios from "axios";
import LangFlag from "vue-lang-code-flags";
import lang_db from "../data/lang.json";
export default {
  name: "ProductItem",
  components: {
    LangFlag,
  },
  data() {
    return {
      state,
      API_URL_CREDITS: "/credits?",
      cast: [],
      genres: [],
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
    supported(lang) {
      return !lang_db.notSupported.includes(lang);
    },
    srcPath(endPath) {
      //console.log(endPath);
      return `https://image.tmdb.org/t/p/w342/${endPath}`;
    },
    fillStars(vote) {
      vote = vote ? vote : 0; // put to zero if vote is null
      return Math.round(vote / 2);
    },
    emptyStars(vote) {
      return 5 - this.fillStars(vote);
    },
    getCrew() {
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
  },
  created() {
    this.getCrew();
  },
};
</script>
<template>
  <div class="card">
    <img v-if="poster" :src="srcPath(poster)" class="card-img" :alt="title" />
    <div class="card-body h-100 w-100">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ original }}</p>
      <div>
        <span v-if="supported(lang)"><LangFlag :iso="lang" /></span>
        <span v-else>{{ lang }} - not supported</span>
      </div>
      <div>
        <span v-for="n in fillStars(vote)" class="fa-solid fa-star"></span>
        <span v-for="n in emptyStars(vote)" class="fa-regular fa-star"></span>
      </div>
      <p class="card-text ms_overview">{{ overview }}</p>
      <div>type: {{ type }}</div>
      <div>id: {{ id }}</div>
      <div>id: {{ id }}</div>
      <div v-for="actor in cast.slice(0, 5)">
        {{ actor.original_name }}
      </div>
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
  }
  .ms_overview {
    font-style: italic;
    font-size: 0.8rem;
  }
}

.card:hover .card-img {
  display: none;
}
</style>
