import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [{
      "id": 1,
      "make": "Volkswagen",
      "model": "GTI",
      "price": 8.31
    }, {
      "id": 2,
      "make": "Mercedes-Benz",
      "model": "E-Class",
      "price": 2.13
    }, {
      "id": 3,
      "make": "Ford",
      "model": "LTD Crown Victoria",
      "price": 1.05
    }, {
      "id": 4,
      "make": "Lamborghini",
      "model": "Gallardo",
      "price": 6.30
    }, {
      "id": 5,
      "make": "GMC",
      "model": "Safari",
      "price": 6.88
    }, {
      "id": 6,
      "make": "Toyota",
      "model": "Tacoma",
      "price": 1.54
    }, {
      "id": 7,
      "make": "Oldsmobile",
      "model": "Cutlass",
      "price": 3.13
    }, {
      "id": 8,
      "make": "Dodge",
      "model": "Neon",
      "price": 7.60
    }, {
      "id": 9,
      "make": "Ford",
      "model": "E-Series",
      "price": 8.03
    }, {
      "id": 10,
      "make": "Isuzu",
      "model": "Amigo",
      "price": 8.77
    }, {
      "id": 11,
      "make": "Nissan",
      "model": "300ZX",
      "price": 7.35
    }, {
      "id": 12,
      "make": "Suzuki",
      "model": "Samurai",
      "price": 6.58
    }, {
      "id": 13,
      "make": "Land Rover",
      "model": "Range Rover",
      "price": 0.38
    }, {
      "id": 14,
      "make": "Jeep",
      "model": "Cherokee",
      "price": 9.93
    }, {
      "id": 15,
      "make": "Chevrolet",
      "model": "Avalanche 2500",
      "price": 2.03
    }, {
      "id": 16,
      "make": "Chrysler",
      "model": "LHS",
      "price": 0.76
    }, {
      "id": 17,
      "make": "Chevrolet",
      "model": "Suburban",
      "price": 1.38
    }, {
      "id": 18,
      "make": "Ford",
      "model": "Expedition",
      "price": 3.19
    }, {
      "id": 19,
      "make": "Cadillac",
      "model": "Escalade",
      "price": 9.17
    }, {
      "id": 20,
      "make": "Scion",
      "model": "xB",
      "price": 2.12
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
    orderTotal: 0,
    currentItem: {},
  	showModal: false,
  	modalFooter: true,
  	modalHeader: true,
  	modalSize: 'md',
  	modalTitle: 'Modal',
  	modalContent: '',
 	  showAbout: false,
  	showTemplate: false,
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
      var index = state.orderItems.indexOf(payload);
      console.log(payload);
      if(index > -1){
        // var a = parseInt(payload.quantity);
        // var x = parseInt(state.orderItems[index].quantity)
        // var b = parseInt(state.quantity);
        // var c = a+b;
        // console.log('A',a)
        // console.log('B',b);
        // console.log("C",c);
        // console.log("X", x);
        // state.orderItems.splice(index, 1);
        // payload.quantity = c;
        // state.orderTotal = state.orderTotal + payload.itemTotal;
        // state.orderItems.push(payload)
      }else{
        state.orderItems.push(payload);
      }
      state.orderTotal = state.orderTotal + payload.itemTotal;

    },
    deleteItemFromCart(state, payload) {
      state.orderTotal = state.orderTotal - payload.itemTotal;
      var index = state.orderItems.indexOf(payload);
      if (index > -1) {
        state.orderItems.splice(index, 1);
      }
    },
    setCurrentItem(state, payload){
      Vue.set(state, 'currentItem', payload)
    },
    updateQuantity: (state, payload) =>{
      Vue.set(state, 'quantity', payload);
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
  },
  getters: {

  }
})
