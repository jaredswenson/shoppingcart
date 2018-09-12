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
    setHeadersAuthorization: (e) => {
        return new Promise(resolve => {
            e = state.headers.Authorization = 'Bearer' + ' ' + state.userAccessToken;
            resolve(e);
        });
    },
    async setHeaders({ dispatch }) {
        console.log('-setHeaders')
        await dispatch({ type: 'setHeadersAuthorization' });
        console.log('-setHeaders resolved')
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
