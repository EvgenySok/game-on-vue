<template>
  <div>
    <div
      class="plaingField"
      v-bind:style="{
      height: getY * sizeMinElement + 'px', 
      width: getX * sizeMinElement + 'px' 
      }"
    >
      <div class="boxForMimElements" v-if="isGame">
        <MinElement
          v-for="minElement in getCurrentField"
          v-bind:key="minElement.id"
          v-bind:minElement="minElement"
        />
      </div>
    </div>
    <div
      v-if="!getY"
      class="discription"
    >Enter the number of rows and columns. Press the start and have time to click on the yellow squares. You have one second (in simple mode). The game lasts until the middle of the opened fields.</div>
  </div>
</template>

<script>
import MinElement from "./MinElement";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters([
    "getCurrentField",
    "sizeMinElement",
    "heightScreen",
    "withScreen",
    "isGame",
    "getX",
    "getY"
  ]),
  components: {
    MinElement
  }
};
</script>

<style scoped>
.plaingField {
  margin: auto;
  background: rgb(228, 164, 164);
}
.boxForMimElements {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: 1px solid green;
}
.discription {
  width: 600px;
  padding: 30px;
  border: 1px solid #a8b3b5;
  border-radius: 3px;
  margin: 100px auto;
}
</style>