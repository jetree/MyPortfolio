<template>
  <div class="navbar">
    <button>
      <RouterLink to="/">
        home
      </RouterLink>
    </button>
    <button>
      <RouterLink to="/about">
        about
      </RouterLink>
    </button>
    <button>
      <RouterLink to="/portfolio">
        portfolio
      </RouterLink>
    </button>
    <button>
      <RouterLink to="/skill">
        skill
      </RouterLink>
    </button>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style>
  .navbar{
    background-color: #ffe6eb;
  }
  button{
    height: 30px;
    width: 120px;
    margin: 10px ;
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 20px;
    background-color: #333;
    color: #fff;
  }
  a:visited{
    color: #fff    
  }
</style>