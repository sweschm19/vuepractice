<template>
<div>
  <GoodHeader></GoodHeader>
  <GoodNum></GoodNum>
</div>
  
</template>

<script>
import GoodHeader from "./GoodHeader";

export default{
  components: {
    GoodHeader: GoodHeader
  }  
};
</script>

<style scoped>
div{
  border: 1px solid red;
}
</style>
