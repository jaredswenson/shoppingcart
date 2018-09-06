import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [
      {
        "id": 1,
        "make": "Volkswagen",
        "model": "GTI",
        "price": 8.31,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "European",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 2,
        "make": "Mercedes-Benz",
        "model": "E-Class",
        "price": 2.13,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "European",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 3,
        "make": "Ford",
        "model": "LTD Crown Victoria",
        "price": 1.05,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 4,
        "make": "Lamborghini",
        "model": "Gallardo",
        "price": 6.30,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "European",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 5,
        "make": "GMC",
        "model": "Safari",
        "price": 6.88,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 6,
        "make": "Toyota",
        "model": "Tacoma",
        "price": 1.54,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "Japanese",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 7,
        "make": "Oldsmobile",
        "model": "Cutlass",
        "price": 3.13,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 8,
        "make": "Dodge",
        "model": "Neon",
        "price": 7.60,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 9,
        "make": "Ford",
        "model": "E-Series",
        "price": 8.03,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 10,
        "make": "Isuzu",
        "model": "Amigo",
        "price": 8.77,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "Japanese",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 11,
        "make": "Nissan",
        "model": "300ZX",
        "price": 7.35,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "Japanese",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 12,
        "make": "Suzuki",
        "model": "Samurai",
        "price": 6.58,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "Japanese",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 13,
        "make": "Land Rover",
        "model": "Range Rover",
        "price": 0.38,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "European",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 14,
        "make": "Jeep",
        "model": "Cherokee",
        "price": 9.93,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 15,
        "make": "Chevrolet",
        "model": "Avalanche 2500",
        "price": 2.03,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 16,
        "make": "Chrysler",
        "model": "LHS",
        "price": 0.76,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 17,
        "make": "Chevrolet",
        "model": "Suburban",
        "price": 1.38,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 18,
        "make": "Ford",
        "model": "Expedition",
        "price": 3.19,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 19,
        "make": "Cadillac",
        "model": "Escalade",
        "price": 9.17,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "American",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }, 
      {
        "id": 20,
        "make": "Scion",
        "model": "xB",
        "price": 2.12,
        "autoshipPrice": 1,
        "autoship": false,
        "Category": "Japanese",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
      }
    ],
    gridView: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    state: '',
    country: '',
    shippingMethod: '',
    orderItems: [],
    quantity: 1,
    category: '',
    orderTotal: 0,
    totalItemsInCart: 0,
    currentItem: {},
  	showModal: false,
  	modalFooter: true,
  	modalHeader: true,
  	modalSize: 'md',
  	modalTitle: 'Modal',
  	modalContent: '',
    showCancel: false,
    showNewParty: false,
    search: '',
    itemsInAutoship: false,
    itemsNotAutoship: false,
    parties:[
      {
        "id": 1,
        "name": "Dare",
        "startDate": "3/13/2019",
        "endDate": "4/15/2018",
        "earnedPv": 1,
        "status": "strategy",
        "actions": "Distributed"
      }, {
        "id": 2,
        "name": "Isabelle",
        "startDate": "2/26/2019",
        "endDate": "10/12/2017",
        "earnedPv": 2,
        "status": "Digitized",
        "actions": "interface"
      }, {
        "id": 3,
        "name": "Mirella",
        "startDate": "9/20/2017",
        "endDate": "7/14/2018",
        "earnedPv": 3,
        "status": "solution-oriented",
        "actions": "protocol"
      }, {
        "id": 4,
        "name": "Esma",
        "startDate": "2/16/2018",
        "endDate": "6/14/2018",
        "earnedPv": 4,
        "status": "Universal",
        "actions": "Cloned"
      }, {
        "id": 5,
        "name": "Merwin",
        "startDate": "9/16/2018",
        "endDate": "1/12/2019",
        "earnedPv": 5,
        "status": "homogeneous",
        "actions": "Front-line"
      } 
    ],
    headers: [
      {"label":"ID", "field": "id", "sort": 'asc'}, 
      {"label":"Name", "field": "name", "sort": "asc"}, 
      {"label":"Start Date", "field": "start date", "sort": "asc"}, 
      {"label":"End Date", "field": "end date", "sort": "asc"}, 
      {"label":"Earned PV", "field": "earned pv", "sort": "asc"}, 
      {"label":"Status", "field": "status", "sort": "asc"},
      {"label":"Action", "field": "action", "sort": "asc"}
    ],
    hostName: '', 
    hostEmail: '',
    newStartDate: '',
    newEndDate: '',
    hostStatus: '',
    hostAction: '',
    currentParty: {}
  },
  mutations: {
 	setModal(state, payload) {
      //need to set all components in the modal to false first, so multiple don't show up
      Vue.set(state, 'showCancel', false);
      Vue.set(state, 'showNewParty', false);
      
      Vue.set(state, payload.slot, true);
      Vue.set(state, 'modalContent', payload.content);
      Vue.set(state, 'modalTitle', payload.title);
      Vue.set(state, 'modalSize', payload.size);
      Vue.set(state, 'modalHeader', payload.header);
      Vue.set(state, 'modalFooter', payload.footer);
      Vue.set(state, 'showModal', true);
      $('#VueModal').show();
    },
    setText(state, payload) {
      Vue.set(state, payload.key, payload.value);
    },
    addItemToCart(state, payload) {
      payload.quantity = state.quantity;

      if(payload.autoship){
        payload.itemTotal = state.quantity * payload.autoshipPrice;
      }else{
        payload.itemTotal = state.quantity * payload.price; 
      }
      var index = state.orderItems.indexOf(payload);
      if(index > -1){
        state.orderItems[index].quantity = state.quantity;
        if(state.quantity <= 0){
          this.dispatch("deleteItemFromCart", payload);
        }
      }else{
        payload.inCart = true;
        state.orderItems.push(payload);
      }
      Vue.set(state, 'orderTotal', 0)
      $.each(state.orderItems, function(i,v){
        state.orderTotal += v.itemTotal
      })
      var total = 0;
       $.each(state.orderItems, function(i,v){
         total += parseInt(v.quantity)
       });
       Vue.set(state, 'totalItemsInCart', total);
      this.dispatch("updateQuantity", 1);
      store.dispatch("checkForAutoship");

      localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    deleteItemFromCart(state, payload) {
      state.orderTotal = state.orderTotal - payload.itemTotal;
      var index = state.orderItems.indexOf(payload);      
      if (index > -1) {
        var item = _.where(state.items, {id: payload.id})[0];
        item.inCart = false;
        state.orderItems.splice(index, 1);
      }
       var total = 0;
       $.each(state.orderItems, function(i,v){
         total += parseInt(v.quantity)
       });
       Vue.set(state, 'totalItemsInCart', total);
       store.dispatch("checkForAutoship");
       localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    setCurrentItem(state, payload){
      console.log('store', payload);
      Vue.set(state, 'currentItem', payload)
    },
    updateQuantity: (state, payload) =>{
      Vue.set(state, 'quantity', payload);
    },
    setCategory: (state, payload) =>{
      Vue.set(state, 'category', payload);
    },
    cancelOrder: (state) =>{
      $.each(state.items, function(i,v){
        v.inCart = false;
      });
      Vue.set(state, 'totalItemsInCart', 0)
      Vue.set(state, 'orderItems', []);
      Vue.set(state, 'orderTotal', 0);
      Vue.set(state, 'itemsInAutoship', false);
      localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    updateAutoship: (state, payload) =>{
      var item = _.where(state.items, {id: payload.id})[0];
      var oItem = _.where(state.orderItems, {id: payload.id});
      if(oItem.length > 0){
        if(payload.autoship){
          oItem[0].itemTotal = oItem[0].quantity * oItem[0].autoshipPrice;
        } else{
          oItem[0].itemTotal = oItem[0].quantity * oItem[0].price;
        }
      }
      //Vue.set(state, item, payload);
      Vue.set(state, 'orderTotal', 0)
      $.each(state.orderItems, function(i,v){
        state.orderTotal += v.itemTotal
      });
      store.dispatch("checkForAutoship");
      localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    setOrderFromStorage: (state, payload) =>{
      var order =  JSON.parse(localStorage.getItem('order'));
      var total = 0;
      var costTotal = 0;
      Vue.set(state, "orderItems", order);
      $.each(order, function(i,v){
      var item = _.where(state.items,{id: v.id})[0];
        item.inCart = true;
        item.autoship = v.autoship;
        total += v.quantity;
        costTotal += v.itemTotal;
      });
      Vue.set(state, 'totalItemsInCart', total);
      Vue.set(state, 'orderTotal', costTotal);
    },
    checkForAutoship: (state, payload) =>{
      var autoship = _.where(state.orderItems,{autoship: true});
      var nonAutoship = _.where(state.orderItems,{autoship: false});
      if(autoship.length > 0){
        Vue.set(state, 'itemsInAutoship', true);
      }else{
        Vue.set(state, 'itemsInAutoship', false);
      }
      if(nonAutoship.length > 0){
        Vue.set(state, 'itemsNotAutoship', true);
      }else{
        Vue.set(state, 'itemsNotAutoship', false);
      }
    },
    saveParty: (state) => {
      var newParty = {};
      newParty.id = state.parties.length+1;
      newParty.name = state.hostName;
      newParty.startDate = state.newStartDate;
      newParty.endDate = state.newEndDate;
      newParty.earnedPv = Math.floor(Math.random() * 100);
      newParty.status = state.hostStatus;
      newParty.action = state.hostAction;
      state.parties.push(newParty);
      Vue.set(state, 'showModal', false);
      state.hostName = '';
      state.hostEmail = '';
      state.newStartDate = '';
      state.newEndDate = '';
      state.hostStatus = '';
      state.hostAction = '';
    },
    setCurrentParty: (state, payload) =>{
      Vue.set(state, 'currentParty', payload)
    }
  },
  actions: {
  	modalAction: (context, payload) => {
      context.commit("setModal", payload)
    },
    updateText: (context, payload) => {
      context.commit("setText", payload)
    },
    addItemToCart: (context, payload) =>{
      context.commit("addItemToCart", payload)
    },
    deleteItemFromCart: (context, payload) =>{
      context.commit("deleteItemFromCart", payload)
    },
    goToDetails: (context, payload) =>{
      context.commit("setCurrentItem", payload)
    },
    updateQuantity: (context, payload) =>{
      context.commit("updateQuantity", payload)
    },
    setCategory: (context, payload) =>{
      context.commit("setCategory", payload)
    },
    cancelOrder: (context) =>{
      context.commit("cancelOrder", )
    },
    updateAutoship: (context, payload) =>{
      context.commit("updateAutoship", payload)
    },
    setOrderFromStorage: (context, payload) =>{
      context.commit("setOrderFromStorage", payload)
    },
    checkForAutoship: (context) =>{
      context.commit("checkForAutoship")
    },
    saveParty: (context) =>{
      context.commit("saveParty")
    },
    setCurrentParty: (context, payload) =>{
      context.commit("setCurrentParty", payload)
    }
  },
  getters: {

  }
})
