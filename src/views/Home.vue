<template>
  <div class="home row">
    <div class="col-2"></div>
    <div class="col-8">
      <List/>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';


export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      store: this.$store,
      showGrid: true,
    }
  },
    mounted() {
      //1st
      this.$store.dispatch({
          type: 'loadGlobalVariables'
      }).then((response) => {
          console.log('-loadGlobalVariables resolved');

          //2nd
          this.$store.dispatch({
              type: 'getStorageStatus'
          }).then((storageExits) => {
              console.log('--getStorageStatus resolved');

              //3rd
              if (storageExits) {
                  //console.clear()

                  //4th
                  this.$store.dispatch({
                      type: 'loadWarehouse'
                  }).then((res) => {
                      console.log('---loadWarehouse resolved');

                      //5th
                      this.$store.dispatch({
                          type: 'loadCart',
                          warehouseId: res,
                          cartType: 5 //Retail
                      }).then((res) => {
                          console.log('----loadCart resolved');
                          this.$store.dispatch("setOrderFromStorage");

                      })
                  })
              }
              else {
                  //4th
                  this.$store.dispatch({
                      type: 'createToken'
                  }).then((response) => {
                      console.log(response)
                      console.log('Token Created')
                      if (response.length > 0) {
                          //alert('stop1')
                          this.$store.dispatch({
                              type: 'populateStorage',
                              t: response
                          }).then((res) => {
                              console.log(res);
                              console.log('populateStorage resolved');
                              this.$store.dispatch({
                                  type: 'loadWarehouse'
                              }).then((res) => {
                                  console.log(res);
                                  console.log('---loadWarehouse resolved');
                                  this.$store.dispatch({
                                      type: 'loadCart'
                                  }).then((res) => {
                                      console.log(res);
                                      console.log('----loadCart resolved');
                                      this.$store.dispatch("setOrderFromStorage");
                                  })
                              })
                          })
                      }
                      else {
                          //Try again
                      }
                  })
              }

          })

      }).catch(x => console.log(x));
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
