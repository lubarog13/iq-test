<template>
  <div class="grid_form">
    <grid-item
      class="grid_form__item"
      v-for="value in values"
      :key="value.id"
      :selected="modelValue"
      :value="value"
      @click="select(value.id)"
    />
  </div>
</template>

<script>
import SelectFormMixin from "../mixins/SelectFormMixin";
import GridItem from "./UI/GridItem.vue";
export default {
  components: { GridItem },
  name: "ListForm",
  props: ["values",],
  mixins: [SelectFormMixin],
};
</script>

<style lang="less" scoped>
.grid_form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 267px;
  max-width: 600px;

  &__item {
      margin: 0 21px 24px 0;

      &:nth-child(7n) {
        margin: 0 21px 0 0;
      }
  }
}
</style>