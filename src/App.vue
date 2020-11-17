<template>
  <section>
    <Start v-if="nowStatus === start" @onStart="changeStatus(game)" />
    <Game
      v-if="nowStatus === game"
      @onGameOver="changeStatus(end)"
      @onCalculation="handleCalculation"
    />
    <End
      v-if="nowStatus === end"
      :score="formatScore(score)"
      @onReset="changeStatus(start)"
    />
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
    const score = ref(0);
    const nowStatus = ref(start);

    function changeStatus(status) {
      nowStatus.value = status;
    }

    function handleCalculation(number) {
      if (score.value < 0) return;
      score.value = score.value + number;
    }

    function formatScore(score) {
      return score > 0 ? score : 0;
    }

    return {
      StatusMap,
      changeStatus,
      nowStatus,
      start,
      game,
      end,
      score,
      handleCalculation,
      formatScore
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
p {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @include flexCenter();
  @include fullScreen();
}

section {
  width: 1280px;
  height: 800px;
}
</style>
