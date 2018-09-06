const state = {
    orderItems:  [],
    orderTotal: 0,
    quantity: 1,
};

const mutations = {
	addItemToCart: (state, payload) => {
      console.log(payload);
      payload.quantity = state.quantity;
      if(payload.autoship){
        payload.itemTotal = state.quantity * payload.Prices[2].Cost;
      }else{
        payload.itemTotal = state.quantity * payload.Prices[1].Cost; 
      }
      console.log(payload);
      state.orderItems.push(payload);
      // store.state.orderItems = state.orderItems;
      // var index = state.orderItems.indexOf(payload);
      // if(index > -1){
      //   state.orderItems[index].quantity = state.quantity;
      //   if(state.quantity <= 0){
      //     this.dispatch("deleteItemFromCart", payload);
      //   }
      // }else{
      //   payload.inCart = true;
      //   state.orderItems.push(payload);
      // }

      // Vue.set(state, 'orderTotal', 0)
      // $.each(state.orderItems, function(i,v){
      //   state.orderTotal += v.itemTotal
      // })
      // var total = 0;
      //  $.each(state.orderItems, function(i,v){
      //    total += parseInt(v.quantity)
      //  });
      //  Vue.set(state, 'totalItemsInCart', total);
      // this.dispatch("updateQuantity", 1);
      // store.dispatch("checkForAutoship");

      //localStorage.setItem('order', JSON.stringify(state.orderItems));
      
    },
};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
