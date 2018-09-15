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
    async getTokenExIframeInformation({ dispatch, context, state }, payload) {
        try {
            //alert('stop - payment.js - getTokenExIframeInformation')


            var a = (function () {
                var d;
                function c() {

                    //console.log(global.state.headers.Authorization)

                    if (global.state.headers.Authorization.length > 0) {
                        console.log(global.state.headers)

                        var url = global.state.coreUrl + '/' + 'api/PaymentProcessor/GetPaymentProcessorTokenization' + '/' + 1 + '/' + 'usd';
                        //var url = global.state.coreUrl + '/' + 'api/Inventory/GetProducts' + '/' + '1' + '/' + 'WP_Retail';

                        //var ccc = jQuery.ajax({
                        //    type: 'GET',
                        //    url: url,
                        //    dataType: 'json',
                        //    contentType: 'application/json',
                        //    headers: global.state.headers
                        //});


                        var ccc = jQuery.ajax({
                            url: url,
                            type: 'GET',
                            headers: global.state.headers,
                            //async: false,
                            dataType: 'json',
                            contentType: 'application/json; charset=utf-8',
                            data: {
                                ajaxid: 4,
                                UserID: 3,
                            },
                            success: function (returnData) {
                                alert('success!!!!!')
                                return returnData;
                            },
                            error: function (e) {
                                alert('errrrr')
                            }

                        });




                    }
                    else {
                        alert('no coreUrl or no headers');
                        ccc = 'no data to return';
                    } 
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
            console.error(e)
        }
    },
    async blah1({ dispatch, context, state }, payload) {
        try {
            var a = (function () {
                console.log('payload', payload)
                return payload;
            })();
            await a();
        } catch (e) {
            alert('error')
        }
    },
    async template1({ dispatch, context, state }, payload) {
        try {
            var a = (function () {
                return {
                    b: function () {
                        alert(payload)
                    }
                };
            })();
            await a.b();
            //return await a.b();
        } catch (e) {
            alert('error')
        }
    }


};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
