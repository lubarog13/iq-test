<template>
    <div class="list_item" :class="{'list_item-selected': is_selected}">
        <div class="list_item__select"></div>
        <div class="list_item__text" :class="{'list_item__text-small': small}">
            {{value.text}}
        </div>
    </div>
</template>

<script>
import SelectItemMixin from "/src/mixins/SelectItemMixin"
    export default {
        name: "ListItem",
        props: ["value", "small_font"],
        mixins: [SelectItemMixin],
        computed: {
            small() {
                return this.small_font && this.value.text.length>30
            }
        },
    }
</script>

<style lang="less" scoped>
    .list_item {
        width: 100%;
        font-family: "PT Serif";
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        background: rgba(242, 243, 243, 0.15);
        color: white;

        &__select {
            margin-left: 35px;
            border-radius: 50%;
            border: 1px solid #FFFFFF;
            min-width: 20px;
            min-height: 20px;
            
            background: transparent;
        }

        &__text {
            margin: 0 37px 0 15px;
            &-small {
                font-size: 16px;
            }
        }

        &-selected {
            background: #FFC700;
            color: black;

            .list_item__select {
                background: #2950C2;
                border: 1px solid #272727;
            }
        }
    }
</style>