<template>
  <tbl>
    <tbl-head>
      <tr>
        <th v-for="header in headers">{{header}}</th>
      </tr>
    </tbl-head>
    <tbl-body>
      <tr v-for="party in tableData" @mouseover="test(party)">
        <th scope="row" v-for="item in party">{{item}}</th>
      </tr>
    </tbl-body>
  </tbl>
</template>
<script>
  import { Tbl, TblHead, TblBody } from 'mdbvue';

  export default {
    name: 'VueTable',
    components: {
      Tbl,
      TblHead,
      TblBody
    },
    mounted(){
    	
    },
    data(){
    	return{
    		tableData: this.data
    	}
    },
    props:{
		  data: {
	        type: Array,
	        default: ''
	    },
	    headers: {
	    	type: Array,
	      default: []
	    }    
    },
    methods:{
      test(party){
        console.log(party)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>