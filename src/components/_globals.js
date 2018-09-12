import Vue from "vue";

// import global components here
import VueButton from './global/VueButton'
import VueText from './global/VueText'
import VueModal from './global/VueModal'
import VueTable from './global/VueTable'
import VueCard from './global/VueCard'
import VuePanel from './global/VuePanel'
import VueAccordian from './global/VueAccordian'

import Bootstrap from 'bootstrap-vue';
Vue.use(Bootstrap)

import { MdInput, NumericInput, Navbar, NavbarBrand, NavbarCollapse, NavbarItem, NavbarNav, Dropdown, DropdownToggle, DropdownMenu } from 'mdbvue';
import { Container, Row, Column, Card, CardImg, CardHeader, CardBody, CardTitle, CardText, ViewWrapper, MdMask, CardGroup } from 'mdbvue';

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
Vue.component("Container", Container)
Vue.component("Row", Row)
Vue.component("Column", Column)
Vue.component("Card", Card)
Vue.component("CardImg", CardImg)
Vue.component("CardHeader", CardHeader)
Vue.component("CardBody", CardBody)
Vue.component("CardTitle", CardTitle)
Vue.component("CardText", CardText)
//Vue.component("Btn", Btn)//This causes problems when used with bootstrap buttons.
Vue.component("ViewWrapper", ViewWrapper)
Vue.component("MdMask", MdMask)
Vue.component("CardGroup", CardGroup)

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


