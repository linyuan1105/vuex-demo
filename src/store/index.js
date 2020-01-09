import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count:1
  },
  getters:{
    getStateCount:function(state){//state这个参数永远是我们用来保存参数的那个对象
      return state.count+10
    }
  },
  mutations:{
    add(state,n){
      state.count++;
    },
    reduction(state,n){
      state.count =  state.count - n;//这里的n是action中传过来的事件触发,同时进行参数n的传递
    }

  },
  actions:{
    addFun(context){//接受一个与store实例具有相同方法的属性的context对象
    context.commit("add")
    },
    reductionFun(context){
      var n = 1;
      context.commit("reduction",n)//如果传入两个参数一个是事件reduction,一个是n
    },
    reductionFun10(context){
       var n = 10;
       context.commit("reduction",n)//如果传入两个参数一个是事件reduction,一个是n
     }                                //我们还需要在mutation中的reduction事件中使用传入的参数
  }
})
export default store
