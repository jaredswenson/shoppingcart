<template>
  <div id="app">
    <!--Navbar-->
    <Navbar class="indigo" dark>
      <!-- Navbar brand -->
      <mdb-navbar-brand>
        Shopping Cart
      </mdb-navbar-brand>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item v-if="$route.path !== '/'"><router-link to="/">Return To Shopping</router-link></navbar-item>
          <navbar-item v-if="$store.state.orderItems.length >= 1 && $route.path !== '/cart'"><router-link to="/cart">View Summary</router-link></navbar-item>
          <navbar-item v-if="$store.state.orderItems.length >= 1 && $route.path !== '/checkout'"><router-link to="/checkout">Checkout</router-link></navbar-item>
        </navbar-nav>
        <!-- Search form -->
        <form class="form-inline">
          <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
        </form>
      </navbar-collapse>
    </Navbar>

    <router-view/>

    <VueModal v-if="this.$store.state.showModal" id="VueModal" :title="this.$store.state.modalTitle" :myclass="this.$store.state.modalSize" :headeron="this.$store.state.modalHeader" :footeron="this.$store.state.modalFooter" :content="this.$store.state.modalContent">
      <About v-if="this.$store.state.showAbout"/>
      <Cart v-if="this.$store.state.showCart"/>
    </VueModal>
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

