<template>
  <div>
    <header>
      <Header />
    </header>
    <div id="nav">
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

  export default{
    components:{
      Header,
      Navbar
    }
  }
</script>

<style>

</style>
