<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bella-bella">Bella</router-link>|
      <router-link to="/daisy-mae">Daisy Mae</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div>
      {{ today }}
    </div>
    <router-view/>
  </div>
</template>
<script>
import '@/assets/styles.less'
import moment from 'moment'

export default {
  name: 'App',
  data () {
    return {
      today: `Today is: ${moment.utc().local().format('MM/DD/YYYY HH:mm:ss')}`
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
