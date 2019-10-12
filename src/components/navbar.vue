<template>
  <div class="navbar">
    <RouterLink to="/">
      <button>
        home
      </button>
    </RouterLink>
    <RouterLink to="/about">
      <button>
        about
      </button>
    </RouterLink>
    <RouterLink to="/portfolio">
      <button>
        portfolio
      </button>
    </RouterLink>
    <RouterLink to="/skill">
      <button>
        skill
      </button>
    </RouterLink>
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