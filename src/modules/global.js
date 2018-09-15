import Vue from 'vue'

const state = {
    coreUrl: 'https://dev-core.xennbox.com'
    , userName: null
    , userPassword: null
    , userAccessToken: null
    , headers: []
};

const mutations = {
    setBaseUrl(store, { coreUrl }) { store.coreUrl = coreUrl; }
    , setUserName(store, { userName }) { store.userName = userName; }
    , setUserPassword(store, { userPassword }) { store.userPassword = userPassword; }
    , setAccessToken(store, { userAccessToken }) { store.userAccessToken = userAccessToken; }

};

const actions = {
    fakeAJAXcall: (context, time) => {
        const waitTime = time.seconds * 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                var payload = 'Held for ' + time.seconds + ' seconds';
                resolve(payload);
            }, waitTime);
        });
    },
    async setHeadersAuthorization({ state }) {
        var e;
        return new Promise(resolve => {
            if (state.userAccessToken != null) {
                e = state.headers.Authorization = 'Bearer' + ' ' + state.userAccessToken;
            }
            else {
                //fix it
                if (localStorage.getItem('token').length > 0) {
                    state.userAccessToken = localStorage.getItem('token')
                    //store.commit("setUserAccessToken", localStorage.getItem('token'))
                    e = state.headers.Authorization = 'Bearer' + ' ' + state.userAccessToken;
                }
                else {
                    //fix it

                }
            }
            resolve(e);
        });
    },
    async setHeaders({ dispatch, state }) {
        //alert('stop - setHeaders')
        console.log('-setHeaders')
        await dispatch({ type: 'setHeadersAuthorization' });
        console.log('-setHeaders resolved')
        return true;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
