<template>
  <div class="list">
    <VueButton @click.native="toggleView" v-if="gridView">List View</VueButton>
    <VueButton @click.native="toggleView" v-if="!gridView">Grid View</VueButton>
    <div class="row" v-if="gridView">
      <div class="col-3" v-for="item in $store.state.items" >
        <VueCard :title="item.make + ' ' + item.model" :text="'$'+item.price">
          <NumericInput :min="1" @change.native="updateQuantity"/>
          <VueButton @click.native="addItemToCart(item)">Add</VueButton>
          <router-link @click.native="goToDetails(item)" to="/about">View Details</router-link>
        </VueCard>
      </div>
    </div>
    <div class="row" v-if="!gridView">
      <div class="col-12" v-for="item in $store.state.items" >
        <VueCard :hideimage="true" :title="item.make + ' ' + item.model" :text="'$'+item.price"><VueButton @click.native="addItemToCart(item)">Add</VueButton></VueCard>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data(){
    return{
      gridView: true,
      quantity: 1
    }
  },
  methods: {
    addItemToCart(item){
      var int = parseInt(this.$store.state.quantity)
      item.quantity = int;
      item.itemTotal = int * item.price;
      this.$store.dispatch("addItemToCart", item);
      this.resetQuantity();
    },
    updateQuantity(e){
      this.$store.dispatch("updateQuantity", e.target.value);
    },
    resetQuantity(){
      this.$store.dispatch("updateQuantity", 1);
    },
    toggleView(){
      if(this.gridView){
        this.gridView = false;
      }else{
        this.gridView = true;
      }
    },
    goToDetails(item){
      this.$store.dispatch("goToDetails", item);
    },
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
  },
  computed: {
    
  },
}
</script>

