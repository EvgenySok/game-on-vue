<template>
  <div
    class="minElement"
    v-bind:style="{
      background: minElement.color, 
      width: sizeMinElement -2 + 'px',
      height: sizeMinElement -2 + 'px',
      }"
    v-bind:id="minElement.id"
    v-on:click.stop="clickSuccess"
  />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    minElement: {
      type: Object
    }
  },
  computed: mapGetters(["sizeMinElement"]),
  methods: {
    clickSuccess(event) {
      if (event.currentTarget.style.background === "orange") {
        this.minElement.color = "green";
      }
    }
  }
};
</script>

<style scoped>
.minElement {
  border: 1px solid rgb(56, 56, 56);
}
</style>