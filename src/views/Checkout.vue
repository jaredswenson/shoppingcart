<template>
  <div class="checkout row">
    <div class="col-2"></div>
    <div class="col-8">
      <h1>Checkout</h1><br>
      <div class="row">
        <div class="col-8">
          <VueAccordian/>
        </div>
        <div class="col-4">
            <Cart :flyout="true" :hidecancel="true" :hidesummary="true"/>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
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

