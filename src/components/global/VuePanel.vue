<template>
  <article class="xen-cart-product row p-y-3" variantproduct="false" :inventoryid="item.id">      
    <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">       
    <figure>          
      <a id="detailsImage" class="xen-cart-link" @click="goToDetails(item)">            
        <img :src="item.image" inventoryid="item.id" width="160" height="160" alt="" class="xen-cart-image js-image img-fluid m-a-0">         
      </a>       
    </figure>     
  </div>      
  <div class="col-xs-7 col-sm-9 col-md-3 col-lg-3">       
    <header class="xen-cart-header">          
    <a id="detailsLink" class="xen-cart-link js-link" :inventoryid="item.id" @click="goToDetails(item)">            
      <h2 id="heading0" class="xen-cart-heading h6">{{item.make}} {{item.model}}</h2>          
    </a>                   
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
  </div>      
  <div class="col-md-4">     
    <MdInput type="checkbox" id="checkbox1" label="Auto Ship" :checked="item.autoship" @change.native="updateAutoship($event)"/>
    <!-- <fieldset class="xen-cart-custom-fields fieldset xen-cart-fieldset m-b-3" v-if="!hideradio">          
      <legend class="sr-only">Custom</legend>       
    </fieldset>       
    <fieldset class="xen-cart-autoship-fields fieldset xen-cart-fieldset xen-autoship" v-if="!hideradio" >         
      <legend class="sr-only">Autoship</legend>                 
      <div class="radio">
        <label for="no0">   
          <input name="0" id="no0" value="0" index="0" class="xen-cart-autoship-radio radio" checked="" type="radio">
          <span class="circle"></span><span class="check"></span>   
          <span productwidgettransval="One-Time Purchase">One-Time Purchase</span>
        </label>                  
      </div>             
      <div class="radio">
        <label for="yes0">   
          <input name="0" id="yes0" value="1" index="0" class="xen-cart-autoship-radio radio  js-autoship" type="radio">
          <span class="circle"></span><span class="check"></span>   
          <i class="fa fa-truck xen-hightlight-1" aria-hidden="true"></i>   
          <span class="xen-hightlight-1">       
            <span productwidgettransval="Auto-Restock:">EZ-Ship</span>   
          </span>  
          <a href="#" class="xen-info text-info" data-toggle="modal" data-target="#xen-cart-autoship" aria-label="Info">      
          <i class="fa fa-info-circle fa-lg"></i>   
          </a>
        </label>                  
      </div>     
    </fieldset> -->   
  </div>      

  <div class="col-md-3">        
    <fieldset class="xen-cart-standard-fields fieldset xen-cart-fieldset">          
    <legend class="sr-only">Standard</legend>                   
      <div class="row">                     
       <div class="col-md-12 col-lg-5 offset-lg-1" v-if="!hidedelete">                        
          <div class="form-group bmd-form-group bmd-form-group-sm is-filled">
            <label for="quantity25" class="bmd-label-floating" productwidgettransval="Quantity" v-for="oItem in $store.state.orderItems" :min="oItem.quantity"  v-if="item.id == oItem.id" >Quantity</label>
            <NumericInput v-for="oItem in $store.state.orderItems" :min="oItem.quantity"  v-if="item.id == oItem.id" @change.native="updateQuantity($event, oItem)"/>   
            <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.id == oItem.id" @click.native="deleteItemFromCart(oItem)">
              <i class="fa fa-trash fa-lg"></i>
            </VueButton>                      
          </div>                      
        </div>
        <div class="col-md-7 col-lg-7 offset-lg-1" v-if="hidedelete">                        
          <div class="form-group bmd-form-group bmd-form-group-sm is-filled">
            <label for="quantity25" class="bmd-label-floating" productwidgettransval="Quantity">Quantity</label>
            <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity"  v-if="item.id == oItem.id" @change.native="updateQuantity($event, oItem)"/>
            <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.id == oItem.id" @click.native="deleteItemFromCart(oItem)">
              <i class="fa fa-trash fa-lg"></i>
            </VueButton>               
          </div>                      
        </div>
        <div class="col-md-2 col-lg-2 offset-lg-1" v-if="hidedelete">                        
          <p v-for="oItem in $store.state.orderItems" v-if="item.id == oItem.id">${{oItem.itemTotal.toFixed(2)}}</p>                   
        </div>                      
        <div class="col-md-12 col-lg-6" v-if="!hidedelete">                        
          <div class="form-group p-t-3">
            <VueButton v-if="!item.inCart" color="default" @click.native="addItemToCart(item)">Add</VueButton>
            <!--<VueButton v-for="oItem in $store.state.orderItems" v-if="oItem.id == item.id" outline="default" @click.native="deleteItemFromCart(item)"><i class="fa fa-trash"></i></VueButton>-->                        
          </div>                      
        </div>                   
      </div>       
    </fieldset>     
  </div>    
  </article>
</template>

<script>

export default {
  name: "VuePanel",
  methods: {
      addItemToCart(item){
      this.$store.dispatch("addItemToCart", item);
      this.$forceUpdate();
    },
    deleteItemFromCart(item){
      this.$store.dispatch("deleteItemFromCart", item);
      this.$forceUpdate();
    },
    updateQuantity(event, item){
      this.$store.dispatch("updateQuantity", parseInt(event.target.value));
      this.addItemToCart(item);
    },
    setPriceTier(event, item){
      console.log(event);
      console.log(item);
    },
    updateAutoship(e){
      this.item.autoship = e.target.checked;
      this.$store.dispatch("updateAutoship", this.item);
    },
    goToDetails(item){
      this.$store.dispatch("goToDetails", item);
      this.$router.push('/about')

    },
  },
  props: {
    item: {
        type: Object,
        default: {}
    },
    hideradio:{
      type: Boolean,
      default: false
    },
    hidedelete:{
      type: Boolean,
      default: false
    }


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>