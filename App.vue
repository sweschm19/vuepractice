<template>
<div>
  <GoodHeader></GoodHeader>
  <GoodNum></GoodNum>
  <button @click="currentComponent= 'Home'">Home</button>
  <button @click="currentComponent= 'About'">About</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <div>
   <h2>イベントのフォーム</h2>
   <label for="title">入力内容</label>
   <input id="title" type="text" 
   v-model.number="eventData.title"> 
   <pre>{{eventData.title}}</pre>
   <label for="maxNumber">最大人数</label>
   <input id="maxNumber" type="number" 
      v-model.number="eventData.maxNumber"> //event(object)
   <p>{{typeof eventData.maxNumber}}</p>
   <label for="host">Hosting side</label>
   <input id="host" type="text" 
   v-model.trim="eventData.host"> 
   <p>{{eventData.host}}</p>
   <label for="details">イベントの内容</label>
   <textarea id="details" cols="30" rows="10"
   v-model="eventData.details">
   </textarea>
   <pre>{{eventData.details}}</pre>
  </div>
</div>
  
</template>

<script>
import GoodHeader from "@/components/GoodHeader.vue";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title:"入力内容",
        maxNumber: 0,
        host:" ",
        details:""
          
      }
    };
  },
  components: {
    GoodHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
}
