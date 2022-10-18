<template>
  <Header />
    <div class='test'>
      <Aside />
      <Content />
    </div>
  <Footer />
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import Aside from './components/Aside.vue'
import { provide } from 'vue';
import store from './store'
export default {
  name: 'App',
  setup(){
    provide('store', store)
  },
  components: {
    Header,
    Footer,
    Content,
    Aside
  },
}
</script>
<style>
  .test {
    display: flex;
  }
  aside {
    width: 25%
  }
  section {
    width: 75%
  }
</style>