<template>
  <div class="list">

    <div id="categories">
       <div class="row show-grid xen-cart-banner m-t-10 m-b-8">
          <div class="col-xs-6 col-lg-8">
             <h1 id="xen-cart-heading" class="m-b-3" role="banner" categorywidgettransval="Products">Products</h1>
          </div>
          <div class="col-xs-6 col-lg-4">
             <div id="xen-cart-search">
                <div id="xen-cart-search-container">
                   <div id="xen-cart-search-input" class="form-group bmd-form-group bmd-form-group-sm is-empty d-inline-block">                                 
                   <!--<label for="search" class="bmd-label-floating">Search</label>  -->                               
                    <VueText size="sm" model="search" label="Search"/>                          
                   </div>
                </div>
               <!-- <i class="fa fa-search fa-lg d-inline-block"></i> -->                   
             </div>
          </div>
       </div>
       <navbar style="margin-bottom:10px;">
        <navbar-collapse>
          <navbar-nav>
            <navbar-item v-for="item in uniqCategory" @click.native="setCategory(item)" :class="item">{{item}}</navbar-item>
          </navbar-nav>
          <span class="navbar-text">
            <navbar-nav>
              <navbar-item @click.native="toggleView('list')" class="list"><i class="fa fa-th-list fa-lg"></i></navbar-item>
              <navbar-item @click.native="toggleView('grid')" class="grid"><i class="fa fa-th-large fa-lg"></i></navbar-item>
            </navbar-nav>
          </span>
        </navbar-collapse>
      </navbar>
    </div>
    <div class="row" v-if="$store.state.gridView">
      <div class="xen-cart-column col-lg-4 col-sm-6 m-b-3" v-for="item in filterItems" v-if="item.Category == $store.state.category || $store.state.category == ''">
        <VueCard :item="item"/>
      </div>
    </div>
    <div class="row" v-if="!$store.state.gridView">
      <div class="col-12" v-for="item in filterItems" v-if="item.Category == $store.state.category || $store.state.category == ''">
        <VuePanel :item="item"/>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data(){
    return{
      
    }
  },
  mounted() {
    if(this.$store.state.gridView){
      $('.list').removeClass('active');
      $('.grid').addClass('active');
    }else{
      $('.grid').removeClass('active');
      $('.list').addClass('active');
    }
  },
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
    setCategory(item){
      $.each(this.uniqCategory, function(i,v){
        $('.' + v).removeClass('active');
      })
      if(item == this.$store.state.category){
        this.$store.commit("setCategory", '');

      }else{
        this.$store.commit("setCategory", item);
        $('.' + item).addClass('active');
      }
    },
    toggleView(view){
      if(view == "grid"){
        this.$store.state.gridView = true;
        $('.list').removeClass('active');
        $('.grid').addClass('active');
      } else{
        this.$store.state.gridView = false;
        $('.grid').removeClass('active');
        $('.list').addClass('active');
      }
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
    uniqCategory(){
      var items = this.$store.state.items;
      var arr = []
      $.each(items, function(i,v){
        arr.push(v.Category);
      });
      var blah = _.uniq(arr);
      return blah
    },
    filterItems(){
      var self = this;
      return this.$store.state.items.filter(function(item){
        return item.make.toLowerCase().indexOf(self.$store.state.search.toLowerCase())>=0;
        }
      )
    },
    orderSize(){
    console.log('hi');
     var order = this.$store.state.orderItems;
     var total = 0;
     $.each(order, function(i,v){
      return total += parseInt(v.quantity)
     });
     return total
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>