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
    @include fontSizeWeight(30px);
    border: 4px solid $white;
    padding: 4px 12px;
    color: $white;
  }
  &__final-score {
    @include fontSizeWeight(56px);
    span {
      color: $white;
    }
  }
  &__score {
    @include fontSizeWeight(112px);
    margin-bottom: 100px;
  }
}
</style>
