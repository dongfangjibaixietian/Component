<template>
  <div class="selector">
    <SelectorInput :placeholder="placeholder" />
  </div>
</template>

<script>
import SelectorInput from "./input";
export default {
  name: "Selector",
  components: {
    SelectorInput,
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.selector {
  position: relative;
}
</style>
