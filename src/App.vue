<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
<Navbar/>

<div class="pt-20">
  <router-view></router-view>
</div>

</template>