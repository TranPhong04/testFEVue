<template>
  <AppNavbar />
  <router-view></router-view>
</template>



<script>
import AppNavbar from './components/AppNavbar.vue';

export default{
  name: 'App',
  components: {AppNavbar},
  data() {
    
    return {
      filmList: []
    };
  },
 
  methods: {

  }
 
}
</script>
<style lang="scss">
</style>
