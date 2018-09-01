<template>
  <div class="summary row">
  	<div class="col-2"></div>
  	<div class="col-8">
	  	<h1>Cart Summary</h1><br>
	  	<div class="row">
	    	<div class="col-8">
    	    <navbar class="grey lighten-3" dark style="margin-bottom:50px;" v-if="$store.state.itemsNotAutoship">
			   		<h3>TODAY'S ITEMS</h3>
			    </navbar>
	    		<Cart :hideradio="true" :hidedelete="true"/>
		    </div>
		    <div class="col-4">
		        <Cart :sidebar="true"/>
		    </div>
	  	</div>
  	</div>
  	<div class="col-2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';


export default {
  name: 'summary',
  components: {
    
  },
  data(){
    return{
      store: this.$store,
      showGrid: true,
    }
  },
  props: {

  },
  computed: {
    state(){
      return this.store.state
    },
    
  },
  methods: {
   showModal(slot, size, title, content, header,footer){
      var modalObject = {};
      modalObject.slot = slot;
      modalObject.size = size;
      modalObject.title = title;
      modalObject.content = content;
      modalObject.header = header;
      modalObject.footer = footer;
      this.$store.dispatch("modalAction", modalObject);
    },
  }
}
</script>
