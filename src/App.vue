<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>

<template>
  <div class="container">
    <SiteHeader></SiteHeader>
    <SiteMain></SiteMain>
    <SiteFooter></SiteFooter>
  </div>
  <!-- /.container -->
</template>

<style lang="scss" scoped></style>
