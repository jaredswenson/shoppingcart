<template>
  <div class="about">
    <router-link to="/party">
      Return to Parties
    </router-link>
    <p v-for="(value, key) in $store.state.currentParty">{{key.toUpperCase()}} - {{value}}</p>
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
   methods: {
    
   },
  computed: {
    
  },
}
</script>

