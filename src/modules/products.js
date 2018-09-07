import global from './global'

const modules = {
    global
};

const state = {
    items: [],
    simulatedItems: [
        {
            Id: 730160125,
            CurrencyCode: "USD",
            Name: "Root Beer",
            Sku: "011",
            ShortDescription: "Root Beer",
            LongDescription: "\r\nevery once in a while\r\n",
            OnHand: 999,
            Prices: [
                {
                    "Id": 1,
                    "Cost": 5,
                    "PriceTier": "Wholesale"
                },
                {
                    "Id": 2,
                    "Cost": 5,
                    "PriceTier": "Retail"
                },
                {
                    "Id": 3,
                    "Cost": 2,
                    "PriceTier": "Preferred"
                },
                {
                    "Id": 4,
                    "Cost": 5,
                    "PriceTier": "AtCost"
                },
                {
                    "Id": 5,
                    "Cost": 5,
                    "PriceTier": "Awesome"
                },
                {
                    "Id": 6,
                    "Cost": 5,
                    "PriceTier": "Replacement"
                }
            ],
            ThumbnailImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            ImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            Categories: [
                {
                    Id: 8,
                    Name: "Drinks1",
                    SortOrder: 0
                }
            ],
            ProductVariations: null,
            AvailableForAutoship: true,
            AvailableVariations: null,
            VariationCount: 0,
            HideAutoShip: true,
            autoship: false,
            inCart: false,
            itemTotal: 0,
            quantity: 0
        },
        {
            Id: 730160124,
            CurrencyCode: "USD",
            Name: "Dr Pepper",
            Sku: "010",
            ShortDescription: "Dr Pepper",
            LongDescription: "\r\n good backup flavor\r\n",
            OnHand: 999,
            Prices: [
                {
                    "Id": 1,
                    "Cost": 5,
                    "PriceTier": "Wholesale"
                },
                {
                    "Id": 2,
                    "Cost": 5,
                    "PriceTier": "Retail"
                },
                {
                    "Id": 3,
                    "Cost": 2,
                    "PriceTier": "Preferred"
                },
                {
                    "Id": 4,
                    "Cost": 5,
                    "PriceTier": "AtCost"
                },
                {
                    "Id": 5,
                    "Cost": 5,
                    "PriceTier": "Awesome"
                },
                {
                    "Id": 6,
                    "Cost": 5,
                    "PriceTier": "Replacement"
                }
            ],
            ThumbnailImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            ImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            Categories: [
                {
                    Id: 8,
                    Name: "Drinks1",
                    SortOrder: 0
                }
            ],
            ProductVariations: null,
            AvailableForAutoship: true,
            AvailableVariations: null,
            VariationCount: 0,
            HideAutoShip: true,
            autoship: false,
            inCart: false,
            itemTotal: 0,
            quantity: 0
        },
        {
            Id: 730160126,
            CurrencyCode: "USD",
            Name: "Sprite",
            Sku: "012",
            ShortDescription: "Sprite",
            LongDescription: "\r\n Only when you are sick\r\n",
            OnHand: 999,
            Prices: [
                {
                    "Id": 1,
                    "Cost": 5,
                    "PriceTier": "Wholesale"
                },
                {
                    "Id": 2,
                    "Cost": 5,
                    "PriceTier": "Retail"
                },
                {
                    "Id": 3,
                    "Cost": 2,
                    "PriceTier": "Preferred"
                },
                {
                    "Id": 4,
                    "Cost": 5,
                    "PriceTier": "AtCost"
                },
                {
                    "Id": 5,
                    "Cost": 5,
                    "PriceTier": "Awesome"
                },
                {
                    "Id": 6,
                    "Cost": 5,
                    "PriceTier": "Replacement"
                }
            ],
            ThumbnailImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            ImageUrl: "https://dev-classic.xennbox.com/branding/Pandora/images/inventory/noimage.gif",
            Categories: [
                {
                    Id: 8,
                    Name: "Drinks1",
                    SortOrder: 0
                }
            ],
            ProductVariations: null,
            AvailableForAutoship: true,
            AvailableVariations: null,
            VariationCount: 0,
            HideAutoShip: true,
            autoship: false,
            inCart: false,
            itemTotal: 0,
            quantity: 0
        }
    ]
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



                //console.clear();

                //console.log(store)
                //console.log(state)
                //console.log(store.state.userAccessToken)














                var coreUrl = global.state.coreUrl;
                var token = null;
                var url = 'api/Inventory/GetProducts';
                var getProducts_url = coreUrl + url + '/' + '1' + '/' + 'WP_Retail';

                var d;

                if (global.state.userAccessToken != undefined && global.state.userAccessToken != null && global.state.userAccessToken != '') {
                    token = global.state.userAccessToken;
                }
                else {
                    //Handle the error
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
    async getSimulatedInventoryItems({ dispatch, context, state }) {
        console.log('-getSimulatedInventoryItems')
        try {
            var a = (function () {
                var d;
                function c() {
                    return state.simulatedItems;
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
    async template1({ commit }, payload) {
        //console.clear()
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
