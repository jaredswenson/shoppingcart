<template>
    <Btn block  :color="color" :size="size"><slot></slot></Btn>
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
    color: {
    	type: String,
      default: 'primary'
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
