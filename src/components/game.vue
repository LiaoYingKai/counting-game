<template>
  <div class="game">
    <div class="game__title">
      <div class="game__sub-title">
        <p>60 SECONDS CHALLENGE</p>
        <div>SCORE</div>
        <span> 001 </span>
      </div>
      <div class="game__timer">00:59</div>
    </div>
    <div class="game__content">
      <span>121</span> x <span>122</span> =
      <div>
        <input />
        <p>press enter to answer</p>
      </div>
    </div>
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
  @include flexCenter();
  flex-direction: column;

  &__title,
  &__content {
    @include flexCenter();
    justify-content: space-between;
    width: 100%;
    padding: 0 200px;
    box-sizing: border-box;
  }
  &__title {
    margin-bottom: 104px;
  }
  &__sub-title {
    > p {
      @include fontSizeWeight(30px);
      border: 4px solid $white;
      padding: 4px 12px;
      color: $white;
    }

    > div {
      padding: 8px 16px;
      background-color: $white;
      color: $orange;
      @include fontSizeWeight(30px);
      display: inline-block;
    }

    span {
      @include fontSizeWeight(44px);
      vertical-align: middle;
    }
  }
  &__timer {
    @include fontSizeWeight(96px);
    color: $white;
  }
  &__content {
    @include fontSizeWeight(112px);
    color: $white;
    span {
      color: $black;
    }
    > div {
      p {
        font-size: 24px;
        color: $white;
      }
    }
  }
  input {
    background-color: $white;
    border: none;
    color: $black;
    @include fontSizeWeight(84px);
    padding: 24px 42px;
    width: 255px;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
