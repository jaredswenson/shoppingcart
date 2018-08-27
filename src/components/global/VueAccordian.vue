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
          <div class="card-body">
            <VueText label="First Name" item="firstName" :value="$store.state.firstName" @keyup.native="update"/>
            <VueText label="Last Name" item="lastName" :value="$store.state.lastName" @keyup.native="update"/>
            <VueText label="Email" item="email" :value="$store.state.email" @keyup.native="update"/>
            <VueText label="Phone" item="phone" :value="$store.state.phone" @keyup.native="update"/>
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
          <div class="card-body">
            <VueText label="Street Address" item="streetAddress" :value="$store.state.streetAddress" @keyup.native="update"/>
            <VueText label="City" item="city" :value="$store.state.city" @keyup.native="update"/>
            <VueText label="State" item="state" :value="$store.state.state" @keyup.native="update"/>
            <VueText label="Postal Code" item="zipCode" :value="$store.state.zipCode" @keyup.native="update"/>
            <VueText label="Country" item="country" :value="$store.state.country" @keyup.native="update"/>
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
          <div class="card-body">
            <VueText label="Shipping Method" item="shippingMethod" :value="$store.state.shippingMethod" @keyup.native="update"/>
          </div>
        </div>
      </div>
      <div class="card z-depth-0 bordered">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Submit
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <VueButton @click.native="submitOrder">Submit</VueButton>
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
      order: false
    }
  },
  props: {

  },
  methods:{
    update(){

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