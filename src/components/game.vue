<template>
  <div class="game">
    Hello game
    <button @click="$emit('on-game-over')">
      start
    </button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  setup() {}
});
</script>

<style scoped lang="scss">
.game {
  @include fullScreen();
}
</style>
