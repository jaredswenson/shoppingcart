<template>
    <MdInput :label="label" v-model="itemValue" @keyup.native="update" :size="size" />
</template>

<script>
    import { MdInput } from 'mdbvue';

    export default {
        name: "VueText",
        components: {
            MdInput
        },
        data() {
            return {
                itemValue: this.value

            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            model: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            },
        },
        methods: {
            update() {
                var textObject = {};
                textObject.key = this.model;
                textObject.value = this.itemValue;
                this.$store.dispatch("updateText", textObject);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
