<template>
  <div class="div">
    {{msg}}
    <!-- {{name}} -->
    <h2>我是直接获取的:{{this.$store.state.count}}</h2>
    <h2>我是从get获取的:{{this.$store.getters.getStateCount}}</h2>
    <button @click="addFun">+{{range}}</button>
    <button @click="reductionFun">-{{range}}</button>
    <button @click="reductionFun10">-10</button>
  </div>
</template>
<script>
  export default{
    // name:'Hellow world',
    data(){
      return {
        msg:'Welcome to your Vue.js App',
        range:1
      }
    },
    methods:{
      addFun(){
        // this.$store.commit('add');//直接访问mutation中的事件add
        this.$store.dispatch('addFun')//间接访问action中的addfun然后触发mutation中的事件add
        // this.$slots.state.count++;
        // console.log(this.$store.state.count++)
      },
      reductionFun(){
        // this.$store.commit('reduction');
        this.$store.dispatch('reductionFun');
        // this.$slots.state.count++;
        // console.log(this.$store.state.count--)
      },
      reductionFun10(){
        // this.$store.commit('reduction');
        this.$store.dispatch('reductionFun10');
        // this.$slots.state.count++;
        // console.log(this.$store.state.count--)
      },


    }

  }
</script>
<style scoped>
  .div{
    font-size: 100px;
    background: gray;
    color: blue;
  }

</style>
