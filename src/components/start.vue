<template>
  <div class="start">
    <div class="start__title">
      <p>60</p>
      <div>+−×÷</div>
      <p>SECONDS <br />CHALLENGE</p>
    </div>
    <div class="start__content">
      <Button @onClick="$emit('on-start')">
        START!
      </Button>
      <p>
        try to answer more as you can
      </p>
    </div>
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
.start {
  @include fullScreen();
  @include flexCenter();
  flex-direction: column;

  &__title {
    @include flexCenter();
    position: relative;

    > div {
      color: $white;
      @include fontSizeWeight(44px);
      position: absolute;
      right: -10px;
      top: 60px;
      &::before,
      &::after {
        background-color: $white;
        width: 100%;
        height: 4px;
        content: "";
        display: inline-block;
        position: absolute;
      }
      &::after {
        bottom: 0;
        left: 0;
      }
      &::before {
        bottom: -10px;
        left: 0;
      }
    }
    p {
      &:first-child {
        color: $white;
        text-shadow: 12px 0px 0px $black;
        margin-right: 24px;
        @include fontSizeWeight(240px);
      }
      &:last-child {
        line-height: 100px;
        @include fontSizeWeight(96px);
      }
    }
  }
  &__content {
    color: $white;
    text-align: center;
    @include fontSizeWeight(24px, 400);
  }
}
</style>
