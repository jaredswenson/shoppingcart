<template>
  <div class="party row">
    <div class="col-2"></div>
    <div class="col-8">
      <h1>Parties</h1>
      <hr/>
      <VueButton color="secondary" @click.native="showModal('showNewParty', 'md', 'New Party', '', true, false)">Create Party</VueButton>
      <VueTable :data="$store.state.parties" :headers="$store.state.headers"></VueTable>
      <VueButton color="secondary" @click.native="showModal('showNewParty', 'md', 'New Party', '', true, false)">Create Party</VueButton>

    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';


export default {
  name: 'party',
  components: {
    
  },
  data(){
    return{
      store: this.$store,
      showGrid: true,
    }
  },
  props: {

  },
  computed: {
    state(){
      return this.store.state
    },
    
  },
  methods: {
   showModal(slot, size, title, content, header,footer){
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
