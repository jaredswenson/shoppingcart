import Vue from "vue";
import mdb from 'mdbvue/src/index.js';
// import global components here
import VueButton from './global/VueButton'
import VueText from './global/VueText'
import VueModal from './global/VueModal'
import VueTable from './global/VueTable'
import VueCard from './global/VueCard'
import VuePanel from './global/VuePanel'
import VueAccordian from './global/VueAccordian'
import {MdInput, NumericInput, Navbar, NavbarBrand, NavbarCollapse, NavbarItem, NavbarNav, Dropdown, DropdownToggle, DropdownMenu} from 'mdbvue';

//instantiate components here
Vue.component("VueButton", VueButton)
Vue.component("VueText", VueText)
Vue.component("VueModal", VueModal)
Vue.component("VueTable", VueTable)
Vue.component("VueCard", VueCard)
Vue.component("VuePanel", VuePanel)
Vue.component("VueAccordian", VueAccordian)
Vue.component("MdInput", MdInput)
Vue.component("NumericInput", NumericInput)
Vue.component("Navbar", Navbar)
Vue.component("NavbarBrand", NavbarBrand)
Vue.component("NavbarCollapse", NavbarCollapse)
Vue.component("NavbarItem", NavbarItem)
Vue.component("NavbarNav", NavbarNav)
Vue.component("Dropdown", Dropdown)
Vue.component("DropdownToglge", DropdownToggle)
Vue.component("DropdownMenu", DropdownMenu)



//import global Views here
import About from '@/views/About.vue'
import Cancel from '@/views/Cancel.vue'
import List from '@/views/List.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import NewParty from '@/views/NewParty.vue'

//instantiate views here
Vue.component("About", About)
Vue.component("Cancel", Cancel)
Vue.component("List", List)
Vue.component("Cart", Cart)
Vue.component("Checkout", Checkout)
Vue.component("NewParty", NewParty)


