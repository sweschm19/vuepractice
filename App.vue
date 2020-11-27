<template>
<div>
  <GoodHeader></GoodHeader>
  <GoodNum></GoodNum>
  <button @click="currentComponent= 'Home'">Home</button>
  <button @click="currentComponent= 'About'">About</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <div style="padding: 10rem;">
   <h2>イベントのフォーム</h2>
   <EventTitle v-model="eventData.title"></EventTitle>
   <EventTitle
   :value="eventData.title"
   @input="eventData.title = $event"></EventTitle>
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
   <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
   <label for="isPrivate">Private</label>
   <p>{{eventData.isPrivate}}</p>
   <p>参加条件</p>
   <input type="checkbox" id="10" value="10代" v-model="eventData.target">
  <lable for="10">10代</lable>

  <input type="checkbox" id="20" value="20代" v-model="eventData.target">
  <lable for="20">20代</lable>

  <input type="checkbox" id="30" value="30代" v-model="eventData.target">
  <lable for="30">30代</lable>

  <input type="checkbox" id="40" value="40代" v-model="eventData.target">
  <lable for="40">40代</lable>
  <p>参加費</p>
  <input type="radio" id="free" value="無料" v-model="eventData.price">
  <label for="free">無料</label>
  <input type="radio" id="paid" value="有料" v-model="eventData.price">
  <label for="paid">有料</label>
  <p>開催場所</p>
  <select v-model="eventData.location">
    <option v-for="location in locations"
    :key="location">{{location}}</option>
  </select>
  <label>{{ eventData.location}}</label>
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
      locations:["Tokyo","Osaka","Kobe"],
      eventData: {
        title:"入力内容",
        maxNumber: 0,
        host:" ",
        details:"",
        isPrivate: false,
        target: [],
        price: "無料"
          
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
</script>
