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
        category: '',
        currentItem: {},
        showModal: false,
        modalFooter: true,
        modalHeader: true,
        modalSize: 'md',
        modalTitle: 'Modal',
        modalContent: '',
        showCancel: false,
        search: '',
        userAccessToken: null,
        cart: [
            {
                items: []
            }
        ]
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
      setCurrentItem(state, payload) {
          console.log('store', payload);
          Vue.set(state, 'currentItem', payload)
      },
      setCategory: (state, payload) => {
          Vue.set(state, 'category', payload);
      },
      loadCart: (state, payload) => {
          Vue.set(state, 'items', payload);
      },
      addItemToCart: (state, payload) => {
        console.log("store");
        var item = _.where(state.items, {Id: payload.Id})[0];
        console.log(item);
        Vue.set(item, "inCart", true);
        store.dispatch('cart/addItemToCart', payload);
      },
      deleteItemFromCart: (state, payload) => {
        var item = _.where(state.items, {Id: payload.Id})[0];
        Vue.set(item, "inCart", false);
        store.dispatch('cart/deleteItemFromCart', payload);
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
          context.commit('addItemToCart', payload)
        },
        deleteItemFromCart: (context, payload) => {
            context.commit('deleteItemFromCart', payload)
        },
        goToDetails: (context, payload) => {
            context.commit("setCurrentItem", payload)
        },
        updateQuantity: (context, payload) => {
            store.dispatch("cart/updateQuantity", payload)
        },
        setCategory: (context, payload) => {
            context.commit("setCategory", payload)
        },
        cancelOrder: (context) => {
            store.dispatch('cart/cancelOrder',)
        },
        updateAutoship: (context, payload) => {
            store.dispatch("cart/updateAutoship", payload)
        },
        // setOrderFromStorage: (context, payload) => {
        //     store.dispatch("cart/setOrderFromStorage", payload)
        // },
        // checkForAutoship: (context) => {
        //     context.commit("checkForAutoship")
        // },
        loadWarehouse: (context) => {
            console.log('---loadWarehouse')
            return new Promise(resolve => {
                resolve(1);
            });
        },


        async loadCart({ commit, state }, payload) {
            console.log('----loadCart')

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
                        }
                    }
                };
            })();
            await a.b();
        },
        async loadSimulatedCart({ commit, state }, payload) {
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