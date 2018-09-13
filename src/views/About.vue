<template>
  <div class="about">
    <section id="xen-cart-details">
       <div class="row">
          <aside class="col-lg-5">      
            <div id="xen-cart-images" class="m-b-3" figure="">         
              <a href="#" id="detailsImage" class="xen-cart-link">            
                <img :src="item.ImageUrl" width="800" height="800" alt="" class="xen-cart-image js-image img-fluid">          
              </a>                   
            </div>
         </aside>  
       <article class="xen-cart-product col-lg-7" variantproduct="false" :parentinventoryid="item.Id" :inventoryid="item.Id">
          <header>
             <h1 id="xen-cart-heading" class="m-b-3 xen-cart-heading" role="banner">{{item.Name}}</h1>
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
             <fieldset id="xen-cart-custom-fields" class="fieldset xen-cart-fieldset m-b-3">
                <legend class="sr-only">Custom</legend>
                <div class="row">
                   <div class="col-lg-6">
                      <div class="form-group bmd-form-group-sm">                       </div>
                   </div>
                   <div class="col-lg-6">
                      <div class="form-group bmd-form-group-sm">                       </div>
                   </div>
                </div>
             </fieldset>
             <fieldset id="xen-cart-autoship-fields" class="fieldset xen-cart-fieldset xen-autoship">
                <legend class="sr-only">Autoship</legend>
                <div class="row">
                   <div class="col-lg-4 col-sm-5">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" :id="'oneTime' + item.Id" :name="'defaultExampleRadios' + item.Id" @change="updateAutoship($event, 'onetime')" checked>
                        <label class="custom-control-label" :for="'oneTime' + item.Id">One-Time Purchase</label>
                      </div>
                   </div>
                   <div class="col-lg-8 col-sm-7">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" :id="'autoShip' + item.Id" :name="'defaultExampleRadios' + item.Id" @change="updateAutoship($event, 'autoship')">
                        <label class="custom-control-label" :for="'autoShip' + item.Id">Autoship</label>
                      </div>
                   </div>
                </div>
             </fieldset>
             <fieldset id="xen-cart-standard-fields" class="fieldset xen-cart-fieldset">
                <legend class="sr-only">Standard</legend>
                <div class="row">
                   <div class="offset-xl-6 col-xl-3 col-sm-6">
                      <div class="form-group bmd-form-group bmd-form-group-sm is-filled" v-if="item.inCart">
                        <label for="quantity25" class="bmd-label-floating" productwidgettransval="Quantity">Quantity</label>
                        <NumericInput  v-for="oItem in $store.state.orderItems" :min="oItem.quantity" :max="oItem.OnHand"  v-if="item.Id == oItem.Id" @change.native="updateQuantity($event, oItem)"/>
                        <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.Id == oItem.Id" @click.native="deleteItemFromCart(oItem)">
                          <i class="fa fa-trash fa-lg"></i>
                        </VueButton>               
                      </div>
                   </div>
                   <div class="col-xl-3 col-sm-6">
                      <div class="form-group bmd-form-group-sm p-t-3">
                        <VueButton v-if="!item.inCart" color="default" @click.native="addItemToCart(item)">Add</VueButton>
                      </div>
                   </div>
                </div>
             </fieldset>
          <div id="accordion">
             <div id="accordion" class="xen-accordion-bullet-list m-b-6" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                   <div class="panel-heading p-y-1" role="tab" id="headingOne">
                      <h2 class="panel-title">           
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="false" aria-controls="collapseOne" class="collapsed">               
                          <i class="fa fa-chevron-circle-down m-x-1" aria-hidden="true"></i>               
                          <span productdetailswidgettransval="MORE INFORMATION:">MORE INFORMATION:</span>
                        </a>       
                      </h2>
                   </div>
                   <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
                      <div class="panel-body p-x-6 p-y-3">
                         <p><span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;"><span>GAEA AM AMMO brings you our super-charged Vitamin K2 MK7 from the best bio Japanese Natto, in combination with Vitamin D3 and Magnesium Citrate.</span></span></p>
                         <p>
                            <span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;">
                               {{item}}
                               <o:p></o:p>
                            </span>
                         </p>
                         <p style="font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;">
                            <span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;">
                               GAEA AM AMMO contains 100% active ingredients and is free from sugar, salt, preservatives or artificial colourings.&nbsp; &nbsp;<br> <br> GAEA AM AMMO's bio ingredients are sourced in Switzerland and are non-irradiated. 
                               <o:p></o:p>
                            </span>
                         </p>
                         <p>
                            <span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;">
                               Gaea is against animal testing.
                               <o:p></o:p>
                            </span>
                         </p>
                      </div>
                   </div>
                </div>
                <div class="panel panel-default">
                   <div class="panel-heading p-y-1" role="tab" id="headingOne">
                      <h2 class="panel-title">           
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapseOne" class="collapsed">               
                          <i class="fa fa-chevron-circle-down m-x-1" aria-hidden="true"></i>               
                          <span productdetailswidgettransval="GAEA AM AMMO INGREDIENTS:">GAEA AM AMMO INGREDIENTS:</span>
                        </a>       
                      </h2>
                   </div>
                   <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
                      <div class="panel-body p-x-6 p-y-3">
                         <p>
                            <span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;">
                               Magnesium (Citrate), Menaquinone-7, Cholecalciferol.
                               <o:p></o:p>
                            </span>
                         </p>
                         <p style="font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;">
                            <span style="font-size: 8.5pt; font-family: 'Verdana',sans-serif; color: black;">
                               Vegetarian microcrystalline cellulose capsule.
                               <o:p></o:p>
                            </span>
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div class="col-md-6">
             <p class="text-md-left text-xs-center">
              <VueButton outline="secondary" @click.native="returnToShopping">Return To Shopping</VueButton>
            </p>
          </div>
          <div class="col-md-6">
             <div id="socialMedia"></div>
          </div>
       </article>
       </div>
    </section>
  </div>
</template>

<script>

export default {
  data(){
    return{
      item: this.$store.state.currentItem
    }
  },
   methods: {
    addItemToCart(item) {
      this.$store.dispatch("addItemToCart", item);
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
    updateAutoship(e, type){
      var payload = {}
      payload.item = this.item;
      payload.type = type;
      this.$store.dispatch("updateAutoship", payload);
    },
    returnToShopping(){
      this.$router.push('/')
    }
   },
  computed: {
    
  },
}
</script>

