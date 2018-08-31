<template>
    <Btn v-if="!block" :color="color" :outline="outline" :size="size"><slot></slot></Btn>
    <Btn v-else-if="block" block :color="color" :outline="outline" :size="size"><slot></slot></Btn>
</template>

<script>
import { Btn} from 'mdbvue';

export default {
  name: "VueButton",
  components: {
    Btn
  },
  props: {
    title: {
        type: String,
        default: 'Button'
    },
    block:{
      type: Boolean,
      default: false
    },
    color: {
    	type: String,
      default: ''
    },
    outline: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
