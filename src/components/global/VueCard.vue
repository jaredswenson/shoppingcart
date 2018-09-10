<template>
  <article class="xen-cart-product" variantproduct="false" :inventoryid="item.id">
     <header class="xen-cart-header p-a-2">
        <figure>
           <a href="#" class="xen-cart-link js-link" :inventoryid="item.id">
              <img :src="item.ImageUrl" width="430" height="430" alt="" class="xen-cart-image img-fluid m-a-0 m-b-2" @click="goToDetails(item)">                   
              <h2 class="xen-cart-heading h4" @click="goToDetails(item)">{{item.Name}}</h2>
           </a>
        </figure>

        <p class="xen-cart-price m-b-0">   
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="!item.autoship">${{item.Prices[1].Cost}}</strong>   <br v-if="!item.autoship" >
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="!item.autoship">Pay ${{item.Prices[2].Cost}} <i>with autoship</i></strong>   
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="item.autoship" style="text-decoration:line-through;">${{item.Prices[1].Cost}}</strong><br v-if="item.autoship" > 
          <strong id="xen-cart-current-price" class="xen-cart-current-price" v-if="item.autoship">${{item.Prices[2].Cost}}</strong>         
          <span class="xen-cart-was text-muted" style="display: none;">       
            <span id="xen-cart-was" productwidgettransval="was">was</span>       
            <del id="xen-cart-former-price" class="xen-cart-former-price"></del>   
          </span>           
        </p>
     </header>
     
      <div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" :id="'oneTime' + item.Id" :name="'defaultExampleRadios' + item.Id" @change="updateAutoship($event, 'onetime')" checked>
        <label class="custom-control-label" :for="'oneTime' + item.Id">One-Time Purchase</label>
      </div>

      
      <div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" :id="'autoShip' + item.Id" :name="'defaultExampleRadios' + item.Id" @change="updateAutoship($event, 'autoship')">
        <label class="custom-control-label" :for="'autoShip' + item.Id">Autoship</label>
      </div>

     <!--<form action="">-->
        <fieldset class="xen-cart-standard-fields fieldset xen-cart-fieldset">
           <div class="row">                     
             <div class="col-md-12 col-lg-5 offset-lg-1" v-if="!hidedelete">                        
                <div class="form-group bmd-form-group bmd-form-group-sm is-filled">
                  <label for="quantity25" class="bmd-label-floating" productwidgettransval="Quantity" v-for="oItem in $store.state.orderItems" :min="oItem.quantity"  v-if="item.Id == oItem.Id" >Quantity</label>
                  <NumericInput v-for="oItem in $store.state.orderItems" :min="oItem.quantity" :max="oItem.onHand" v-if="item.Id == oItem.Id" @change.native="updateQuantity($event, oItem)"/>   
                  <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.Id == oItem.Id" @click.native="deleteItemFromCart(oItem)">
                    <i class="fa fa-trash fa-lg"></i>
                  </VueButton>                      
                </div>                      
              </div>
              <div class="col-md-7 col-lg-7 offset-lg-1" v-if="hidedelete">                        
                <div class="form-group bmd-form-group bmd-form-group-sm is-filled">
                  <label for="quantity25" class="bmd-label-floating" productwidgettransval="Quantity">Quantity</label>
                  <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity" :max="oItem.onHand"  v-if="item.Id == oItem.Id" @change.native="updateQuantity($event, oItem)"/>
                  <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.Id == oItem.Id" @click.native="deleteItemFromCart(oItem)">
                    <i class="fa fa-trash fa-lg"></i>
                  </VueButton>               
                </div>                      
              </div>
              <div class="col-md-2 col-lg-2 offset-lg-1" v-if="hidedelete">                        
                <p v-for="oItem in $store.state.orderItems" v-if="item.Id == oItem.Id">${{oItem.itemTotal.toFixed(2)}}</p>                   
              </div>                      
              <div class="col-md-12 col-lg-6" v-if="!hidedelete">                        
                <div class="form-group p-t-3">
                  <VueButton v-if="!item.inCart" color="default" @click.native="addItemToCart(item)">Add</VueButton>
                  <!--<VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.Id == item.Id" outline="default" @click.native="deleteItemFromCart(item)"><i class="fa fa-trash"></i></VueButton>-->                        
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
    updateAutoship(e, type){
      var payload = {}
      payload.item = this.item;
      payload.type = type;
      this.$store.dispatch("updateAutoship", payload);
    },
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
