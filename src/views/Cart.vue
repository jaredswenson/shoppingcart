<template>
  <div class="cart">
    <div class="row" v-if="!flyout">
      <div class="col-12">
        <div class="col-12" v-for="item in $store.state.orderItems" >
          <VuePanel :item="item" :hideradio="hideradio" :hidedelete="hidedelete"/>
          <hr>
        </div>
      </div>
    </div>

    <div v-if="flyout">
      <VueButton color="white" @click.native="goToHome" v-if="$route.path !== '/'">Return To Shopping</VueButton>
      <navbar class="grey lighten-3" dark style="margin-top:10px;">
        <h4>TODAY'S ORDER</h4>
      </navbar>
      <br>
      <p v-if="$store.state.orderItems.length <= 0">Nothing In Cart!</p>
      <div class="row"v-for="item in $store.state.orderItems">
        <div class="col-3">
          <img :src="item.image" inventoryid="item.id" width="80" height="80" alt="" class="xen-cart-image js-image img-fluid m-a-0">         
        </div>
        <div class="col-3">
          {{item.make}} {{item.model}}
        </div>
        <div class="col-3">
          ${{item.price}}
        </div>
        <div class="col-3">
          x{{item.quantity}}<br>
          ${{item.itemTotal.toFixed(2)}}
        </div>
        
      </div>
      <br>
      <div class="row">
        <div class="col-9"><h5>SUBTOTAL</h5></div>
        <div class="col-3">
          <h5>${{itemTotals}}</h5>
        </div>
      </div>
      <br>
      <VueButton color="danger" v-if="$store.state.orderItems.length >= 1 && !hidecancel" @click.native="cancelOrder">Cancel Order</VueButton>
      <VueButton color="success" v-if="$store.state.orderItems.length >= 1 && $route.path !== '/checkout'" @click.native="goToCheckout">Checkout</VueButton>
      <VueButton color="primary" v-if="$store.state.orderItems.length >= 1 && $route.path !== '/cart'  && !hidesummary" @click.native="goToSummary">View Summary</VueButton>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
  props:{
    flyout: {
        type: Boolean,
        default: false
    },
    hidecancel: {
        type: Boolean,
        default: false
    },
    hideradio: {
        type: Boolean,
        default: false
    },
    hidedelete: {
        type: Boolean,
        default: false
    },
    hidesummary: {
        type: Boolean,
        default: false
    },
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
    },
    cancelOrder(){
      this.$store.dispatch("cancelOrder");
      this.$router.push('/')
    },
    goToCheckout(){
      this.$router.push('/checkout')
    },
    goToSummary(){
      this.$router.push('/cart')
    },
    goToHome(){
      this.$router.push('/')
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

