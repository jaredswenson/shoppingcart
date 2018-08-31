<template>
  <div id="app">

    <navbar class="grey lighten-3" dark style="margin-bottom:50px;">
      <!-- Navbar brand -->
      <navbar-collapse>
        <navbar-nav>
          <!-- <navbar-item v-if="$route.path !== '/'"><router-link to="/">Return To Shopping</router-link></navbar-item>
          <navbar-item v-if="$store.state.orderItems.length >= 1 && $route.path !== '/cart'"><router-link to="/cart">View Summary</router-link></navbar-item>
          <navbar-item v-if="$store.state.orderItems.length >= 1 && $route.path !== '/checkout'"><router-link to="/checkout">Checkout</router-link></navbar-item> -->
        </navbar-nav>
        <!-- Dropdown -->
          <dropdown dropleft >
            <dropdown-toggle slot="toggle">
              <i class="fa fa-shopping-cart fa-lg"></i>
              <span v-if="$store.state.orderItems.length > 0" style="background-color:gray;color:white;border-radius:5px;">{{this.$store.state.totalItemsInCart}}</span>
            </dropdown-toggle>
            <dropdown-menu style="width:350px!important;">
              <Cart :flyout="true"/>
            </dropdown-menu>
        </dropdown>
      </navbar-collapse>
    </navbar>
    <router-view/>

    <VueModal v-if="this.$store.state.showModal" id="VueModal" :title="this.$store.state.modalTitle" :myclass="this.$store.state.modalSize" :headeron="this.$store.state.modalHeader" :footeron="this.$store.state.modalFooter" :content="this.$store.state.modalContent">
      <Cancel v-if="this.$store.state.showCancel"/>
    </VueModal>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
    
  },
  beforeCreate() {
    if (localStorage.getItem('order')) this.$store.dispatch("setOrderFromStorage");
  },
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

