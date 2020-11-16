<template>
  <div class="end">
    <div class="end__sub-title">60 SECONDS CHALLENGE</div>
    <div class="end__final-score">
      <span>—</span> YOUR FINAL SCORE <span>—</span>
    </div>
    <p class="end__score">74</p>
    <Button @onClick="$emit('on-reset')">
      TRY AGAIN!
    </Button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Button from "@/components/button";
export default defineComponent({
  components: {
    Button
  },
  props: {},
  setup() {}
});
</script>

<style scoped lang="scss">
.end {
  @include fullScreen();
  @include flexCenter();
  flex-direction: column;
  &__sub-title {
    font-weight: 600;
    font-size: 30px;
    border: 4px solid $white;
    padding: 4px 12px;
    color: $white;
  }
  &__final-score {
    font-weight: 600;
    font-size: 56px;
    span {
      color: $white;
    }
  }
  &__score {
    margin-bottom: 100px;
    font-size: 112px;
    font-weight: 600;
  }
}
</style>
