import Vue from 'vue'
import Vuex from 'vuex'
//Modules
//Various general purpose variables go into the global object.
//Variables which control the state of the user interface go into the ui object.
//The products and cart objects contain application specific data.
import global from './modules/global'
//import settings from './modules/settings'
//import ui from './modules/ui'
import products from './modules/products'
import cart from './modules/cart'

//import myjs from './assets/js/myjs';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        global,
        products,
        //, items
        //, settings
        //ui,
        cart
    },
    state: {
        asdf: null,
        items: [],
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
        userAccessToken: null,
        // cart: [
        //     {
        //         items: []
        //     }
        // ]
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
        async addItemToCart1({ commit }, payload) {
            //console.clear()
            //console.log(payload)
            console.log('addItemToCart')
            const a = await store.dispatch({ type: 'cart/asdf', p: payload.p });
            //const b = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
            //const c = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
            //const d = await store.dispatch({ type: 'addItemToCart', aaa: a, bbb: b, ccc: c });
            //console.log(d)
            console.log('addItemToCart resolved')
        },
        addItemToCart(state, payload) {
            // payload.quantity = state.quantity;
            // console.log(payload);
            // if (payload.autoship) {
            //     payload.itemTotal = state.quantity * payload.Prices[2].Cost;
            // } else {
            //     payload.itemTotal = state.quantity * payload.Prices[1].Cost;
            // }
            // var index = state.orderItems.indexOf(payload);
            // if (index > -1) {
            //     state.orderItems[index].quantity = state.quantity;
            //     if (state.quantity <= 0) {
            //         this.dispatch("deleteItemFromCart", payload);
            //     }
            // } else {
              console.log(payload)
                payload.inCart = true;
            //     state.orderItems.push(payload);
            // }
        },
        // deleteItemFromCart(state, payload) {
        //     state.orderTotal = state.orderTotal - payload.itemTotal;
        //     var index = state.orderItems.indexOf(payload);
        //     if (index > -1) {
        //         var item = _.where(state.items, { Id: payload.Id })[0];
        //         item.inCart = false;
        //         state.orderItems.splice(index, 1);
        //     }
        //     var total = 0;
        //     $.each(state.orderItems, function (i, v) {
        //         total += parseInt(v.quantity)
        //     });
        //     Vue.set(state, 'totalItemsInCart', total);
        //     store.dispatch("checkForAutoship");
        //     localStorage.setItem('order', JSON.stringify(state.orderItems));
        // },
        setCurrentItem(state, payload) {
            console.log('store', payload);
            Vue.set(state, 'currentItem', payload)
        },
        updateQuantity: (state, payload) => {
            Vue.set(state, 'quantity', payload);
        },
        setCategory: (state, payload) => {
            Vue.set(state, 'category', payload);
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
            console.log(payload);
            var item = _.where(state.items, { Id: payload.item.Id })[0];
            console.log(item);
            var oItem = _.where(state.orderItems, { Id: payload.item.Id });
            console.log(oItem);
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
                item.autoship = true;
            } else {
                item.autoship = false;
            }
            //Vue.set(state, item, payload);
            Vue.set(state, 'orderTotal', 0)
            $.each(state.orderItems, function (i, v) {
                state.orderTotal += v.itemTotal
            });
            store.dispatch("checkForAutoship");
            localStorage.setItem('order', JSON.stringify(state.orderItems));
        },
        setOrderFromStorage: (state, payload) => {
            var order = JSON.parse(localStorage.getItem('order'));
            var total = 0;
            var costTotal = 0;
            Vue.set(state, "orderItems", order);
            $.each(order, function (i, v) {
                var item = _.where(state.items, { Id: v.Id })[0];
                console.log(item);
                item.inCart = true;
                item.autoship = v.autoship;
                total += v.quantity;
                costTotal += v.itemTotal;
            });
            Vue.set(state, 'totalItemsInCart', total);
            Vue.set(state, 'orderTotal', costTotal);
        },
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
        loadCart: (state, payload) => {
            Vue.set(state, 'items', payload);
        }
    




    },
    actions: {
        loadGlobalVariables({ commit, state }) {
            console.log('-loadGlobalVariables')
            store.commit('global/setBaseUrl', { coreUrl: 'https://dev-core.xennbox.com/' });
            store.commit('global/setUserName', { userName: 'xennsoft' });
            store.commit('global/setUserPassword', { userPassword: 'Pa$$word123' });
            return new Promise(resolve => {
                var items = ['global items loaded',
                    { 'state.global.baseUrl': state.global.baseUrl }
                    , { 'state.global.userName': state.global.userName }
                    , { 'state.global.userPassword': state.global.userPassword }
                ];
                resolve(items);
            });
        },
        modalAction: (context, payload) => {
            context.commit("setModal", payload)
        },
        updateText: (context, payload) => {
            context.commit("setText", payload)
        },
        addItemToCart: (context, payload) => {
            context.commit('addItemToCart', payload );
            store.dispatch('cart/addItemToCart', payload );
        },
        async addItemToCart2({ commit, state }, payload) {
            //console.clear();
            console.log('addItemToCart2')
            const a = await store.dispatch({ type: 'cart/asdf', asdf: 'asdf' });
            const b = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
            const c = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
            const d = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
            //const e = await store.dispatch({ type: 'generateToken', url: a, username: b, password: c });

            console.log(a)
            console.log('addItemToCart2 resolved')
        },
        deleteItemFromCart: (context, payload) => {
            context.commit("cart/deleteItemFromCart", payload)
        },
        goToDetails: (context, payload) => {
            context.commit("setCurrentItem", payload)
        },
        updateQuantity: (context, payload) => {
            context.commit("updateQuantity", payload)
        },
        setCategory: (context, payload) => {
            context.commit("setCategory", payload)
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
        saveParty: (context) => {
            context.commit("saveParty")
        },
        setCurrentParty: (context, payload) => {
            context.commit("setCurrentParty", payload)
        },


        loadWarehouse: (context) => {
            console.log('---loadWarehouse')
            return new Promise(resolve => {
                resolve(1);
            });
        },


        async loadCart({ commit, state }, payload) {

            //console.clear()
            console.log('----loadCart')
            //console.log('payload')
            //console.log(payload.t)
            //console.log(payload.warehouseId)
            //console.log(payload.cartType)

            var data = await store.dispatch({ type: 'products/getInventoryItems', t: payload.t, warehouseId: payload.warehouseId, cartType: payload.cartType });

            console.log('-getInventoryItems resolved');
            var a = (function () {
                var d;
                function c() {
                    return data;
                }
                return {
                    b: function () {
                        d = c();
                        if (state.items > 0) {
                            state.items = [];
                        }
                        else {
                            $.each(d, function (i, v) {
                                v.autoship = false;
                                v.inCart = false;
                                v.itemTotal = 0;
                                v.quantity = 0;
                            })
                            Vue.set(state, 'items', d)
                            state.items = d;
                            //console.log(JSON.stringify(state.items))
                        }
                    }
                };
            })();
            await a.b();
        },
        async loadSimulatedCart({ commit, state }, payload) {

            //console.clear()
            console.log('----loadSimulatedCart')

            var data = await store.dispatch({ type: 'products/getSimulatedInventoryItems' });

            console.log('-getSimulatedInventoryItems resolved');
            var a = (function () {
                var d;
                function c() {
                    return data;
                }
                return {
                    b: function () {
                        d = c();
                        if (state.items > 0) {
                            state.items = [];
                        }
                        else {
                            $.each(d, function (i, v) {
                                v.autoship = false;
                                v.inCart = false;
                                v.itemTotal = 0;
                                v.quantity = 0;
                            })
                            Vue.set(state, 'items', d)
                            state.items = d;
                        }
                    }
                };
            })();
            await a.b();
        },


        getStorageStatus({ commit, state }) {
            console.log('--getStorageStatus')
            return new Promise(resolve => {

                var localStorageShoppingCart;

                if (state.global.access_token == null) {
                    localStorageShoppingCart = false;
                }
                else {
                    localStorageShoppingCart = true;
                }


                resolve(localStorageShoppingCart);
            });
        },


        async getBaseURL({ commit, state }) {
            var a = (function () {
                var data;
                return {
                    b: function () {
                        return data = state.global.coreUrl;
                    }
                };
            })();
            return await a.b();
        },
        async getUn({ commit, state }) {
            var a = (function () {
                var data;
                return {
                    b: function () {
                        return data = state.global.userName;
                    }
                };
            })();
            return await a.b();
        },
        async getPw({ commit, state }) {
            var a = (function () {
                var data;
                return {
                    b: function () {
                        return data = state.global.userPassword;
                    }
                };
            })();
            return await a.b();
        },


        async generateToken(context, payload) {
            console.log('------generateToken')
            try {
                var a = (function () {
                    var token = '';
                    var login_data = {
                        grant_type: 'password',
                        username: payload.username,
                        password: payload.password
                    };
                    var token_url = payload.url + '/token';
                    var d;

                    function c() {
                        var token_promise = $.ajax({
                            type: 'POST',
                            url: token_url,
                            data: login_data
                        });
                        return token_promise;
                    }

                    return {
                        b: function () {
                            try {
                                d = c();
                                if (d != null) {
                                    return d;
                                } else throw new Error('Attempting to generateToken')
                            } catch (e) {
                                console.log(e)
                            }
                        }
                    };
                })();
                return await a.b();
            } catch (e) {
                return e;
            }
        },
        async createToken(context) {
            console.log('-----createToken')
            const a = await store.dispatch({ type: 'getBaseURL' });
            const b = await store.dispatch({ type: 'getUn' });
            const c = await store.dispatch({ type: 'getPw' });
            const e = await store.dispatch({ type: 'generateToken', url: a, username: b, password: c });

            return e.access_token;
        },
        async getToken(context) {
            console.log('------getToken')
            return new Promise(resolve => {

                var token;

                if (state.global.access_token == null) {
                    //Get the token

                }
                else {
                    //Something went wrong try again
                }

                resolve(token);
            });
        },     
        async populateStorage({ state }, payload) {
            //async populateStorage(context, payload) {
            //console.clear()
            //console.log(payload)
            console.log('--------populateStorage')
            return new Promise(resolve => {
                if (1 == 1) {
                    store.commit('global/setAccessToken', { userAccessToken: payload });
                }
                else {
                    //Something went wrong try again
                }
                resolve(global.state.userAccessToken);
            });
        },
    },
    getters: {

    }
})