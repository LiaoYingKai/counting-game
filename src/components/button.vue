<template>
  <button @click="$emit('on-click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  width: 350px;
  height: 58px;
  background-color: $black;
  @include fontSizeWeight(36px);
  color: $orange;
  text-align: center;
  border: none;
  cursor: pointer;
}
</style>
