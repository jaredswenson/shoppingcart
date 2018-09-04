<template>
  <div class="about">
    <router-link to="/">
      Return to Shopping
    </router-link>
    <VueCard :item="$store.state.currentItem"/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
   methods: {
    addItemToCart(item){
      this.$store.dispatch("addItemToCart", item);
    },
    deleteItemFromCart(item){
      this.$store.dispatch("deleteItemFromCart", item);
    },
    updateQuantity(event, item){
      this.$store.dispatch("updateQuantity", parseInt(event.target.value));
      this.addItemToCart(item);
    }
   },
  computed: {
    
  },
}
</script>

