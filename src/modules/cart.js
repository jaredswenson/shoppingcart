import cart from '../api/cart'
import store from '@/store'
import global from './global'
import Vue from 'vue'

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

    addItemToCart(state, payload) {
        payload.quantity = state.quantity;
        console.log(payload);
        if (payload.autoship) {
            payload.itemTotal = state.quantity * payload.Prices[2].Cost;
        } else {
            payload.itemTotal = state.quantity * payload.Prices[1].Cost;
        }
        var index = state.orderItems.indexOf(payload);
        if (index > -1) {
            state.orderItems[index].quantity = state.quantity;
            if (state.quantity <= 0) {
                this.dispatch("deleteItemFromCart", payload);
            }
        } else {
            //payload.inCart = true;
            state.orderItems.push(payload);
        }
        Vue.set(state, 'orderTotal', 0)
        $.each(state.orderItems, function (i, v) {
            state.orderTotal += v.itemTotal
        })
        var total = 0;
        $.each(state.orderItems, function (i, v) {
            total += parseInt(v.quantity)
        });
        Vue.set(state, 'totalItemsInCart', total);
        //this.dispatch("updateQuantity", 1);
        //this.dispatch("checkForAutoship");
        console.log(state.orderItems);
        localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    deleteItemFromCart(state, payload) {
        state.orderTotal = state.orderTotal - payload.itemTotal;
        var index = state.orderItems.indexOf(payload);
        if (index > -1) {
            var item = _.where(state.items, { Id: payload.Id })[0];
            item.inCart = false;
            state.orderItems.splice(index, 1);
        }
        var total = 0;
        $.each(state.orderItems, function (i, v) {
            total += parseInt(v.quantity)
        });
        Vue.set(state, 'totalItemsInCart', total);
        // store.dispatch("checkForAutoship");
        localStorage.setItem('order', JSON.stringify(state.orderItems));
    },

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
            
            var a = (function () {
                //alert('stop1')
                var d;
                function c() {
                    alert();
                    //return await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
                }
                return {
                    async b({ dispatch }) {
                    //b: function () {
                        alert('stop2')
                        
                        d = await c();
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
    },
    addItemToCart(context, payload) {
        context.commit('addItemToCart', payload)
    },
    deleteItemToCart(context, payload) {
        context.commit('deleteItemToCart', payload)
    },
    checkout({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)
        // empty cart
        commit('setCartItems', { items: [] })
        cart.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems })
            }
        )
    },
    async createOrder({ commit, state }) {
        var a = (function () {
            var d;
            function c() {
                var url = global.state.coreUrl + '/' + 'api/Cart/Create' + '/' + '1' + '/' + 'WP_Retail';
                var ccc = $.ajax({
                    type: 'POST',
                    url: url,
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8',
                    headers: global.state.headers
                });
                return ccc;
            }
            return {
                b: function () {
                    return d = c();
                }
            };
        })();
        return await a.b();
    },

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
