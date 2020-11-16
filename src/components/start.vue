<template>
  <div class="start">
    Hello start
    <button @click="$emit('on-start')">
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
.start {
  @include fullScreen();
}
</style>
