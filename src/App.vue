<template>
  <div id="app">
    <Header />
    <PlaingField />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PlaingField from "./components/PlaingField.vue";

export default {
  name: "App",
  components: {
    Header,
    PlaingField
  }
};
</script>

<style>
#app {
  /* width: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
