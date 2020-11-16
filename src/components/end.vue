<template>
  <div class="end">
    Hello end
    <button @click="$emit('on-reset')">
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
.end {
  @include fullScreen();
}
</style>
