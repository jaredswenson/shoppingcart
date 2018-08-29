<template>
  <div class="cart">
    <router-link to="/">Return To Shopping</router-link>
    <router-link v-if="$store.state.orderItems.length >= 1"  to="/checkout">Checkout</router-link>
    <div class="row">
      <div class="col-6">
        <div class="col-12" v-for="item in $store.state.orderItems" >
          <VueCard :title="item.make + ' ' + item.model" :text="'Quantity '+item.quantity" :hideimage="true" cardimage="''">
            <NumericInput :min="item.quantity" :emptyValue="item.quantity" v-model="item.quantity" @change.native="updateQuantity($event, item)"/>
          </VueCard>
        </div>
      </div>
      <div class="col-6" >
        <p v-for="item in $store.state.orderItems" >{{item.make}} - x{{item.quantity}} - ${{item.itemTotal}}<VueButton color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton></p>
        <p>${{itemTotals}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      tempQuantity: 0
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
    itemTotals(){
      var total = this.$store.state.orderTotal.toFixed(2)
      return total
    }
  },
}
</script>

