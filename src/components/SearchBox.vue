<script>
import { state } from "../state.js";
export default {
  name: "SearchBox",
  emits: ["search"],
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
      <input type="text" class="form-control bg-white" placeholder="Search moviess..." v-model="state.filter" />
      <button class="btn btn-outline-secondary" type="button" @click="$emit('search')"><i class="fa-solid fa-magnifying-glass text-white"></i></button>
    </div>
  </div>
</template>
