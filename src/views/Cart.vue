<template>
  <div class="cart">
    <div class="row">
      <div class="col-6">
        <div class="col-12" v-for="item in $store.state.orderItems" >
          <VueCard :title="item.make + ' ' + item.model" :text="item.price" cardimage="''"></VueCard>
        </div>
      </div>
      <div class="col-6" >
        <p v-for="item in $store.state.orderItems" >{{item.price}}</p>
        <p>{{itemTotals}}</p>
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

