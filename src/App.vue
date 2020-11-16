<template>
  <section>
    <Start v-show="nowStatus === start" @onStart="changeStatus(game)" />
    <Game v-show="nowStatus === game" @onGameOver="changeStatus(end)" />
    <End v-show="nowStatus === end" @onReset="changeStatus(start)" />
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import Start from "@/components/start.vue";
import Game from "@/components/game.vue";
import End from "@/components/end.vue";

export default defineComponent({
  name: "App",
  components: {
    Start,
    Game,
    End
  },
  setup() {
    const StatusMap = {
      start: "start",
      game: "game",
      end: "end"
    };
    const { start, game, end } = StatusMap;

    const nowStatus = ref(start);

    function changeStatus(status) {
      nowStatus.value = status;
    }

    return {
      StatusMap,
      changeStatus,
      nowStatus,
      start,
      game,
      end
    };
  }
});
</script>

<style lang="scss">
body,
html {
  @include fullScreen();
  margin: 0;
  background-color: $orange;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  @include fullScreen();
}

section {
  width: 1280px;
  height: 800px;
}
</style>
