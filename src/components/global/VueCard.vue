<template>
    <card>
      <card-img :src="cardimage" v-if="!hideimage"></card-img>
      <card-body>
        <card-title>{{title}}</card-title>
        <card-text>{{text}}</card-text>
        <slot></slot>
      </card-body>
    </card>
</template>

<script>
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';

export default {
  name: "VueCard",
  components: {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
  },
  props: {
    title: {
        type: String,
        default: 'Card Title'
    },
    text: {
    	type: String,
      default: 'Card Text'
    },
    btntext: {
    	type: String,
      default: 'Card Text'
    },
    btncolor: {
      type: String,
      default: 'primary'
    },
    cardimage: {
      type: String,
      default: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg'
    },
    hideimage:{
      type: Boolean,
      default: false
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
