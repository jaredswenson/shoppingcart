import global from './global'

const modules = {
    global
};

const state = {
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




    }
};

export default {
    namespaced: true,
    state
    , mutations
    , actions
};
