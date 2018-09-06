import global from './global'

const modules = {
    global
};

const state = {
    items: []
};

const mutations = {
    setBaseUrl(store, { baseUrl }) { store.baseUrl = baseUrl; }
    , setUserName(store, { userName }) { store.userName = userName; }
    , setUserPassword(store, { userPassword }) { store.userPassword = userPassword; }
    //, setItems(store, { items }) {

    //}
    , setItems: (state, payload) => {
        Vue.set(state, 'items', payload);
    }

};

const actions = {
    fakeAJAXcall: (context, time) => {
        const waitTime = time.seconds * 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                var payload = state.items;
                resolve(payload);
            }, waitTime);
        });
    },
    async getInventoryItems({ dispatch, context, state }, payload) {
        console.log('-getInventoryItems')

        try {
            var a = (function () {

                var coreUrl = global.state.coreUrl;
                var token = null;
                var url = 'api/Inventory/GetProducts';
                var getProducts_url = coreUrl + url + '/' + '1' + '/' + 'WP_Retail';

                var d;

                if (global.state.access_token != undefined && global.state.access_token != null && global.state.access_token != '') {
                    token = global.state.access_token;
                }


                var headers = [];
                headers.Authorization = "Bearer " + token;

                function c() {

                    var deferred = jQuery.Deferred();
                    var type = 'GET';

                    jQuery.when(
                        jQuery.ajax({
                            url: getProducts_url,
                            type: type,
                            dataType: "json",
                            contentType: "application/json",
                            headers: headers
                        }))
                        .then(function (response) {
                            console.warn('++++++++++++++++ NEW AJAX REQUEST ++++++++++++++++++')
                            console.warn('coreUrl:', coreUrl)
                            console.warn('url:', url)
                            console.warn('response:', response)
                            console.warn('type:', type)

                            deferred.resolve(response);
                        })
                        .fail(function (xhr, status, errorThrown) {
                            deferred.reject(xhr, status, errorThrown);
                        });


                    return deferred.promise();





                    //var cache = {};
                    //cache[url] = inventoryItems;
                    //console.log(cache[url])

                    //return dispatch({ type: 'fakeAJAXcall', seconds: 5 });
                }


                return {
                    b: function () {
                        try {
                            d = c();
                            //const d = store.dispatch({ type: 'fakeAJAXcall', seconds: 10 });
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
    async template1({ commit }, payload) {
        console.clear()
        console.log(payload)
        console.log('addItemToCart')
        alert('stop2')
        //const a = await store.dispatch({ type: 'cart/asdf', p: payload.p });
        //const b = await store.dispatch({ type: 'resolveAfter0Seconds' });
        //const c = await store.dispatch({ type: 'resolveAfter0Seconds' });
        //const d = await store.dispatch({ type: 'asdf', aaa: a, bbb: b, ccc: c });

        return 'd';
    },
    async template2({ dispatch, context, state }, payload) {
        try {
            //console.clear()
            console.log('asdf');

            var a = (function () {
                var d;
                function c() {

                    return d;
                }
                return {
                    b: function () {
                        d = c();
                        if (d != null) {

                        }
                        else {

                        }
                    }
                };
            })();
            //await a.b();
            return await a.b();
        } catch (e) {

        }
    }

};

export default {
    namespaced: true,
    state
    , mutations
    , actions
};
