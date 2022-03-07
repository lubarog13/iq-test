<template>
  <div class="list_form">
    <list-item
      class="list_form__item"
      :class="{'list_form__item-small': smallRow, 'list_form__item-big': bigRow}"
      v-for="value in values"
      :key="value.id"
      :selected="modelValue"
      :value="value"
      :small_font="imaged"
      @click="select(value.id)"
    />
  </div>
</template>

<script>
import SelectFormMixin from "../mixins/SelectFormMixin";
import ListItem from "./UI/ListItem.vue";
export default {
  components: { ListItem },
  name: "ListForm",
  props: [ "imaged"],
  mixins: [SelectFormMixin],
  computed: {
    smallRow() {
        return this.values.length > 6
    },
    bigRow() {
        for(let value of this.values) {
            if (value.text.length > 40) return true
        }
        return false
    },
  },
};
</script>

<style lang="less" scoped>
.list_form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
    &__item {
        margin-top: 8px;
        height: 50px;
        &-small {
            margin-top: 9px;
            height: 40px;
        }

        &-big {
            margin-top: 19px;
            height: 78px;
        }
    }
}
</style>