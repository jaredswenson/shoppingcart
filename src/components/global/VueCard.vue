<template>
  <article class="xen-cart-product" variantproduct="false" :inventoryid="item.id">
     <header class="xen-cart-header p-a-2">
        <figure>
           <a href="#" class="xen-cart-link js-link" :inventoryid="item.id">
              <img :src="item.image" width="430" height="430" alt="" class="xen-cart-image img-fluid m-a-0 m-b-2" @click="goToDetails(item)">                   
              <h2 class="xen-cart-heading h4" @click="goToDetails(item)">{{item.make}} {{item.model}}</h2>
           </a>
        </figure>

        <p class="xen-cart-price m-b-0">   
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="!item.autoship">${{item.price.toFixed(2)}}</strong>   <br v-if="!item.autoship" >
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="!item.autoship">Pay ${{item.autoshipPrice}} <i>with autoship</i></strong>   
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="item.autoship" style="text-decoration:line-through;">${{item.price.toFixed(2)}}</strong><br v-if="item.autoship" > 
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="item.autoship">${{item.autoshipPrice.toFixed(2)}}</strong>      
          <span class="xen-cart-was text-muted" style="display: none;">       
            <span id="xen-cart-was" productwidgettransval="was">was</span>       
            <del id="xen-cart-former-price" class="xen-cart-former-price"></del>   
          </span>           
        </p>
     </header>
     
    <MdInput type="checkbox" id="checkbox1" label="Auto Ship" :checked="item.autoship" @change.native="updateAutoship($event)"/>

     <!--<form action="">-->
        <fieldset class="xen-cart-standard-fields fieldset xen-cart-fieldset">
           <legend class="sr-only">Standard</legend>
           <div class="row">
              <div class="col-lg-6">
                 <div class="form-group bmd-form-group bmd-form-group-sm is-filled" v-for="oItem in $store.state.orderItems" v-if="item.id == oItem.id" >
                  <label for="quantity26" class="bmd-label-floating" productwidgettransval="Quantity">Quantity</label>
                  <NumericInput :min="oItem.quantity"@change.native="updateQuantity($event, oItem)"/> 
                 </div>
              </div>
              <div class="col-lg-6">
                 <div class="form-group p-t-3">
                  <VueButton v-if="!item.inCart" color="default" @click.native="addItemToCart(item)">Add</VueButton>
                  <!--<VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id"  color="danger" @click.native="deleteItemFromCart(item)">Delete</VueButton>-->                    
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
    goToDetails(item){
      this.$store.dispatch("goToDetails", item);
      this.$router.push('/about')

    },
    updateAutoship(e){
      this.item.autoship = e.target.checked;
      this.$store.dispatch("updateAutoship", this.item);
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
