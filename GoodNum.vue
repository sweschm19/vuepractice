<template>
<div>
<p>Good({{ halfNum }})</p>
<button @click="increment">+1</button>
</div>
  
</template>

<script>
export default {
  props: ["number","testProps"],
  computed: {
    halfNum(){
      return this.number / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.number + 3); //(x,second hikisuu) child methods,second hikisuu
    }
  }
};
</script>

<style scoped>
div{
  border: 1px solid blue;
}
</style>
