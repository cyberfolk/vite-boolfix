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
  },
  methods: {
    supported(lang) {
      return !lang_db.notSupported.includes(lang);
    },
  },
};
</script>
<template>
  <div>{{ title }}</div>
  <div>{{ original }}</div>
  <div>
    <span v-if="supported(lang)"><LangFlag :iso="lang" /></span>
    <span v-else>{{ lang }} - not supported</span>
  </div>
  <div>{{ vote }}</div>
</template>
