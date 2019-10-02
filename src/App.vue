<template>
  <div>
    <header>
      <Header />
    </header>
    <div id="nav">
      <navbar />
    </div>
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import navbar from './components/navbar.vue'

  export default{
    components:{
      Header,
      navbar
    }
  }
</script>

<style>

</style>
