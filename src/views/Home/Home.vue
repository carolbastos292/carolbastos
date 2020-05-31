<template>
  <main>
    <v-container class="wrapper">
      <Banner class="wrapper_banner" />
    </v-container>
  </main>
</template>

<script>
import Banner from "../../components/banner/Banner.vue";
export default {
  name: "Home",
  components: {
    Banner,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.wrapper {
  /* @include debug; */
}
.wrapper_banner {
  margin: 0 auto;
  text-align: center;
}
</style>
