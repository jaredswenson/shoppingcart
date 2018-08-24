import Vue from "vue";
import mdb from 'mdbvue/src/index.js';
// import global components here
import VueButton from './global/VueButton'
import VueText from './global/VueText'
import VueModal from './global/VueModal'
import VueTable from './global/VueTable'
import VueCard from './global/VueCard'



//instantiate components here
Vue.component("VueButton", VueButton)
Vue.component("VueText", VueText)
Vue.component("VueModal", VueModal)
Vue.component("VueTable", VueTable)
Vue.component("VueCard", VueCard)


//import global Views here
import About from '@/views/About.vue'
import Template from '@/views/Template.vue'
import List from '@/views/List.vue'
import Cart from '@/views/Cart.vue'

//instantiate views here
Vue.component("About", About)
Vue.component("Template", Template)
Vue.component("List", List)
Vue.component("Cart", Cart)

