<template>
<div>
  <GoodHeader></GoodHeader>
  <p>{{ number}}</p>
  <GoodNum :number="number" v-on:my-click="number = $event"></GoodNum>
  <GoodNum :number="number" ></GoodNum>
</div>
  
</template>

<script>
import GoodHeader from "./GoodHeader";

export default{
  data() {
    return{
      number: 10
    }  
  },
  components: {
    GoodHeader
  } ,
  methods: {
    increment() {
      this.$emit("my-click", this.number + 3);
    }
  } 
};
</script>

<style scoped>
div{
  border: 1px solid blue;
}
</style>
