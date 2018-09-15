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
import shipping from './modules/shipping'
import payment from './modules/payment'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        global,
        products,
        //, settings
        //ui,
        cart,
        shipping,
        payment
    },
    state: {
        items: [],
        gridView: false,
        firstName: 'test',
        lastName: 'tester',
        email: 'a@b.com',
        phone: '801-910-1112',
        streetAddress: '12162 S Business Park Dr.',
        city: 'Draper',
        zipCode: '84020',
        state: 'UT',
        country: 'USA',
        shippingMethod: '',
        orderItems: [],
        quantity: 1,
        category: '',
        orderId: 0,
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
        a: {
            b: 'start',
            c: []
        },
        shippingMethods: []

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
            alert()
            payload.quantity = state.quantity;
            if (state.quantity > payload.OnHand) {
                //alert("Max Quantity For This Item Is " + payload.OnHand);
                state.quantity = payload.OnHand;
            }
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
            this.dispatch("updateQuantity", 1);
            store.dispatch("checkForAutoship");

            localStorage.setItem('order', JSON.stringify(state.orderItems));
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
            store.dispatch("checkForAutoship");
            localStorage.setItem('order', JSON.stringify(state.orderItems));
        },
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

        setAccessToken: (state, payload) => {
            Vue.set(state, 'userAccessToken', payload);
            //console.log(state.userAccessToken)
        },
        loadCart: (state, payload) => {
            Vue.set(state, 'items', payload);
        },

        // Jared here's the API response you requested, I guessed on the name of the array.
        setOrderId(state, payload) {
            Vue.set(state, 'orderId', payload);
            console.log(state.orderId)
        },
        setShippingMethods(state, payload) {
            Vue.set(state, 'shippingMethods', payload);
            console.log(state.shippingMethods)
        },



    },
    actions: {
        modalAction: (context, payload) => {
            context.commit("setModal", payload)
        },
        updateText: (context, payload) => {
            context.commit("setText", payload)
        },
        addItemToCart: (context, payload) => {
            //alert('stop - store.js - loadPayment')
            console.clear()
            console.log('addItemToCart');

            const a = localStorage.getItem('token');
            console.log(a)
            const b = null;
            const c = null;
            if (a.length > 0) {
                console.log(a.length)
                context.commit("addItemToCart", payload)
                console.log('addItemToCart resolved');

            }
            else {
                a = store.dispatch('global/setHeaders')
                if (a) {
                    context.commit("addItemToCart", payload)
                    console.log('addItemToCart resolved');

                } else alert('no headers');
            }
        },
        async addItemToCart2({ context, state }, payload) {
            state.a.b = 'store.js - addItemToCart';
            //alert('stop - store.js - loadPayment')
            console.clear()
            console.log('addItemToCart');

            const a = await localStorage.getItem('token');
            console.log(a)
            const b = null;
            const c = null;
            if (a.length > 0) {
                console.log(a.length)
                console.log('addItemToCart resolved');

            }
            else {
                a = await store.dispatch('global/setHeaders')
                if (a) {
                    context.commit("addItemToCart", payload)
                    console.log('addItemToCart resolved');

                } else alert('no headers');
            }



            alert('1')
            context.commit("addItemToCart", payload)

            alert('2')





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
        setCategory: (context, payload) => {
            context.commit("setCategory", payload)
        },
        cancelOrder: (context) => {
            context.commit("cancelOrder", )
        },
        updateAutoship: (context, payload) => {
            context.commit("updateAutoship", payload)
        },
        //setOrderFromStorage: (context, payload) => {
        //    context.commit("setOrderFromStorage", payload)
        //},
        checkForAutoship: (context) => {
            context.commit("checkForAutoship")
        },
        saveParty: (context) => {
            context.commit("saveParty")
        },
        setCurrentParty: (context, payload) => {
            context.commit("setCurrentParty", payload)
        },










        async setGlobalHeaders({ state }) {
            try {
                var c = await store.dispatch('global/setHeaders');
                var a = (function () {
                    return {
                        b: function () {
                            var d = c;
                            return new Promise(resolve => {
                                //console.log('state.global.headers', state.global.headers)
                                if (c) {
                                    d = true;
                                }
                                resolve(d);
                            });
                        }
                    };
                })();
                return await a.b();
            } catch (e) {
                console.error(e)
            }
        },
        async localTokenExists() {
            try {
                var a = (function () {
                    return {
                        b: function () {
                            //localStorage.removeItem('token')
                            var c = localStorage.getItem('token').length > 0;
                            var d = false;
                            return new Promise(resolve => {
                                if (c) {
                                    d = true;
                                }
                                resolve(d);
                            });
                        }
                    };
                })();
                return await a.b();
            } catch (e) {
                alert('error')
            }
        },
        async headersAreValid({ state }) {
            try {
                var a = (function () {
                    function c() {
                        var isValid = false;
                        //If the headers.Authorization has not been set yet it will return undefined.
                        var response = state.global.headers.Authorization;
                        if (typeof (response) !== 'undefined') {
                            isValid = true;
                        }
                        return isValid;
                    }
                    return {
                        b: function () {
                            var d = false;
                            if (c()) {
                                d = true;
                            }
                            else {
                                //fix it
                                store.dispatch('setGlobalHeaders');
                                if (state.global.headers.Authorization.length > 0) {
                                    //console.log('state.global.headers.Authorization', state.global.headers.Authorization)
                                    d = true;
                                }
                            }
                            return d;
                        }
                    };
                })();
                return await a.b();
            } catch (e) {
                console.error(e)
            }
        },
        async headersOk({ dispatch, context, state }, payload) {
            const localTokenExists = await store.dispatch({ type: 'localTokenExists' });
            const headersAreValid = await store.dispatch({ type: 'headersAreValid' });
            var isValid = false;
            if (localTokenExists && headersAreValid) {
                console.log('localTokenExists:', localTokenExists)
                console.log('headersAreValid:', headersAreValid)
                isValid = true;
            }
            return isValid;
        },

        async getShippingMethods({ commit, state }) {
            state.a.b = 'store.js - getShippingMethods';

            ///*------- This double checks for valid headers and should be on every api call -------*/
            var headersOk = await store.dispatch('headersOk');
            ///*------------------------------------------------------------------------------------*/
            if (headersOk) {
                var a = (function () {
                    var d;
                    function c() {
                        //var url = state.global.coreUrl + '/' + 'api/Cart/Create' + store.orderId;
                        //var ccc = $.ajax({
                        //    type: 'POST',
                        //    url: url,
                        //    dataType: 'json',
                        //    contentType: 'application/json;charset=utf-8',
                        //    headers: state.global.headers
                        //});
                        var ccc = 'blah'
                        return ccc;
                    }
                    return {
                        b: function () {
                            return d = c();
                        }
                    };
                })();
                console.log('getShippingMethods resolved');
                return await a.b();
            }
        },






























































        async loadPayment({ state }) {
            state.a.b = 'store.js - loadPayment';
            //alert('stop - store.js - loadPayment')
            console.clear()
            console.log('loadPayment');

            ///*------- This double checks for valid headers and should be on every api call -------*/
            var headersOk = await store.dispatch('headersOk');
            ///*------------------------------------------------------------------------------------*/
            if (headersOk) {
                const b = await store.dispatch('payment/getTokenExIframeInformation');
                console.log(b)
                const c = await store.dispatch({ type: 'global/fakeAJAXcall', seconds: 2 });
                console.log('loadPayment resolved');

            }
        },









































































        //This needs to be changed to an async/await
        getStorageStatus({ commit, state }) {
            state.a.b = 'store.js - getStorageStatus';
            //alert('stop - store.js - getStorageStatus')
            console.log('--getStorageStatus')
            return new Promise(resolve => {

                var localStorageShoppingCart;

                if (state.global.access_token == null) {
                    localStorageShoppingCart = false;
                }
                else {
                    localStorageShoppingCart = true;
                }
                console.log('--getStorageStatus resolved');
                resolve(localStorageShoppingCart);
            });
        },


        //This needs to be changed to an async/await
        loadWarehouse: ({ state }) => {
            state.a.b = 'store.js - loadWarehouse';
            //alert('stop - store.js - loadWarehouse')
            console.log('-----loadWarehouse')
            return new Promise(resolve => {
                console.log('-----loadWarehouse resolved');
                resolve(1);
            });
        },





        async loadGlobalVariables({ state }, payload) {
            state.a.b = 'store.js - loadGlobalVariables';
            //alert('stop - store.js - loadGlobalVariables')
            console.log('-loadGlobalVariables')
            await store.commit('global/setUserName', { userName: 'xennsoft' });
            await store.commit('global/setUserPassword', { userPassword: 'Pa$$word123' });
            await store.commit('global/setAccessToken', { userAccessToken: payload });
            const c = await store.dispatch('global/setHeaders');
            state.a.b = c;
            console.log('-loadGlobalVariables resolved')
        },
        async loadCart({ commit, state }, payload) {
            state.a.b = 'store.js - loadCart';
            //alert('stop - loadCart')
            //console.clear()
            console.log('------loadCart')
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
            console.log('------loadCart resolved')
            await a.b();
        },
        async loadCheckout({ state }) {
            state.a.b = 'store.js - loadCheckout';
            alert('stop - loadCheckout')
            console.log(global.state.headers)
            const a = await store.dispatch('cart/createOrder');
            //console.log(a.OrderId)

            //Cannot get shipping methods yet for some reason.
            //const b = await store.dispatch('shipping/getShippingMethods', a.OrderId);
            const b = await store.dispatch('shipping/getSimulatedShippingMethods', a.OrderId);
            //console.log(b)

            if (a.OrderId > 0 && b.length > 0) {
                return { orderId: a.OrderId, shippingMethods: b }
            }
        },
        async loadSimulatedCart({ state }, payload) {

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
        async getBaseURL({ state }) {
            state.a.b = 'store.js - getBaseURL';
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
        async getUn({ state }) {
            state.a.b = 'store.js - getUn';
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
        async getPw({ state }) {
            state.a.b = 'store.js - getPw';
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
        async generateToken({ state }, payload) {
            state.a.b = 'store.js - generateToken';
            //alert('stop - generateToken')
            //console.clear()
            //console.log(payload)
            console.log('-generateToken')
            try {
                var a = (function () {
                    var login_data = {
                        grant_type: 'password',
                        username: payload.username,
                        password: payload.password
                    };
                    var getTokenUrl = payload.url + '/token';
                    var d;

                    function c() {
                        var ccc = $.ajax({
                            type: 'POST',
                            url: getTokenUrl,
                            data: login_data
                        });
                        return ccc;
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
                console.log('-generateToken resolved')
                return await a.b();
            } catch (e) {
                return e;
            }
        },
        async createToken({ state }) {
            state.a.b = 'store.js - createToken';
            //alert('stop - createToken')
            console.log('---createToken')
            const a = await store.dispatch({ type: 'getBaseURL' });
            //console.log(a)
            const b = await store.dispatch({ type: 'getUn' });
            //console.log(b)
            const c = await store.dispatch({ type: 'getPw' });
            //console.log(c)
            const e = await store.dispatch({ type: 'generateToken', url: a, username: b, password: c });
            console.log('---createToken resolved')
            return e.access_token;
        },
        async getToken(context) {
            state.a.b = 'store.js - getToken';
            //alert('stop - getToken')
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

        //Fix this name and stuff, this must be run but it's named weird and in the wrong place!!
        async populateStorage({ state }, payload) {
            state.a.b = 'store.js - populateStorage';
            //alert('stop - store.js - populateStorage')
            console.log('----populateStorage')
            localStorage.setItem('token', payload);
            await store.commit('global/setAccessToken', { userAccessToken: payload });
            await store.commit('setAccessToken', payload);//If I were doing it right I wouldn't need this!!!
            await store.dispatch('global/setHeaders');
            //console.log(localStorage.getItem('token'))
            console.log('----populateStorage resolved')
        },

















































        async template1({ commit, state }) {
            var a = (function () {
                var data;
                return {
                    b: function () {
                        return data = global.state.coreUrl;
                    }
                };
            })();
            return await a.b();
        },
        async template2({ commit, state }) {
            var a = (function () {
                var d;
                function c() {
                    var url = global.state.coreUrl + '/' + 'api/asdf/asdf' + '/' + 'prop1' + '/' + 'prop2';
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
        async template3(context) {
            console.log('---template3')
            const a = await store.dispatch('getASDF');//This is valid
            const b = await store.dispatch({ type: 'getASDF' });//This is also valid
            const c = await store.dispatch({ type: 'getASDF', aaa: a, bbb: b, ccc: c });
            console.log('---template3 resolved')
            return c.ddd;
        },
        async template4({ state }, payload) {
            console.log('-asdf')
            const a = await store.dispatch('getASDF');
            const b = await store.dispatch('getASDF', payload);
            await store.dispatch('global/asdf');
            await store.dispatch('cart/asdf', payload);
            console.log('-asdf resolved')
        },


    },
    getters: {

    }
})