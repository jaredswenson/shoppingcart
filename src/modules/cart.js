import store from '@/store'
import global from './global'
import products from './products'
import Vue from 'vue'

const modules = {
    store,
    global,
    products
};

const state = {
    orderItems: [],
    orderTotal: 0,
    quantity: 1,
    totalItemsInCart: 0,
    itemsInAutoship: false,
    itemsNotAutoship: false,
};

const mutations = {
    addItemToCart(state , payload) {
        payload.quantity = state.quantity;
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
            payload.inCart = true;
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
        this.dispatch("updateQuantity", 1)
        this.dispatch("checkForAutoship");
        // localStorage.setItem('order', JSON.stringify(state.orderItems));
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
        // localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    cancelOrder: (state) => {
        $.each(state.items, function (i, v) {
            v.inCart = false;
        });
        Vue.set(state, 'totalItemsInCart', 0)
        Vue.set(state, 'orderItems', []);
        Vue.set(state, 'orderTotal', 0);
        Vue.set(state, 'itemsInAutoship', false);
        localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    updateAutoship: (state, payload) => {
        var item = _.where(state.items, { Id: payload.item.Id })[0];
        var oItem = _.where(state.orderItems, { Id: payload.item.Id });
        if (oItem.length > 0) {
            if (payload.type == 'autoship') {
                oItem[0].autoship = true;
                oItem[0].itemTotal = oItem[0].quantity * oItem[0].Prices[2].Cost;
            } else {
                oItem[0].autoship = false;
                oItem[0].itemTotal = oItem[0].quantity * oItem[0].Prices[1].Cost;
            }
        }
        if (payload.type == 'autoship') {
            // item.autoship = true;
        } else {
            // item.autoship = false;
        }
        //Vue.set(state, item, payload);
        Vue.set(state, 'orderTotal', 0)
        $.each(state.orderItems, function (i, v) {
            state.orderTotal += v.itemTotal
        });
        //dispatch("checkForAutoship");
        localStorage.setItem('order', JSON.stringify(state.orderItems));
    },
    // setOrderFromStorage: (state, payload) => {
    //     var order = JSON.parse(localStorage.getItem('order'));
    //     var total = 0;
    //     var costTotal = 0;
    //     Vue.set(state, "orderItems", order);
    //     $.each(order, function (i, v) {
    //         var item = _.where(state.items, { Id: v.Id })[0];
    //         console.log(item);
    //         item.inCart = true;
    //         item.autoship = v.autoship;
    //         total += v.quantity;
    //         costTotal += v.itemTotal;
    //     });
    //     Vue.set(state, 'totalItemsInCart', total);
    //     Vue.set(state, 'orderTotal', costTotal);
    // },
    checkForAutoship: (state, payload) => {
        var autoship = _.where(state.orderItems, { autoship: true });
        var nonAutoship = _.where(state.orderItems, { autoship: false });
        if (autoship.length > 0) {
            Vue.set(state, 'itemsInAutoship', true);
        } else {
            Vue.set(state, 'itemsInAutoship', false);
        }
        if (nonAutoship.length > 0) {
            Vue.set(state, 'itemsNotAutoship', true);
        } else {
            Vue.set(state, 'itemsNotAutoship', false);
        }
    },
    updateQuantity: (state, payload) => {
        Vue.set(state, 'quantity', payload);
    },
};

const actions = {
    addItemToCart(context, payload) {
        context.commit('addItemToCart', payload)
    },
    deleteItemFromCart(context, payload) {
        context.commit('deleteItemToCart', payload)
    },
    cancelOrder: (context) => {
        context.commit("cancelOrder", )
    },
    updateAutoship: (context, payload) => {
        context.commit("updateAutoship", payload)
    },
    setOrderFromStorage: (context, payload) => {
        context.commit("setOrderFromStorage", payload)
    },
    checkForAutoship: (context) => {
        context.commit("checkForAutoship")
    },
    updateQuantity: (context, payload) => {
        context.commit("updateQuantity", payload)
    },

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
