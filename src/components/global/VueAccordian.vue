<template>
    <div class="accordion" id="accordionExample">
        <div class="card z-depth-0">
            <div>
                <h5 class="mb-0">
                    <VueButton color="white" :block="true" v-if="$store.state.firstName == '' || $store.state.lastName == '' || $store.state.email == '' || $store.state.phone == ''">
                        Account Info
                    </VueButton>
                    <VueButton color="white" :block="true" v-if="$store.state.firstName != '' && $store.state.lastName != '' && $store.state.email != '' && $store.state.phone != ''" @click.native="toggleAccount">
                        Account Info
                    </VueButton>
                </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">

                <div class="card-body" v-if="!accountDone">

                    <!--<div class="card-body" v-if="accountDone">-->

                    <VueText label="First Name" model="firstName" :value="$store.state.firstName" />
                    <VueText label="Last Name" model="lastName" :value="$store.state.lastName" />
                    <VueText label="Email" model="email" :value="$store.state.email" />
                    <VueText label="Phone" model="phone" :value="$store.state.phone" />
                    <VueButton outline="default" :block="true" disabled v-if="$store.state.firstName == '' || $store.state.lastName == '' || $store.state.email == '' || $store.state.phone == ''">Proceed To Address</VueButton>
                    <VueButton outline="default" :block="true" v-if="$store.state.firstName != '' && $store.state.lastName != '' && $store.state.email != '' && $store.state.phone != ''" @click.native="setAccountDone">Proceed To Address</VueButton>
                </div>
            </div>
        </div>
        <div class="card z-depth-0">
            <div>
                <h5 class="mb-0">
                    <VueButton color="white" :block="true" v-if="$store.state.streetAddress == '' || $store.state.city == '' || $store.state.state == '' || $store.state.zipCode == '' || $store.state.country == ''">
                        Address
                    </VueButton>
                    <VueButton color="white" :block="true" v-if="$store.state.streetAddress != '' && $store.state.city != '' && $store.state.state != '' && $store.state.zipCode != '' && $store.state.country != ''" @click.native="toggleAddress">
                        Address
                    </VueButton>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body" v-if="accountDone && !addressDone">
                    <VueText label="Street Address" model="streetAddress" :value="$store.state.streetAddress" />
                    <VueText label="City" model="city" :value="$store.state.city" />
                    <VueText label="State" model="state" :value="$store.state.state" />
                    <VueText label="Postal Code" model="zipCode" :value="$store.state.zipCode" />
                    <VueText label="Country" model="country" :value="$store.state.country" />
                    <VueButton outline="default"
                               :block="true"
                               disabled v-if="$store.state.streetAddress == '' ||
                               $store.state.city == '' ||
                               $store.state.state == '' ||
                               $store.state.zipCode == '' ||
                               $store.state.country == ''">
                        Proceed To Shipping
                    </VueButton>
                    <VueButton outline="default"
                               :block="true"
                               v-if="$store.state.streetAddress != '' &&
                                     $store.state.city != '' &&
                                     $store.state.state != '' &&
                                     $store.state.zipCode != '' &&
                                     $store.state.country != ''"
                               @click.native="setAddressDone">
                        Proceed To Shipping
                    </VueButton>
                </div>
            </div>
        </div>
        <div class="card z-depth-0">
            <div>
                <h5 class="mb-0">
                    <VueButton color="white" :block="true" v-if="$store.state.shippingMethod == ''">
                        Shipping Method
                    </VueButton>
                    <VueButton color="white" :block="true" v-if="$store.state.shippingMethod != ''" @click.native="toggleShipping">
                        Shipping Method
                    </VueButton>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">









                <div class="card-body" v-if="accountDone && addressDone && !shippingDone">






                    <!--<VueText label="Shipping Method" model="shippingMethod" :value="$store.state.shippingMethod" />-->


                    <div>
                        <b-form-group label="Shipping Method">
                            <b-form-radio-group v-model="$store.state.shippingMethod"
                                                :options="options"
                                                stacked
                                                name="radiosStacked">
                            </b-form-radio-group>
                        </b-form-group>

                        <div class="mt-3">
                            Selected: <strong>{{ $store.state.shippingMethod }}</strong>
                        </div>
                    </div>









                    <VueButton outline="default"
                               :block="true"
                               disabled v-if="$store.state.shippingMethod == ''">
                        Proceed To Payment
                    </VueButton>
                    <VueButton outline="default"
                               :block="true"
                               v-if="$store.state.shippingMethod != ''"
                               @click.native="setShippingDone">
                        Proceed To Payment
                    </VueButton>
                </div>







            </div>
        </div>
        <div class="card z-depth-0">
            <div>
                <h5 class="mb-0">
                    <VueButton color="white" v-if="!paymentDone" :block="true">
                        Payment Info
                    </VueButton>
                    <VueButton color="white" :block="true" v-if="paymentDone" @click.native="togglePayment">
                        Payment Info
                    </VueButton>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body" v-if="accountDone && addressDone && shippingDone && !paymentDone">
                    <VueText label="Payment Info" model="shippingMethod" :value="$store.state.shippingMethod" />














                    <div id="xen-cart-payment-info" class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading4">
                            <div>
                                <div>
                                    <h4 class="m-b-0" data-fontsize="24" data-lineheight="26" style="font-size: 21px; line-height: 22.75px;">
                        

                                        <span class="xen-header-bullet xen-header-bullet-solid d-inline-block text-xs-center m-r-1"></span>
                                        <span class="xen-accordion-header-text" accordionwidgettransval="Payment Info">Payment Info</span>
                                    </h4>
                                    <span class="xen-accordion-header-summary xen-accordion-header-text text-muted font-weight-bold"></span>
                                    <span class="xen-accordion-header-summary-gradient"></span>
                                </div>
                            </div>
                            <button type="button" data="collapse4" class="btn btn-primary  hidden xen-btn-edit" accordionwidgettransval="Edit">Edit</button>
                        </div>
                        <div id="collapse4" style="height: auto;">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-12 p-y-3 p-x-6">















                                        <div id="BillingAddressInfo">
                                            <div id="xen-cart-billing-address" class="card xen-address w-100">
                                                <div class="card-block">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input id="xen-cart-billing-address-checkbox" type="checkbox" checked="">
                                                            <span class="checkbox-material"><span class="check"></span></span>
                                                            <span class="m-l-2 d-inline-block" paymentwidgettransval="Billing Address the same as Shipping Address">Billing Address the same as Shipping Address</span>
                                                        </label>
                                                    </div>
                                                    <p class="card-text adr m-b-0"></p>
                                                    <div id="addressControlView"></div>
                                                    <p></p>
                                                    <div class="row hidden" id="xen-cart-billing-address-form">
                                                        <div class="row">
                                                            <button type="button" class="btn btn-outline-primary m-x-auto xen-btn-fill">Fill Form</button>
                                                        </div>
                                                        <div class="col-xs-12 p-y-3 p-x-3">
                                                            <div id="paymentAddressControlEdit"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                        <div id="PaymentInfo1">
                                            <div id="xen-cart-payment-type" class="card m-b-0 w-100">
                                                <div class="card-block xen-b-border">
                                                    <form id="paymentForm" class="m-b-0" novalidate="novalidate">
                                                        <div class="card-header m-b-4 p-a-0">
                                                        </div>
                                                        <fieldset class="m-b-3 p-b-3 xen-b-border" data-payment-default="true" data-pay-option="1">
                                                            <div class="row">
                                                                <div class="col-xs-8">
                                                                    <legend class="m-b-0 text-uppercase" paymentwidgettransval="Credit Card">
                                                                        Credit Card
                                                                        <img src="https://dev-to.xennbox.com/Theme/Client/Images/checkout-visa.png">
                                                                        <img src="https://dev-to.xennbox.com/Theme/Client/Images/checkout-master-card.png">
                                                                        <img src="https://dev-to.xennbox.com/Theme/Client/Images/checkout-american-express.png">
                                                                        <img src="https://dev-to.xennbox.com/Theme/Client/Images/checkout-discover.png">
                                                                    </legend>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xs-12 col-md-4">
                                                                    <div id="creditCardLabel" class="form-group bmd-form-group bmd-form-group-sm">
                                                                        <label for="inputCardNumber" class="bmd-label-floating" paymentwidgettransval="Card Number">Card Number</label>


                                                                        <br />above iframe
                                                                        <!--<iframe id="iframe" name="iframe" src="https://htp.tokenex.com/iframe/v1/9e2901c2ff3e4526a21c11521a0f398b" style="height:42px; border:none;"></iframe>-->
                                                                        <br />below iframe

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xs-6 col-md-3">
                                                                    <div class="form-group bmd-form-group bmd-form-group-sm is-empty">
                                                                        <label for="month" class="bmd-label-floating" paymentwidgettransval="Month">Month</label>
                                                                        <select class="form-control" id="month" name="month">
                                                                            <option></option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>
                                                                            <option value="5">5</option>
                                                                            <option value="6">6</option>
                                                                            <option value="7">7</option>
                                                                            <option value="8">8</option>
                                                                            <option value="9">9</option>
                                                                            <option value="10">10</option>
                                                                            <option value="11">11</option>
                                                                            <option value="12">12</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-6 col-md-3">
                                                                    <div class="form-group bmd-form-group bmd-form-group-sm is-empty">
                                                                        <label for="year" class="bmd-label-floating" paymentwidgettransval="Year">Year</label>
                                                                        <select class="form-control" id="year" name="year">
                                                                            <option></option>
                                                                            <option value="2018">2018</option>
                                                                            <option value="2019">2019</option>
                                                                            <option value="2020">2020</option>
                                                                            <option value="2021">2021</option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2023">2023</option>
                                                                            <option value="2024">2024</option>
                                                                            <option value="2025">2025</option>
                                                                            <option value="2026">2026</option>
                                                                            <option value="2027">2027</option>
                                                                            <option value="2028">2028</option>
                                                                            <option value="2029">2029</option>
                                                                            <option value="2030">2030</option>
                                                                            <option value="2031">2031</option>
                                                                            <option value="2032">2032</option>
                                                                            <option value="2033">2033</option>
                                                                            <option value="2034">2034</option>
                                                                            <option value="2035">2035</option>
                                                                            <option value="2036">2036</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-6 col-md-3">
                                                                    <div id="CVV" class="form-group bmd-form-group bmd-form-group-sm is-empty">
                                                                        <label for="CVV" class="bmd-label-floating" paymentwidgettransval="CVV">CVV</label>
                                                                        <input type="text" id="CVV" name="CVV" class="form-control">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                </div>
                                                <div class="card-foooter">
                                                    <div id="xen-cart-payment-summary-totals" class="p-b-3 p-x-3">
                                                        <div id="PaymentSummaryTotals">
                                                            <div id="totals" class="autoship-orderTotal">
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-subtotal ">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase" ordertotalwidgettransval="SubTotal:">SubTotal:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$30.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-voucher hidden">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase">Voucher <span class="text-nowrap">#[XXXX]:</span></strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$-[X.XX]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-shipping">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase" ordertotalwidgettransval="Shipping:">Shipping:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$4.30</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-taxes">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase" ordertotalwidgettransval="Taxes:">Taxes:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$2.06</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-total  xen-alert-primary">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase" ordertotalwidgettransval="Total:">Total:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$36.36</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-payhub hidden xen-b-border">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase">PayHub:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$-[X.XX]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="xen-cart-totals-bar xen-cart-totals-bar-grandtotal xen-alert-primary hidden">
                                                                    <div class="row p-y-0">
                                                                        <div class="text-xs-right col-xs-8 col-xl-9">
                                                                            <strong class="text-uppercase">Grand Total:</strong>
                                                                        </div>
                                                                        <div class="text-xs-right col-xs-4 col-xl-3">
                                                                            <span class="text-nowrap">$[X.XX]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="xen-cart-payment-explainer" class="row m-b-6 hidden">
                                                        <div class="xen-icon col-xs-12">
                                                            <a href="#" data-placement="top" title="Some info" data-toggle="modal" data-target="#paymentModal">
                                                                <i class="material-icons text-info">info</i>
                                                                Information about payment methods and totals
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row p-y-3">
                                                    <button type="button" class="btn btn-outline-primary m-x-auto xen-btn-continue" disabled="" paymentwidgettransval="Continue To Review">
                                                        Continue To Review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>














                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
































                    <VueButton outline="default" :block="true" disabled v-if="$store.state.shippingMethod == ''">Place Order</VueButton>
                    <VueButton outline="default" :block="true" v-if="$store.state.shippingMethod != ''" @click.native="setPaymentDone">Place Order</VueButton>
                </div>
            </div>
        </div>
        <div class="card z-depth-0">
            <div>
                <h5 class="mb-0">
                    <VueButton color="white" :block="true">
                        Place order
                    </VueButton>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body" v-if="accountDone && addressDone && shippingDone && paymentDone">
                    <VueButton color="success" :block="true" @click.native="submitOrder">Place Order</VueButton>
                </div>
            </div>
        </div>
        <div class="card z-depth-0" v-if="order">
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body row">
                    <div class="col-8">
                        <p>{{$store.state.firstName}} {{$store.state.lastName}}</p>
                        <p>{{$store.state.email}}</p>
                        <p>{{$store.state.phone}}</p>
                        <p>{{$store.state.streetAddress}}</p>
                        <p>{{$store.state.city}}</p>
                        <p>{{$store.state.state}}</p>
                        <p>{{$store.state.zipCode}}</p>
                        <p>{{$store.state.country}}</p>
                    </div>
                    <div class="col-4">
                        <p v-for="item in $store.state.orderItems">{{item.Name}} - x{{item.quantity}}</p>
                        <p>${{itemTotals}}</p>
                    </div>
                </div>
            </div>
        </div>
































        <div role="tablist">
            <b-card no-body class="mb-1" id="AccountInfo">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion1 variant="info">Account Info</b-btn>
                </b-card-header>


                <!--<b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">-->

                <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">



                    <b-card-body>
                        <VueText label="First Name" model="firstName" :value="$store.state.firstName" size="sm" />
                        <VueText label="Last Name" model="lastName" :value="$store.state.lastName" size="sm" />
                        <VueText label="Email" model="email" :value="$store.state.email" size="sm" />
                        <VueText label="Phone" model="phone" :value="$store.state.phone" size="sm" />
                        <VueButton outline="default" :block="true" disabled v-if="$store.state.firstName == '' || $store.state.lastName == '' || $store.state.email == '' || $store.state.phone == ''">Proceed To Address</VueButton>
                        <VueButton outline="default" :block="true" v-if="$store.state.firstName != '' && $store.state.lastName != '' && $store.state.email != '' && $store.state.phone != ''" @click.native="setAccountDone">Proceed To Address</VueButton>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1" id="Address">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion2 variant="info">Address</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>









                        <VueText label="Street Address" model="streetAddress" :value="$store.state.streetAddress" />
                        <VueText label="City" model="city" :value="$store.state.city" />
                        <VueText label="State" model="state" :value="$store.state.state" />
                        <VueText label="Postal Code" model="zipCode" :value="$store.state.zipCode" />
                        <VueText label="Country" model="country" :value="$store.state.country" />
                        <VueButton outline="default"
                                   :block="true"
                                   disabled v-if="$store.state.streetAddress == '' ||
                               $store.state.city == '' ||
                               $store.state.state == '' ||
                               $store.state.zipCode == '' ||
                               $store.state.country == ''">
                            Proceed To Shipping
                        </VueButton>
                        <VueButton outline="default"
                                   :block="true"
                                   v-if="$store.state.streetAddress != '' &&
                                     $store.state.city != '' &&
                                     $store.state.state != '' &&
                                     $store.state.zipCode != '' &&
                                     $store.state.country != ''"
                                   @click.native="setAddressDone">
                            Proceed To Shipping
                        </VueButton>










                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1" id="ShippingMethod">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion3 variant="info">Shipping Method</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>







                        <div>
                            <b-form-group label="Inline radios (default)">
                                <b-form-radio-group v-model="selected"
                                                    :options="options"
                                                    name="radioInline">
                                </b-form-radio-group>
                            </b-form-group>

                            <b-form-group label="Stacked radios">
                                <b-form-radio-group v-model="selected"
                                                    :options="options"
                                                    stacked
                                                    name="radiosStacked">
                                </b-form-radio-group>
                            </b-form-group>

                            <div class="mt-3">
                                Selected: <strong>{{ selected }}</strong>
                            </div>
                        </div>









                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1" id="PaymentInfo">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion4 variant="info">Payment Info</b-btn>
                </b-card-header>
                <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>



                        <div>
                            <b-form-group label="Inline radios (default)">
                                <b-form-radio-group v-model="selected"
                                                    :options="options"
                                                    name="radioInline">
                                </b-form-radio-group>
                            </b-form-group>

                            <b-form-group label="Stacked radios">
                                <b-form-radio-group v-model="selected"
                                                    :options="options"
                                                    stacked
                                                    name="radiosStacked">
                                </b-form-radio-group>
                            </b-form-group>

                            <div class="mt-3">
                                Selected: <strong>{{ selected }}</strong>
                            </div>
                        </div>




                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body class="mb-1" id="OrderSummary">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion5 variant="info">Place Order</b-btn>
                </b-card-header>
                <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>






                        <form>
                            <p class="h4 text-center mb-4">Sign in</p>
                            <div class="grey-text">
                                <VueText label="Your email" :value="$store.state.firstName" type="email" size="sm" />
                            </div>
                            <div class="text-center">
                                <b-btn>Login</b-btn>
                            </div>
                        </form>












                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>

    </div>
</template>
<script>
    export default {
        name: "VueAccordian",
        mounted() {
            this.$store.state.a.b = 'start - VueAccordian.vue';
        },
        components: {
        },
        data() {
            return {
                order: false,
                accountDone: false,
                addressDone: false,
                shippingDone: false,
                paymentDone: false,

                selected: '$store.state.shippingMethod',
                options: [
                    { text: 'USPS', value: 'first' },
                    { text: 'UPS', value: 'second' },
                    { text: 'FedEx', value: 'third' }
                ]


            }
        },
        props: {
        },
        methods: {
            setAccountDone() {
                this.$store.state.a.b = 'VueAccordian.vue - setAccountDone';
                this.accountDone = true;
            },
            setAddressDone() {
                this.$store.state.a.b = 'VueAccordian.vue - setAddressDone';
                console.clear()
                console.log('setAddressDone')

                this.$store.dispatch('getShippingMethods').then((response) => {
                    console.log(response);
                    this.addressDone = true;
                })
            },
            setShippingDone() {
                this.$store.state.a.b = 'VueAccordian.vue - setShippingDone';


                this.$store.dispatch('loadPayment').then((response) => {
                    console.log(response);
                    this.shippingDone = true;
                })


            },
            setPaymentDone() {
                this.$store.state.a.b = 'VueAccordian.vue - setPaymentDone';
                this.paymentDone = true;
            },
            toggleAccount() {
                this.accountDone = false;
            },
            toggleAddress() {
                this.addressDone = false;
                this.shippingAddress = false;
            },
            toggleShipping() {
                this.shippingDone = false;
            },
            togglePayment() {
                console.log(this.paymentDone);
                this.paymentDone = false;
            },
            submitOrder() {
                this.order = true;
            }
        },
        computed: {
            itemTotals() {
                var total = this.$store.state.orderTotal.toFixed(2)
                return total
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>