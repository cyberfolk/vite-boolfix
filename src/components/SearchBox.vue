<script>
import { state } from "../state.js";
export default {
  name: "SearchBox",
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <div class="searchbox">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search moviess..." v-model="state.filter" @keyup="$emit('searchMovie')" />
    </div>
  </div>
</template>
