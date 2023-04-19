<script>
import LangFlag from "vue-lang-code-flags";
export default {
  name: "MovieList",
  components: {
    LangFlag,
  },
  props: {
    movies: Object,
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
  <ul v-if="movies">
    <li v-for="movie in movies">
      <div>{{ movie.title }}</div>
      <div>{{ movie.original_title }}</div>
      <div>
        <span><LangFlag :iso="movie.original_language" /></span>
        <span>{{ langFix(movie.original_language) }}</span>
      </div>
      <div>{{ movie.vote_average }}</div>
    </li>
  </ul>
</template>
