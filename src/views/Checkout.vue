<template>
  <div class="checkout">
    <VueButton color="danger" @click.native="cancelOrder">Cancel Order</VueButton>
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
    },
    cancelOrder(){
      this.$store.dispatch("cancelOrder");
      this.$router.push('/')
    },
   },
  computed: {
    itemTotals(){
      var total = this.$store.state.orderTotal.toFixed(2)
      return total
    }
  },
}
</script>

