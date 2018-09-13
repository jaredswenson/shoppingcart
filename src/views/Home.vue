<template>
    <div class="home row">
        <div class="col-2"></div>
        <div class="col-8">
            <List />
        </div>
        <div class="col-2"></div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue';


    export default {
        name: 'home',
        components: {

        },
        data() {
            return {
                store: this.$store,
                showGrid: true,
            }
        },
        mounted() {
            //1st
            this.$store.state.a.b = '1st';
            this.$store.dispatch({
                type: 'loadGlobalVariables'
            }).then((response) => {
                //2nd
                this.$store.state.a.b = '2nd';
                this.$store.dispatch({
                    type: 'getStorageStatus'
                }).then((storageExits) => {
                    //3rd
                    this.$store.state.a.b = '3rd';
                    if (1 == 2) {
                        //4th
                        this.$store.dispatch({
                            type: 'loadWarehouse'
                        }).then((response) => {
                            //5th
                            this.$store.dispatch({
                                type: 'loadCart',
                                warehouseId: response,
                                cartType: 5 //Retail
                            }).then((response) => {
                                console.log('----loadCart resolved');
                                this.$store.dispatch("setOrderFromStorage");
                            })
                        })
                    }
                    else {
                        //4th
                        if (1 == 1) {
                            //5th
                            this.$store.state.a.b = '4th';
                            this.$store.dispatch({
                                type: 'createToken'
                            }).then((response) => {
                                this.$store.state.a.b = '5th';
                                if (typeof(response) !== 'undefined') {
                                    if (response.length > 0) {
                                        //6th
                                        this.$store.state.a.b = '6th';
                                        this.$store.dispatch(
                                            'populateStorage',
                                            response
                                        ).then((res) => {
                                            this.$store.state.a.b = '7th';
                                            //7th
                                            this.$store.dispatch({
                                                type: 'loadWarehouse'
                                            }).then((res) => {
                                                this.$store.state.a.b = '8th';
                                                //8th
                                                this.$store.dispatch({
                                                    type: 'loadCart',
                                                    warehouseId: res,
                                                    cartType: 5 //Retail
                                                }).then((res) => {
                                                    this.$store.state.a.b = '9th';
                                                    //9th
                                                    //this.$store.dispatch("setOrderFromStorage");
                                                })
                                            })
                                        })









                                    }
                                    else {
                                        //Try again
                                    }
                                }
                                else {
                                    alert('Home Error 106: NOT AUTHORIZED')
                                }
                            })
                        }
                        else {
                            console.warn('++++++++++++++++++ No token created, test items will be loaded. +++++++++++++++++++++++')
                            //7th
                            this.$store.dispatch({
                                type: 'loadSimulatedCart',
                            }).then((response) => {
                                console.log('----loadSimulatedCart resolved');
                                this.$store.dispatch("setOrderFromStorage");
                            })
                        }












                    }

                })

            }).catch(x => console.log(x));
        },
        props: {

        },
        computed: {
            state() {
                return this.store.state
            },

        },
        methods: {
            showModal(slot, size, title, content, header, footer) {
                var modalObject = {};
                modalObject.slot = slot;
                modalObject.size = size;
                modalObject.title = title;
                modalObject.content = content;
                modalObject.header = header;
                modalObject.footer = footer;
                this.$store.dispatch("modalAction", modalObject);
            },
        }
    }
</script>
