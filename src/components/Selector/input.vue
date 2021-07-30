<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input type="text" class="input" />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>

<script>
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
};
</script>

<style scoped lang="scss">
.selector-input {
  position: relative;
  width: 100%;
  height: 38px;
}
</style>
