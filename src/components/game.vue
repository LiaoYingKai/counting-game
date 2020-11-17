<template>
  <div class="game">
    <div class="game__title">
      <div class="game__sub-title">
        <p>60 SECONDS CHALLENGE</p>
        <div>SCORE</div>
        <span> {{ formatQuestion(question) }} </span>
      </div>
      <div class="game__timer">{{ formatTime(lastTime) }}</div>
    </div>
    <div class="game__content">
      <span>{{ formula[0] }}</span> {{ formula[1]
      }}<span>{{ formula[2] }}</span> =
      <div>
        <input @keyup.enter="handleSubmit" ref="input" />
        <p>press enter to answer</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const question = ref(1);
    const GameTime = 10;
    const lastTime = ref(GameTime);
    const Milliseconds = 1000;
    const formula = ref(randomFormula());

    const timer = setInterval(() => {
      lastTime.value = lastTime.value - 1;
      if (lastTime.value === 0) {
        clearInterval(timer);
        emit("on-game-over");
      }
    }, Milliseconds);

    function formatTime(time) {
      const minutes = Number.parseInt(time / 60);
      const seconds = time % 60;
      return `${paddingZero(minutes)}:${paddingZero(seconds)}`;
    }

    function formatQuestion(question) {
      if (question >= 100) return question;
      if (question >= 10) return `0${question}`;
      return `00${question}`;
    }

    function randomNumber(max = 10) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function randomSymbol() {
      const symbols = ["+", "-", "*", "/"];
      return symbols[randomNumber(4)];
    }

    function randomFormula() {
      return [randomNumber(10), randomSymbol(), randomNumber(10)];
    }

    function paddingZero(number) {
      return number >= 10 ? number : `0${number}`;
    }

    function handleSubmit(event) {
      const inputValue = event.target.value;
      const answer = eval(formula.value.join(""));
      if (answer == inputValue) {
        emit("on-calculation", 5);
      } else {
        emit("on-calculation", -1);
      }
      formula.value = randomFormula();
      question.value = question.value + 1;
      this.$refs.input.value = "";
    }

    return {
      formatTime,
      lastTime,
      formatQuestion,
      question,
      formula,
      handleSubmit
    };
  }
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
