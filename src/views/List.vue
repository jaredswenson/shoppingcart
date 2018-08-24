<template>
  <div class="list">
    <VueButton @click.native="toggleView" v-if="gridView">List View</VueButton>
    <VueButton @click.native="toggleView" v-if="!gridView">Grid View</VueButton>
    <div class="row" v-if="gridView">
      <div class="col-3" v-for="item in $store.state.items" >
        <VueCard :title="item.make + ' ' + item.model" :text="'$'+item.price"><VueButton @click.native="addItemToCart(item)">Add</VueButton><VueButton color="secondary" @click.native="goToDetails(item)">View Details</VueButton></VueCard>
      </div>
    </div>
    <div class="row" v-if="!gridView">
      <div class="col-12" v-for="item in $store.state.items" >
        <VueCard :hideimage="true" :title="item.make + ' ' + item.model" :text="'$'+item.price"><VueButton @click.native="addItemToCart(item)">Add</VueButton></VueCard>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      gridView: true,
    }
  },
  methods: {
    addItemToCart(item){
      this.$store.dispatch("addItemToCart", item);
    },
    toggleView(){
      if(this.gridView){
        this.gridView = false;
      }else{
        this.gridView = true;
      }
    },
    goToDetails(item){
      this.$store.dispatch("goToDetails", item);
      this.showModal("showAbout", 'lg', item.make, '',true, false);
    },
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
  },
  computed: {
    
  },
}
</script>

