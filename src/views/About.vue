<template>
  <div class="about">
    <router-link to="/">Return To Shopping</router-link>
    <VueCard v-for="item in $store.state.items" v-if="item.id == $store.state.currentItem.id" :title="item.make + ' ' + item.model" :text="'$'+item.price"><VueButton @click.native="addItemToCart(item)">Add</VueButton></VueCard>
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
   },
  computed: {
    
  },
}
</script>

