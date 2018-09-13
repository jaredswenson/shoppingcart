<template>
  <div id="xen-cart-list" transid="' + mySiteType + '_ShoppingCart_Product" transmasterid="Product">
      <div id="xen-cart-products" class="xen-cart-row">
          <div  class="xen-cart-product" variantProduct="true" :parentInventoryID="item.Id"  :inventoryId="item.Id">
              <div  class="xen-cart-product" variantProduct="false" :inventoryId="item.Id">

              <!-- <div class="card xen-cart-product"> -->
                  <form action="" id="xen-cart-form-' + index + '"  class="xen-cart-form form-horizontal">    
                      <div class="card-body">
                          <div class="row">
                              <div class="col-12 col-md-6">
                                  <div class="view">
                                      <img :src="item.ImageUrl" class="img-fluid xen-image" alt="">
                                      <a href="#" class="xen-overlay-container xen-mask">
                                          <!-- <div class="mask"></div> -->
                                      </a>
                                  </div>
                                  <div class="xen-content-container">
                                      <a href="#">
                                          <h4 class="card-title xen-cart-heading">{{item.Name}}</h4>
                                          <div class="card-text">
                                              <span>SKU {{item.Sku}}</span>
                                          </div>
                                      </a>  
                                      <div class="xen-rating hidden">
                                      </div>
                                      <div class="xen-banner hidden">
                                          <div class="xen-text">Buy 2. Save $10.</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-6">
                                  <div class="xen-content-container">
                                      <div class="xen-cart-pricing-container">
                                          <div class="xen-banner hidden">
                                              <div class="xen-text">Buy 2. Save $10.</div>
                                          </div>
                                          <div class="md-form form-sm">
                                              <!-- <button class="btn btn-primary xen-btn-add" transmasterid="Product" transval="Add to Cart" value="Add to Cart">Add to Cart</button> -->
                                              <VueButton v-if="!item.inCart" color="primary" @click.native="addItemToCart(item)">Add To Cart</VueButton>
                                              <div v-if="item.inCart">
                                                  <label for="quantity25" productwidgettransval="Quantity">Quantity</label>
                                                  <NumericInput v-for="oItem in $store.state.orderItems" v-if="item.Id == oItem.Id" @change.native="updateQuantity($event, oItem)" />
                                                  <VueButton color="white" size="sm" v-for="oItem in $store.state.orderItems" :block="true" v-if="item.Id == oItem.Id" @click.native="deleteItemFromCart(oItem)">
                                                      <i class="fa fa-trash fa-lg"></i>
                                                  </VueButton>
                                              </div>
                                              <div class="spinner hidden">
                                                  <div class="input-group">                        
                                                  </div >
                                                  <label for="quantity7" class="sr-only" transmasterid="Product" transval="Quantity">Quantity</label>
                                                  <div class="xen-cart-in "><small>in cart</small></div>
                                              </div>
                                          </div>
                                          <div class="xen-content-pricing">
                                              <div class="xen-content-price">

                                              </div>
                                              <div class="xen-cart-discount hidden">
                                                  <div class="xen-cart-autoship">
                                                      <div class="xen-cart-autoship-info">
                                                          <i class="fa fa-truck xen-text-autoship"></i>
                                                          <span class="xen-text-autoship" transmasterid="Product" transval="Autoship saves you $10!"><a href="http://pandora.dev.worldvuuniversal.xennsoft.com/shopping#" class="xen-info" data-toggle="modal" data-target="#xen-cart-autoship" aria-label="Info"><i class="fa fa-info-circle  text-info"></i></a></span>
                                                      </div>
                                                      <div class="form-group xen-text-autoship xen-cart-authoship-select ">
                                                          <input type="checkbox" class="filled-in" id="checkbox' + index +'">
                                                          <label class="xen-text-autoship" for="checkbox' + index + '">Autoship saves you $10! <a href="http://pandora.dev.worldvuuniversal.xennsoft.com/shopping#" class="xen-info" data-toggle="modal" data-target="#xen-cart-autoship" aria-label="Info"><i class="fa fa-info-circle  text-info"></i></a></label>
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </form>
                  <!-- <a href="#" :inventoryId="item.Id" class="xen-overlay-container"></a> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script>

    export default {
        name: "VuePanel",
        mounted() {
            $.each(this.$store.state.orderItems, function (i, v) {
                if (v.autoship) {
                    $('#oneTime' + v.Id).prop('checked', false);
                    $('#autoShip' + v.Id).prop('checked', true);
                }
            })
        },
        methods: {
            addItemToCart(item) {
                this.$store.dispatch("addItemToCart", item);
            },
            deleteItemFromCart(item) {
                this.$store.dispatch("deleteItemFromCart", item);
                this.$forceUpdate();
            },
            updateQuantity(event, item) {
                console.log('update', parseInt(event.target.value))
                this.$store.dispatch("updateQuantity", parseInt(event.target.value));
                this.addItemToCart(item);
            },
            setPriceTier(event, item) {
                console.log(event);
                console.log(item);
            },
            updateAutoship(e, type) {
                var payload = {}
                payload.item = this.item;
                payload.type = type;
                this.$store.dispatch("updateAutoship", payload);
            },
            goToDetails(item) {
                this.$store.dispatch("goToDetails", item);
                this.$router.push('/about')
            },
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
            hideradio: {
                type: Boolean,
                default: false
            },
            hidedelete: {
                type: Boolean,
                default: false
            }

        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>