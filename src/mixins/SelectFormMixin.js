export default {
    props: ["modelValue", "values"],
    methods: {
        select(newVal) {
            this.$emit('update:modelValue', newVal)
        }
    },
}