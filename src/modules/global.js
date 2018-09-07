const state = {
    coreUrl: null
    , userName: null
    , userPassword: null
    , userAccessToken: null
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
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
