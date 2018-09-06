import store from '@/store'
import global from './global'

const modules = {
    store,
    global
};

const state = {
    orderItems: [],
    orderTotal: 0,
    quantity: 1,
};

const mutations = {
    //addItemToCart: (state, payload) => {
    //     console.log(payload);
    //     payload.quantity = state.quantity;
    //     if(payload.autoship){
    //       payload.itemTotal = state.quantity * payload.Prices[2].Cost;
    //     }else{
    //       payload.itemTotal = state.quantity * payload.Prices[1].Cost; 
    //     }
    //     console.log(payload);
    //     state.orderItems.push(payload);
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

    //}

    asdf(state, payload) {
        try {
            var a = (function () {
                var d;
                function c() {
                    return payload;
                }
                return {
                    b: function () {
                        d = c();
                        if (d != null) {
                            Vue.set(state, 'asdf', d);
                        }
                        else {

                        }
                    }
                };
            })();
            return a.b();
        } catch (e) {

        }
    }
};

const actions = {
    async asdf({ dispatch, context, state }, payload) {
        try {
            //console.clear()
            console.log('asdf');
            var data = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });

            var a = (function () {
                alert('stop1')
                var d;
                function c() {
                    return data;
                }
                return {
                    b: function () {
                        alert('stop2')
                        d = c();
                        if (d != null) {
                            alert('stop3')
                            //If setting something
                            //state.asdf = d;
                            context.commit("asdf", d)

                            //If returning something
                            //return d;
                        }
                        else {

                        }
                    }
                };
            })();
            //If setting something
            await a.b();

            //If returning something
            //return await a.b();
        } catch (e) {
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
