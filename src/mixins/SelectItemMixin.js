export default {
    props: ["selected", "value"],
    computed: {
        is_selected() {
            return this.selected === this.value.id
        }
    },
}