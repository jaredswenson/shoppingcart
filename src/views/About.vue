<template>
  <div class="about">
    <VueCard v-for="item in $store.state.items" v-if="item.id == $store.state.currentItem.id" :title="item.make + ' ' + item.model" :text="'$'+item.price">
      <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity" v-if="oItem.id == item.id" @change.native="updateQuantity($event, oItem)"/>
      <VueButton v-if="!item.inCart" @click.native="addItemToCart(item)">Add</VueButton>
      <VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id"  color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton>
      <router-link @click.native="goToDetails(item)" to="/">Return To Shopping</router-link>
    </VueCard>
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

