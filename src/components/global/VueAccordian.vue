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









                <!--<div class="card-body" v-if="accountDone && addressDone && !shippingDone">






                    <VueText label="Shipping Method" model="shippingMethod" :value="$store.state.shippingMethod" />






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
                </div>-->
                <!--<div>
                    <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
                    <b-collapse name="bob" id="collapse1" class="mt-2">
                        <b-card>
                            <p class="card-text">Collapse contents Here</p>
                            <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                            <b-collapse name="bob2" id=collapse1_inner class="mt-2">
                                <b-card>Hello!</b-card>
                            </b-collapse>
                        </b-card>
                    </b-collapse>
                </div>-->



                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <p class="card-text">
                                    I start opened because <code>visible</code> is <code>true</code>
                                </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <p class="card-text">








                                    <b-form-radio-group v-model="value" :options="options"></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value" :options="options" stacked state="valid"></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value" :options="options" validated state="valid"></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value" :options="options" buttons></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value" :options="options" buttons stacked></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value" :options="options" buttons size-"sm"></b-form-radio-group>
                                    <br>
                                    <b-form-radio-group v-model="value">
                                        <b-form-radio v-for="opt in options" :key="opt.value">
                                            {{ opt.text }}
                                        </b-form-radio>
                                    </b-form-radio-group>
                                    <br>
                                    <span>Selected: </span>
                                    <span>{{value}}</span>











                                </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <p class="card-text">
                                    3
                                </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
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
                    <VueText label="Shipping Method" model="shippingMethod" :value="$store.state.shippingMethod" />
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
    </div>
</template>
<script>
    export default {
        name: "VueAccordian",
        components: {
        },
        data() {
            return {
                order: false,
                accountDone: false,
                addressDone: false,
                shippingDone: false,
                paymentDone: false
            }
        },
        props: {
        },
        methods: {
            setAccountDone() {
                this.accountDone = true;
            },
            setAddressDone() {
                console.clear()
                console.log('setAddressDone')
                this.addressDone = true;

                this.$store.dispatch('getShippingMethods').then((response) => {
                    console.log('getShippingMethods');
                    console.log(response);
                    console.log('getShippingMethods resolved');
                })
            },
            setShippingDone() {
                this.shippingDone = true;
            },
            setPaymentDone() {
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
        },
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>