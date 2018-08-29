import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [{
      "id": 1,
      "make": "Volkswagen",
      "model": "GTI",
      "price": 8.31,
      "Category": "European"
    }, {
      "id": 2,
      "make": "Mercedes-Benz",
      "model": "E-Class",
      "price": 2.13,
      "Category": "European"
    }, {
      "id": 3,
      "make": "Ford",
      "model": "LTD Crown Victoria",
      "price": 1.05,
      "Category": "American"
    }, {
      "id": 4,
      "make": "Lamborghini",
      "model": "Gallardo",
      "price": 6.30,
      "Category": "European"
    }, {
      "id": 5,
      "make": "GMC",
      "model": "Safari",
      "price": 6.88,
      "Category": "American"
    }, {
      "id": 6,
      "make": "Toyota",
      "model": "Tacoma",
      "price": 1.54,
      "Category": "Japanese"
    }, {
      "id": 7,
      "make": "Oldsmobile",
      "model": "Cutlass",
      "price": 3.13,
      "Category": "American"
    }, {
      "id": 8,
      "make": "Dodge",
      "model": "Neon",
      "price": 7.60,
      "Category": "American"
    }, {
      "id": 9,
      "make": "Ford",
      "model": "E-Series",
      "price": 8.03,
      "Category": "American"
    }, {
      "id": 10,
      "make": "Isuzu",
      "model": "Amigo",
      "price": 8.77,
      "Category": "Japanese"
    }, {
      "id": 11,
      "make": "Nissan",
      "model": "300ZX",
      "price": 7.35,
      "Category": "Japanese"
    }, {
      "id": 12,
      "make": "Suzuki",
      "model": "Samurai",
      "price": 6.58,
      "Category": "Japanese"
    }, {
      "id": 13,
      "make": "Land Rover",
      "model": "Range Rover",
      "price": 0.38,
      "Category": "European"
    }, {
      "id": 14,
      "make": "Jeep",
      "model": "Cherokee",
      "price": 9.93,
      "Category": "American"
    }, {
      "id": 15,
      "make": "Chevrolet",
      "model": "Avalanche 2500",
      "price": 2.03,
      "Category": "American"
    }, {
      "id": 16,
      "make": "Chrysler",
      "model": "LHS",
      "price": 0.76,
      "Category": "American"
    }, {
      "id": 17,
      "make": "Chevrolet",
      "model": "Suburban",
      "price": 1.38,
      "Category": "American"
    }, {
      "id": 18,
      "make": "Ford",
      "model": "Expedition",
      "price": 3.19,
      "Category": "American"
    }, {
      "id": 19,
      "make": "Cadillac",
      "model": "Escalade",
      "price": 9.17,
      "Category": "American"
    }, {
      "id": 20,
      "make": "Scion",
      "model": "xB",
      "price": 2.12,
      "Category": "Japanese"
    }],
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
    currentItem: {},
  	showModal: false,
  	modalFooter: true,
  	modalHeader: true,
  	modalSize: 'md',
  	modalTitle: 'Modal',
  	modalContent: '',
 	  showAbout: false,
    showCart: false,
    search: '',
  },
  mutations: {
 	setModal(state, payload) {
      //need to set all components in the modal to false first, so multiple don't show up
      Vue.set(state, 'showAbout', false);
      Vue.set(state, 'showTemplate', false);
      
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
      payload.itemTotal = state.quantity * payload.price;
      var index = state.orderItems.indexOf(payload);
      if(index > -1){
        state.orderItems[index].quantity = state.quantity;
      }else{
        payload.inCart = true;
        state.orderItems.push(payload);
      }
      Vue.set(state, 'orderTotal', 0)
      $.each(state.orderItems, function(i,v){
          state.orderTotal += v.itemTotal
        })
      this.dispatch("updateQuantity", 1);
    },
    deleteItemFromCart(state, payload) {
      state.orderTotal = state.orderTotal - payload.itemTotal;
      var index = state.orderItems.indexOf(payload);
      if (index > -1) {
        payload.inCart = false;
        state.orderItems.splice(index, 1);
      }
    },
    setCurrentItem(state, payload){
      Vue.set(state, 'currentItem', payload)
    },
    updateQuantity: (state, payload) =>{
      Vue.set(state, 'quantity', payload);
    },
    setCategory: (state, payload) =>{
      Vue.set(state, 'category', payload);
    },
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
  },
  getters: {

  }
})
