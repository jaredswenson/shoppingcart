<template>
  <Modal :size="$store.state.modalSize" @close="$store.state.showModal = false">
    <ModalHeader v-if="headeron">
      <ModalTitle>{{title}}</ModalTitle>
    </ModalHeader>
    <ModalBody>
      <slot></slot>
      <p>{{content}}</p>
    </ModalBody>
    <ModalFooter v-if="footeron">
      <VueButton @click.native="$store.state.showModal = false" color="danger">Close</VueButton>
    </ModalFooter>
  </Modal>
</template>

<script>
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'mdbvue';

export default {
  name: "VueModal",
  components:{
    Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter
  },
  data(){
    return{
      showModal: this.$store.state.showModal
    }
  },
  props: {
    title: String,
    id: String,
    content: String,
    size: {
      type: String,
      default: ''
    },
    footeron: {
      type: Boolean,
      default: true
    },
    headeron: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close(){
      $('#' + this.id).hide();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>






