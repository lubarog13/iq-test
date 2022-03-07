<template>
    <div class="row_item" :class="{'row_item-selected': is_selected}">
        {{value.text}}
    </div>
</template>

<script>
    import SelectItemMixin from "/src/mixins/SelectItemMixin"
    export default {
        name: "ListItem",
        mixins: [SelectItemMixin],
    }
</script>

<style lang="less" scoped>
.row_item {
    width: 41px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    cursor: pointer;
    font-family: "PT Serif";
    font-size: 20px;
    color: #0D0C11;
    &-selected {
        border: 6px solid #FFC700;
    }
}
</style>