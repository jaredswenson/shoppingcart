<template>
  <div class="checkout">
    <router-link to="/cart">Return To Summary</router-link>
	<router-link to="/">Return To Shopping</router-link>
    <div class="row">
      <div class="col-6">
        <div class="col-12">
          <VueAccordian/>
        </div>
      </div>
      <div class="col-6" >
        <p v-for="item in $store.state.orderItems" >{{item.make}} - {{item.quantity}} - ${{item.itemTotal}}</p>
        <p>${{itemTotals}}</p>
      </div>
    </div>
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
    }
   },
  computed: {
    itemTotals(){
      var total = this.$store.state.orderTotal.toFixed(2)
      return total
    }
  },
}
</script>

