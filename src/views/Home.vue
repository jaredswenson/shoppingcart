<template>
  <div class="home row">
    <div class="col-2"></div>
    <div class="col-8">
      <router-link v-if="$store.state.orderItems.length >= 1" to="/cart">View Summary</router-link>
      <router-link v-if="$store.state.orderItems.length >= 1" to="/checkout">Checkout</router-link>
      <List/>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';


export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      store: this.$store,
      showGrid: true,
    }
  },
  props: {

  },
  computed: {
    state(){
      return this.store.state
    },
    
  },
  methods: {
   showModal(slot, size, title, content, header,footer){
      var modalObject = {};
      modalObject.slot = slot;
      modalObject.size = size;
      modalObject.title = title;
      modalObject.content = content;
      modalObject.header = header;
      modalObject.footer = footer;
      this.$store.dispatch("modalAction", modalObject);
    },
  }
}
</script>
