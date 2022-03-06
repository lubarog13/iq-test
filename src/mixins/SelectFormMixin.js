export default {
    props: ["modelValue"],
    methods: {
        select(newVal) {
            this.$emit('update:modelValue', newVal)
        }
    },
}