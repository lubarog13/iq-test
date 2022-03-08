<template>
  <div
    class="row_form"
    :style="{ 'grid-template-columns': `repeat(${values.length}, 1fr)` }"
  >
    <row-item
      class="row_form__item"
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
import RowItem from "./UI/RowItem.vue";
export default {
  components: { RowItem },
  name: "RowForm",
  mixins: [SelectFormMixin],
};
</script>

<style lang="less" scoped>
.row_form {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 63px;
  max-width: 600px;

  &__item {
      margin: auto;
  }
}
</style>0.75