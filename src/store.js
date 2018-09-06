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
//import cart from './modules/cart'

//import myjs from './assets/js/myjs';

Vue.use(Vuex)






export const store = new Vuex.Store({
    modules: {
        global
        , products
        //, items
        //, settings
        //ui,
        //cart
    },
    state: {
        items: [
            {
                "id": 1,
                "make": "Volkswagen",
                "model": "GTI",
                "price": 8.31
            },
            {
                "id": 2,
                "make": "Mercedes-Benz",
                "model": "E-Class",
                "price": 2.13
            },
            {
                "id": 3,
                "make": "Ford",
                "model": "LTD Crown Victoria",
                "price": 1.05
            },
            {
                "id": 4,
                "make": "Lamborghini",
                "model": "Gallardo",
                "price": 6.30
            },
            {
                "id": 5,
                "make": "GMC",
                "model": "Safari",
                "price": 6.88
            },
            {
                "id": 6,
                "make": "Toyota",
                "model": "Tacoma",
                "price": 1.54
            },
            {
                "id": 7,
                "make": "Oldsmobile",
                "model": "Cutlass",
                "price": 3.13
            },
            {
                "id": 8,
                "make": "Dodge",
                "model": "Neon",
                "price": 7.60
            },
            {
                "id": 9,
                "make": "Ford",
                "model": "E-Series",
                "price": 8.03
            },
            {
                "id": 10,
                "make": "Isuzu",
                "model": "Amigo",
                "price": 8.77
            },
            {
                "id": 11,
                "make": "Nissan",
                "model": "300ZX",
                "price": 7.35
            },
            {
                "id": 12,
                "make": "Suzuki",
                "model": "Samurai",
                "price": 6.58
            },
            {
                "id": 13,
                "make": "Land Rover",
                "model": "Range Rover",
                "price": 0.38
            },
            {
                "id": 14,
                "make": "Jeep",
                "model": "Cherokee",
                "price": 9.93
            },
            {
                "id": 15,
                "make": "Chevrolet",
                "model": "Avalanche 2500",
                "price": 2.03
            },
            {
                "id": 16,
                "make": "Chrysler",
                "model": "LHS",
                "price": 0.76
            },
            {
                "id": 17,
                "make": "Chevrolet",
                "model": "Suburban",
                "price": 1.38
            },
            {
                "id": 18,
                "make": "Ford",
                "model": "Expedition",
                "price": 3.19
            },
            {
                "id": 19,
                "make": "Cadillac",
                "model": "Escalade",
                "price": 9.17
            },
            {
                "id": 20,
                "make": "Scion",
                "model": "xB",
                "price": 2.12
            }
        ],
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
        showTemplate: false
        , doStuffStuff: []
        , getStuffStuff: []
        , warehouseId: 0
        , token: null
    },
    mutations: {
        setBaseUrl(store, { baseUrl }) {
            store.baseUrl = baseUrl;
        },
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
            if (index > -1) {
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
            } else {
                state.orderItems.push(payload);
            }
            state.orderTotal = state.orderTotal + payload.itemTotal;
            this.dispatch("updateQuantity", 1);

        },
        deleteItemFromCart(state, payload) {
            state.orderTotal = state.orderTotal - payload.itemTotal;
            var index = state.orderItems.indexOf(payload);
            if (index > -1) {
                state.orderItems.splice(index, 1);
            }
        },
        setCurrentItem(state, payload) {
            Vue.set(state, 'currentItem', payload)
        },
        updateQuantity: (state, payload) => {
            Vue.set(state, 'quantity', payload);
        },
        doStuff: (state, payload) => {
            Vue.set(state, 'doStuffStuff', payload);
        },
        getStuffMutation: (state, payload) => {
            state.getStuffStuff.push(payload);
            Vue.set(state, 'getStuffStuff', payload);
        },
        setMutationA: (state, payload) => {
            console.log('setMutationA')
            //console.log(payload)
            //console.log(payload.token)
            Vue.set(state, 'token', payload.token);
        },
        setMutationB: (state, payload) => {
            console.log('setMutationB')
            console.log(payload)
            state.getStuffStuff.push(payload);
            Vue.set(state, 'getStuffStuff', state.getStuffStuff);
        },
        setMutationC: (state, payload) => {
            console.log('setMutationC')
            console.log(payload)
            state.getStuffStuff.push(payload);
            Vue.set(state, 'getStuffStuff', state.getStuffStuff);
        }
        , loadCart: (state, payload) => {
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
                setTimeout(() => {
                    var items = ['global items loaded',
                        { 'state.global.baseUrl': state.global.baseUrl }
                        , { 'state.global.userName': state.global.userName }
                        , { 'state.global.userPassword': state.global.userPassword }
                    ];
                    resolve(items);
                }, .2000);
            });
        },
        modalAction: (context, payload) => {
            context.commit("setModal", payload)
        },
        updateText: (context, payload) => {
            context.commit("setText", payload)
        },
        addItemToCart: (context, payload) => {
            context.commit("addItemToCart", payload)
        },
        deleteItemFromCart: (context, payload) => {
            context.commit("deleteItemFromCart", payload)
        },
        goToDetails: (context, payload) => {
            context.commit("setCurrentItem", payload)
        },
        updateQuantity: (context, payload) => {
            context.commit("updateQuantity", payload)
        },


        fakeAJAXcall: (context, time) => {
            const waitTime = time.seconds * 1000;
            return new Promise(resolve => {
                setTimeout(() => {

                    var payload = [
                        {
                            "id": 1,
                            "make": "Volkswagen",
                            "model": "GTI",
                            "price": 8.31
                        },
                        {
                            "id": 2,
                            "make": "Mercedes-Benz",
                            "model": "E-Class",
                            "price": 2.13
                        },
                        {
                            "id": 3,
                            "make": "Ford",
                            "model": "LTD Crown Victoria",
                            "price": 1.05
                        },
                        {
                            "id": 4,
                            "make": "Lamborghini",
                            "model": "Gallardo",
                            "price": 6.30
                        },
                        {
                            "id": 5,
                            "make": "Cadillac",
                            "model": "Escalade",
                            "price": 9.17
                        },
                        {
                            "id": 6,
                            "make": "Scion",
                            "model": "xB",
                            "price": 2.12
                        }
                    ];

                    resolve(payload);
                }, waitTime);
            });
        },
        resolveAfter10Seconds: (context) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(10);
                }, 10000);
            });
        },
        resolveAfter5Seconds: (context) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(5);
                }, 5000);
            });
        },
        resolveAfter0Seconds: (context) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(0);
                }, .5000);
            });
        },


        loadWarehouse: (context) => {
            console.log('---loadWarehouse')
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(1);
                }, .2000);
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
                            state.items = d
                            console.log(state.items)
                        }
                    }
                };
            })();
            await a.b();
        },
        loadCart2({ commit, state }, payload) {
            //console.clear()
            console.log('loadCart')
            //console.log(payload)
            //console.log(state.items)
            //console.table(state.items)

            console.log('--393--');
            store.dispatch({ type: 'doubleAfter2Seconds' })
            console.log('--395--');

            return new Promise(resolve => {


                console.log('--400--');
                if (state.items > 0) {
                    state.items = [];
                }
                else {
                    state.items = [
                        {
                            "id": 1,
                            "make": "Volkswagen",
                            "model": "GTI",
                            "price": 8.31
                        },
                        {
                            "id": 2,
                            "make": "Mercedes-Benz",
                            "model": "E-Class",
                            "price": 2.13
                        },
                        {
                            "id": 3,
                            "make": "Ford",
                            "model": "LTD Crown Victoria",
                            "price": 1.05
                        },
                        {
                            "id": 4,
                            "make": "Lamborghini",
                            "model": "Gallardo",
                            "price": 6.30
                        },
                        {
                            "id": 5,
                            "make": "Cadillac",
                            "model": "Escalade",
                            "price": 9.17
                        },
                        {
                            "id": 6,
                            "make": "Scion",
                            "model": "xB",
                            "price": 2.12
                        }
                    ];
                }




                //setTimeout(() => {
                console.log('--449--');
                //context.commit('loadCart', payload)
                resolve('done loading cart');
                console.log('--452--');
                //}, 12000);
            });
        },


        getStorageStatus({ commit, state }) {
            console.log('--getStorageStatus')
            return new Promise(resolve => {
                setTimeout(() => {

                    var localStorageShoppingCart;

                    if (state.global.access_token == null) {
                        localStorageShoppingCart = false;
                    }
                    else {
                        localStorageShoppingCart = true;
                    }


                    resolve(localStorageShoppingCart);
                }, 2000);
            });
        },


        async getBaseURL(context) {
            var a = (function () {
                var data;
                return {
                    b: function () {
                        return data = 'https://dev-core.xennbox.com';
                        //theToken = store.dispatch({ type: 'createToken' });
                    }
                };
            })();
            return await a.b();
        },
        async getUn(context) {
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
        async getPw(context) {
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
            const d = await store.dispatch({ type: 'resolveAfter0Seconds' });
            const e = await store.dispatch({ type: 'generateToken', url: a, username: b, password: c });

            return e.access_token;
        },
        async getToken(context) {
            console.log('------getToken')
            return new Promise(resolve => {
                setTimeout(() => {

                    var token;

                    if (state.global.access_token == null) {
                        //Get the token

                    }
                    else {
                        //Something went wrong try again
                    }

                    resolve(token);
                }, .2000);
            });
        },
        async populateStorage(context, payload) {












            //console.clear()
            console.log('--------populateStorage')







            return new Promise(resolve => {

                var sc;



                if (localStorage.getItem("ShoppingCart") == null) {

                    //Clear the cart as a precaution
                    localStorage.removeItem("ShoppingCart");


                    var t = { t: payload };
                    localStorage.setItem("ShoppingCart", JSON.stringify(t));

                    console.log(t)
                    console.log(localStorage.getItem("ShoppingCart"))
                    console.log(localStorage)


                    var shoppingCart = JSON.parse(
                        localStorage.getItem("ShoppingCart")
                    );


                    console.log(shoppingCart.t)

                    //alert('stop2')

                }
                else {
                    console.log(localStorage.getItem("ShoppingCart"))
                    //Something went wrong try again
                }

                resolve(sc);





            });












        }

    },
    getters: {

    }
})
