<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->
    <p>{{msg}}</p>
    <p>{{test}}</p>
    <button @click="change">点我</button>
    <button @click="changeRouter('about')">关于</button>
    <button @click="changeRouter('users')">用户</button>
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Hello from 'components/Hello';
  import * as type from './store/types';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      Hello,
    },
    computed: {
      test: function () {
        return this.$store.state.data1.a1;
      }
    },
    methods: {
      change: function () {
        this.$store.dispatch({
          type: 'changeWords',
          message: {
            key: 'a1',
            data: '测试'
          }
        });
      },

      changeRouter: function (name) {
        console.log('changeRouter===>', name);
        let router = this.$router;
        router.push(name)
      }

    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
