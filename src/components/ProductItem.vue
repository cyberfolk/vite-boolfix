<script>
import LangFlag from "vue-lang-code-flags";
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
};
</script>
<template>
  <div>{{ title }}</div>
  <div>{{ original }}</div>
  <div>
    <span><LangFlag :iso="lang" /></span>
  </div>
  <div>{{ vote }}</div>
</template>
