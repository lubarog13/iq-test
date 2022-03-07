<template>
    <div class="grid_item"
    :class="{'grid_item-selected': is_selected}"
    :style="{'background': value.text}"
    >
    </div>
</template>

<script>
import SelectItemMixin from "/src/mixins/SelectItemMixin"
    export default {
        name: "GridItem",
        mixins: [SelectItemMixin]
    }
</script>

<style lang="less" scoped>
.grid_item {
    width: 75px;
    height: 75px;
    cursor: pointer;
    &-selected {
        outline: 6px solid #FFC700;
    }
}

</style>