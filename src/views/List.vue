<template>
  <div class="list">
    <VueButton @click.native="toggleView" v-if="gridView">List View</VueButton>
    <VueButton @click.native="toggleView" v-if="!gridView">Grid View</VueButton>
    <VueButton color="warning" v-if="$store.state.orderItems.length > 0" @click.native="showModal('showCart', 'md', 'Summary', '', true,true)">Order Summary - {{this.$store.state.totalItemsInCart}}</VueButton>
    <br>
    <VueButton color="yellow" v-for="item in uniqCategory" v-if="item == $store.state.category" @click.native="setCategory('')">{{item}}</VueButton>
    <VueButton color="white" v-for="item in uniqCategory" v-if="item != $store.state.category" @click.native="setCategory(item)">{{item}}</VueButton>
    <VueText size="sm" model="search" label="Search"/>
    <div class="row" v-if="gridView">
      <div class="col-3" v-for="item in filterItems" v-if="item.Category == $store.state.category || $store.state.category == ''">
        <VueCard :title="item.make + ' ' + item.model" :text="'$'+item.price">
          <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity" v-if="oItem.id == item.id" @change.native="updateQuantity($event, oItem)"/>
          <VueButton v-if="!item.inCart" @click.native="addItemToCart(item)">Add</VueButton>
          <VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id"  color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton>
          <router-link @click.native="goToDetails(item)" to="/about">View Details</router-link>
        </VueCard>
      </div>
    </div>
    <div class="row" v-if="!gridView">
      <div class="col-12" v-for="item in filterItems" v-if="item.Category == $store.state.category || $store.state.category == ''">
        <VueCard :hideimage="true" :title="item.make + ' ' + item.model" :text="'$'+item.price">
          <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity" v-if="oItem.id == item.id" @change.native="updateQuantity($event, oItem)"/>
          <VueButton v-if="!item.inCart" @click.native="addItemToCart(item)">Add</VueButton>
          <VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id"  color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton>
          <router-link @click.native="goToDetails(item)" to="/about">View Details</router-link>
        </VueCard>
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
      gridView: true
    }
  },
  methods: {
    addItemToCart(item){
      this.$store.dispatch("addItemToCart", item);
      this.$forceUpdate();
    },
    deleteItemFromCart(item){
      this.$store.dispatch("deleteItemFromCart", item);
    },
    updateQuantity(event, item){
      this.$store.dispatch("updateQuantity", parseInt(event.target.value));
      this.addItemToCart(item);
    },
    setCategory(item){
      this.$store.commit("setCategory", item);
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
    uniqCategory(){
      var items = this.$store.state.items;
      var arr = []
      $.each(items, function(i,v){
        arr.push(v.Category);
      });
      var blah = _.uniq(arr);
      return blah
    },
    filterItems(){
      var self = this;
      return this.$store.state.items.filter(function(item){
        return item.make.toLowerCase().indexOf(self.$store.state.search.toLowerCase())>=0;
        }
      )
    },
    orderSize(){
    console.log('hi');
     var order = this.$store.state.orderItems;
     var total = 0;
     $.each(order, function(i,v){
      return total += parseInt(v.quantity)
     });
     return total
    },
  },
}
</script>

