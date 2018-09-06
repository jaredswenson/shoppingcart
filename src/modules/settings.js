const state = {
    NavBarId: '#menuBar',
    FlyoutId: '#shoppingCartFlyout',
    UseCustomInvoice: false,
    CustomInvoiceUrl: '',
    ShowFillFormButtons: true,
    ShowTermsAndConditionsInCreateAccountSection: false,
    ShowTermsAndConditionsInPlaceOrderSection: true,
    SponsorRequired: false,
    AccountRequired: true,
    ShowName: true,
    ShowSecurityQuestion: true,
    ShowEmail: true,
    ShowPhone: true,
    ShowMobilePhone: true,
    ShowLanugage: false,
    ShowReceiveEmailNotifications: false,
    ShowSponsorSection: false,
    ShowAccountSection: false,
    ShowContactSection: true,
    SecurityQuestionRequired: true,
    PhoneRequired: true,
    EmailRequired: true,
    LanguageRequired: false,
    AgreeTermsRequired: true,
    PhoneFormat: '^(((\\+44|\\+48)[^a-zA-Z]+)|(\\(0\\)[^a-zA-Z]+)|([^a-zA-z]+))$',
    UsePCAPredict: false,
    PCAPredictJS: "<script>(function(n,t,i,r){var u,f;n[i]=n[i]||{},n[i].initial={accountCode:'GAEAS11111',host:'GAEAS11111.pcapredict.com'},n[i].on=n[i].on||function(){(n[i].onq=n[i].onq||[]).push(arguments)},u=t.createElement('script'),u.async=!0,u.src=r,f=t.getElementsByTagName('script')[0],f.parentNode.insertBefore(u,f)})(window,document,'pca','//GAEAS11111.pcapredict.com/js/sensor.js')</script>",
    UseRetailCartType: true,
    UseCustomCountrySelector: false
};
export default {
    namespaced: true,
    state
};

const mutations = {
    setBaseUrl(store, { baseUrl }) {
        store.baseUrl = baseUrl;
    }
};





