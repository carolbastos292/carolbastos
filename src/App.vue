<template>
  <v-app>
    <Navbar />
    <v-content class="wrapper-app">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/shared/nav/Navbar.vue";
import Footer from "./components/shared/footer/Footer.vue";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.wrapper-app {
  background-color: #f2f5f7;
}
</style>
