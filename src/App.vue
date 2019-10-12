<template>
  <div>
    <header>
      <Header />
    </header>
    <div>
      <Navbar />
    </div>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default{
    components:{
      Header,
      Navbar,
      Footer
    }
  }
</script>

<style>
  main{
    min-height: 80vh;
    max-width: 1200px;
    margin: 0 auto;
  }

  .fade-enter-active{
    transition: opacity 0.7s;
  }
  
  .fade-enter{
    opacity: 0;
  }

</style>
