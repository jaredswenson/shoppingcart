<template>
  <div class="cancel">
    <VueButton outline="danger" :block="true" @click.native="cancelOrder">Cancel Order</VueButton>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';


export default {
  name: 'cancel',
  components: {
    
  },
  data(){
    return{

    }
  },
  props: {

  },
  computed: {

  },
  methods: {
  	cancelOrder(){
      this.$store.dispatch("cancelOrder");
      this.$router.push('/');
      this.$store.state.showModal = false;
    },
  }
}
</script>