<script>
import { state } from "../state.js";
export default {
  name: "SearchBox",
  emits: ["searchMovie"],
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <div class="ms_searchbox">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search moviess..." v-model="state.filter" />
      <button class="btn btn-outline-secondary" type="button" @click="$emit('searchMovie')">search</button>
    </div>
  </div>
</template>
