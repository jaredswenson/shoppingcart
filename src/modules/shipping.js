import Vue from 'vue'
import global from './global'

const modules = {
    global
};

const state = {
    shippingMethods: [],
    simulatedShippingMethods: [
        { Id: 1, Name: "UPS", Cost: 1.0 }
        , { Id: 2, Name: "FedEx", Cost: 2.0 }
        , { Id: 3, Name: "USPS", Cost: 3.0 }
    ]
};

const mutations = {
    setBaseUrl(store, { coreUrl }) { store.coreUrl = coreUrl; }
    , setUserName(store, { userName }) { store.userName = userName; }
    , setUserPassword(store, { userPassword }) { store.userPassword = userPassword; }
    , setAccessToken(store, { userAccessToken }) { store.userAccessToken = userAccessToken; }



};

const actions = {
    async getSimulatedShippingMethods({ commit, state }, payload) {
        //console.clear()
        var a = (function () {
            return {
                b: function () {
                    return new Promise(resolve => {
                        resolve(state.simulatedShippingMethods);
                    });
                }
            };
        })();
        return await a.b();
    },
    async getShippingMethods({ commit, state }, payload) {
        //console.clear()
        try {
            var a = (function () {
                var d;
                function c() {
                    console.log(global.state.headers)
                    var url = global.state.coreUrl + '/' + 'api/shipping/getShippingMethods' + '/' + payload;
                    //var url = global.state.coreUrl + '/' + 'api/Inventory/GetProducts' + '/' + '1' + '/' + 'WP_Retail';
                    var ccc = $.ajax({
                        type: 'GET',
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
        } catch (e) {
            console.log(e.responseText)
        }
    }


};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
