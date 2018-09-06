const state = {
    coreUrl: null
    , userName: null
    , userPassword: null
    , access_token: 'Noezcba2nE5QwOal3AfQNiKa3GL83itAR8BCbKG1D1_dOZI9p9Lcy3QbfTukLW9XDWZ-umFyxQTYVT3Q3FiD7x1ard4ljNu9cSUYEbgQNxfGINSCBfKdLQ2RQr1rEVHz-17ErV3qmRmZs8VJKSroiCD0AS8ZTwcHmWkOaZrdbG2K4Ubgh0c2AIDmaFsrn_hDCdZQmwc3oS9E0Hxcm10UsDFqvffn3u1LpDdCoS7le916xQANZPFI5gUyOaB3I2EW8gMi9qZvL7mdvV-L0v9iYwtGHbp-IaMMClQYW-gXTuesnnmF2G1DmVnitF-hdfodv_fKScVWSnJ7NnZB51cmEqCO7tMsch-OJJAdQW7z8M9xB-6Y9uLTu2fVoraVCrA37dQvI8EMkCOXRzt5qBANOT-C_TgC4x5QJ-tHi_A1SxGCJogeavtWxtaPO2-rZqUthWfklTTdhX99IuR3-9O7VAzi7phjvhxwZs0PDMJzcQmFsf6XzcIq6xBZPst9BI9e-HADsA'
};

const mutations = {
    setBaseUrl(store, { coreUrl }) { store.coreUrl = coreUrl; }
    , setUserName(store, { userName }) { store.userName = userName; }
    , setUserPassword(store, { userPassword }) { store.userPassword = userPassword; }


};

const actions = {
    fakeAJAXcall: (context, time) => {
        alert('stop')
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
