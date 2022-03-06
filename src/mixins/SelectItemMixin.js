export default {
    props: ["selected"],
    computed: {
        is_selected() {
            return this.selected === this.value.id
        }
    },
}