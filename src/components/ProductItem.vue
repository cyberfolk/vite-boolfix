<script>
import LangFlag from "vue-lang-code-flags";
import lang_db from "../data/lang.json";
export default {
  name: "ProductItem",
  components: {
    LangFlag,
  },
  props: {
    title: String,
    original: String,
    lang: String,
    vote: Number,
    poster: String,
  },
  methods: {
    supported(lang) {
      return !lang_db.notSupported.includes(lang);
    },
    srcPath(endPath) {
      return `https://image.tmdb.org/t/p/w342/${endPath}`;
    },
  },
};
</script>
<template>
  <div class="card h-100">
    <img :src="srcPath(poster)" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ original }}</p>
      <div>
        <span v-if="supported(lang)"><LangFlag :iso="lang" /></span>
        <span v-else>{{ lang }} - not supported</span>
      </div>
      <div>{{ vote }}</div>
    </div>
    <!-- /.body -->
  </div>
  <!-- /.card -->
</template>
