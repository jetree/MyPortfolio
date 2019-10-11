<template>
  <div>
    <header>
      <Header />
    </header>
    <div>
      <Navbar />
    </div>
    <main>
      <router-view/>
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
</style>
