<template>
  <header class="header">
    <v-container class="container">
      <h1 class="header-title">
        <router-link to="#">Carol Bastos</router-link>
      </h1>

      <nav class="header-nav">
        <router-link class="header-nav-link" to="#">Sobre mim</router-link>
        <router-link class="header-nav-link" to="#">Serviços</router-link>
        <router-link class="header-nav-link" to="#">Experiência</router-link>
        <router-link class="header-nav-link" to="#">Skills</router-link>
        <router-link class="header-nav-link" to="#">Portfólio</router-link>
        <router-link class="header-nav-link" to="#">Contato</router-link>
      </nav>
    </v-container>
  </header>
</template>
<style lang="scss" scoped>
.header {
  background-color: white;
  .container {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
.header-nav {
  display: flex;
  width: auto;
}
.header-nav-link {
  width: auto;
  margin: 0 0 0 2rem;
  text-decoration: none;
  color: inherit;
}
</style>
