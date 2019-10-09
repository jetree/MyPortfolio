<template>
  <div class="home">
    <div id="title">
      Hello World
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
  .home{
    margin: 0 auto;
    max-width: 1200px;
    background-image: url("../../public/img/main2.jpg");
    background-size: cover;
    height:700px;
  }

  #title{
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translateX(-50%)translateY(-50%);
  }
</style>
