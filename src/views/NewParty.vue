<template>
  <div class="NewParty">
    <div class="row" v-if="firstStep">
      <div class="col-12">
        <VueText label="Name" item="hostName" model="hostName" :value="$store.state.hostName"/>
      </div>
      <div class="col-12">
        <VueText label="Email" item="hostEmail" model="hostEmail" :value="$store.state.hostEmail"/>
      </div>
      <VueButton color="primary" @click.native="nextStep()">Next</VueButton>
    </div>
    <div class="row" v-if="secondStep">
      <div class="col-6">
        <VueText label="Start Date" item="newStartDate" model="newStartDate" :value="$store.state.newStartDate"/>
      </div>
      <div class="col-6">
        <VueText label="End Date" item="newEndDate" model="newEndDate" :value="$store.state.newEndDate"/>
      </div>
      <div class="col-6">
        <VueText label="Status" item="hostStatus" model="hostStatus" :value="$store.state.hostStatus"/>
      </div>
      <div class="col-6">
        <VueText label="Action" item="hostAction" model="hostAction" :value="$store.state.hostAction"/>
      </div>
      <VueButton color="success" @click.native="saveParty()">Save</VueButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';

export default {
  name: 'NewParty',
  components: {
    
  },
  data(){
    return{
      firstStep: true,
      secondStep: false,
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    nextStep(){
      var _this = this;
      if(_this.firstStep){
        _this.firstStep = false;
        _this.secondStep = true;
      }
    },
    saveParty(){
      var _this = this;
      this.$store.dispatch('saveParty')
    }
  },
  props: {

  },
  computed: {

  }
}
</script>