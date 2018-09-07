<template>
    <div class="accordion" id="accordionExample">
      <div class="card z-depth-0 bordered">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Account Info
            </button>
          </h5>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body" v-if="!accountDone">
            <VueText label="First Name" model="firstName" :value="$store.state.firstName" @keyup.native="update"/>
            <VueText label="Last Name" model="lastName" :value="$store.state.lastName" @keyup.native="update"/>
            <VueText label="Email" model="email" :value="$store.state.email" @keyup.native="update"/>
            <VueText label="Phone" model="phone" :value="$store.state.phone" @keyup.native="update"/>
            <VueButton outline="default" :block="true" disabled v-if="$store.state.firstName == '' || $store.state.lastName == '' || $store.state.email == '' || $store.state.phone == ''">Proceed To Address</VueButton>
            <VueButton outline="default" :block="true" v-if="$store.state.firstName != '' && $store.state.lastName != '' && $store.state.email != '' && $store.state.phone != ''" @click.native="setAccountDone">Proceed To Address</VueButton>
          </div>
        </div>
      </div>
      <div class="card z-depth-0 bordered">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Address
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body" v-if="accountDone && !addressDone">
            <VueText label="Street Address" model="streetAddress" :value="$store.state.streetAddress" @keyup.native="update"/>
            <VueText label="City" model="city" :value="$store.state.city" @keyup.native="update"/>
            <VueText label="State" model="state" :value="$store.state.state" @keyup.native="update"/>
            <VueText label="Postal Code" model="zipCode" :value="$store.state.zipCode" @keyup.native="update"/>
            <VueText label="Country" model="country" :value="$store.state.country" @keyup.native="update"/>
            <VueButton outline="default" :block="true" disabled v-if="$store.state.streetAddress == '' || $store.state.city == '' || $store.state.state == '' || $store.state.zipCode == '' || $store.state.country == ''">Proceed To Shipping</VueButton>
            <VueButton outline="default" :block="true" v-if="$store.state.streetAddress != '' && $store.state.city != '' && $store.state.state != '' && $store.state.zipCode != '' && $store.state.country != ''" @click.native="setAddressDone">Proceed To Shipping</VueButton>
          </div>
        </div>
      </div>
      <div class="card z-depth-0 bordered">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Shipping Method
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body" v-if="accountDone && addressDone && !shippingDone">
            <VueText label="Shipping Method" model="shippingMethod" :value="$store.state.shippingMethod" @keyup.native="update"/>
            <VueButton outline="default" :block="true" disabled v-if="$store.state.shippingMethod == ''">Proceed To Shipping</VueButton>
            <VueButton outline="default" :block="true" v-if="$store.state.shippingMethod != ''" @click.native="setShippingDone">Proceed To Shipping</VueButton>
          </div>
        </div>
      </div>
      <div class="card z-depth-0 bordered">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Place order
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body"  v-if="accountDone && addressDone && shippingDone">
            <Cart :hideradio="true" :hidedelete="true"/>
            <VueButton color="success" :block="true" @click.native="submitOrder">Place Order</VueButton>
          </div>
        </div>
      </div>
      <div class="card z-depth-0 bordered" v-if="order">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Order Details
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body row">
            <div class="col-8">
              <p>{{$store.state.firstName}} {{$store.state.lastName}}</p>
              <p>{{$store.state.email}}</p>
              <p>{{$store.state.phone}}</p>
              <p>{{$store.state.streetAddress}}</p>
              <p>{{$store.state.city}}</p>
              <p>{{$store.state.state}}</p>
              <p>{{$store.state.zipCode}}</p>
              <p>{{$store.state.country}}</p>
            </div>
            <div class="col-4">
              <p v-for="item in $store.state.orderItems" >{{item.make}} - {{item.price}}</p>
              <p>${{itemTotals}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "VueAccordian",
  components: {
    
  },
  data(){
    return{
      order: false,
      accountDone: false,
      addressDone: false,
      shippingDone: false,
    }
  },
  props: {

  },
  methods:{
    setAccountDone(){
      this.accountDone = true;
    },
    setAddressDone(){
      this.addressDone = true;
    },
    setShippingDone(){
      this.shippingDone = true;
    },
    submitOrder(){
      this.order = true;
    }
  },
  computed: {
    itemTotals(){
      var total = this.$store.state.orderTotal.toFixed(2)
      return total
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>