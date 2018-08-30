<template>
  <article class="xen-cart-product" variantproduct="false" :inventoryid="item.id">
     <header class="xen-cart-header p-a-2">
        <figure>
           <a href="#" class="xen-cart-link js-link" :inventoryid="item.id">
              <img :src="item.image" width="430" height="430" alt="" class="xen-cart-image img-fluid m-a-0 m-b-2" @click.native="showDetails(item)">                   
              <h2 class="xen-cart-heading h4" @click.native="showDetails(item)">{{item.make}} {{item.model}}</h2>
           </a>
        </figure>
        <p class="xen-cart-price m-b-0">   
          <strong id="xen-cart-current-price" class="xen-cart-current-price">${{item.price}}</strong>   
          <span class="xen-cart-was text-muted" style="display: none;">       
            <span id="xen-cart-was" productwidgettransval="was">was</span>       
            <del id="xen-cart-former-price" class="xen-cart-former-price"></del>   
          </span>           
        </p>
     </header>

     <!--<form action="">-->
        <fieldset class="xen-cart-standard-fields fieldset xen-cart-fieldset">
           <legend class="sr-only">Standard</legend>
           <div class="row">
              <div class="col-lg-6">
                 <div class="form-group bmd-form-group bmd-form-group-sm is-filled">
                  <label for="quantity26" class="bmd-label-floating" productwidgettransval="Quantity">Quantity</label>
                  <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity"  v-if="item.id == oItem.id"@change.native="updateQuantity($event, oItem)"/> 
                 </div>
              </div>
              <div class="col-lg-6">
                 <div class="form-group p-t-3">
                  <VueButton v-if="!item.inCart" @click.native="addItemToCart(item)">Add</VueButton>
                  <VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id"  color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton>                        
                 </div>
              </div>
           </div>
        </fieldset>
     <!--</form>-->
  </article>
</template>

<script>

export default {
  name: "VueCard",
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
    showDetails(item){
      console.log("hello");
      //this.$store.dispatch("goToDetails", item);
      //this.$router.push('/about')
    }
  },
  props: {
    item: {
        type: Object,
        default: {}
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
