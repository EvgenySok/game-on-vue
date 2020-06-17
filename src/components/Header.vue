<template>
  <div class="header" v-bind:style="{height: heightScreen/6 + 'px' }">
    <img src="../assets/logo.png" alt="vue" />
    <div>
      <input type="checkbox" v-bind:checked="isDifficult" v-on:click="changeIsDifficult" />
      <span>Difficult</span>
      <div>{{getTimeDelay+'ms'}}</div>
    </div>
    <div>
      <p>heightScreen:{{heightScreen}}</p>
      <p>withScreen:{{withScreen}}</p>
      <p class="success">{{getSuccess}}</p>
    </div>
    <div>
      <p>enter only numbers</p>
      <p>
        <input type="text" placeholder="number of columns" v-on:input="setX" v-bind:value="getX" />
        {{getX}}
      </p>
      <p>
        <input type="text" placeholder="number of rows" v-on:input="setY" v-bind:value="getY" />
        {{getY}}
      </p>
    </div>
    <button v-on:click.stop="start">Start</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: mapGetters([
    "isDifficult",
    "heightScreen",
    "getTimeDelay",
    "withScreen",
    "getSuccess",
    "isGame",
    "getX",
    "getY"
  ]),
  methods: {
    ...mapActions(["startsGame"]),
    ...mapMutations([
      "createCurrentField",
      "changeIsDifficult",
      "setHeightScreen",
      "setWithScreen",
      "setX",
      "setY"
    ]),
    start() {
      const field = new Array(this.getX * this.getY)
        .fill("")
        .map((it, id) => ({ color: "gray", id: id }));
      this.createCurrentField(field);
      this.startsGame();
    }
  },
  mounted() {
    this.setHeightScreen();
    this.setWithScreen();
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid burlywood;
  border-radius: 3px;
}

.bg {
  background: rgb(87, 84, 84);
  /* height: auto; */
}
.success{
  font-weight: bold;
}
</style>