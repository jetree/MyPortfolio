<template>
  <footer>
    <div class="sns">
      <a class="sns-icon" id="twitter" href="https://twitter.com/doitokatsuki">
        <i class="fab fa-twitter SNS-icon"></i>
      </a>
      <a class="sns-icon" id="github" href="https://github.com/jetree">
        <i class="fab fa-github SNS-icon"></i>
      </a>
    </div>
    <p>(c)2019 Jetree</p>
  </footer>
</template>

<script>
  export default{
    
  }
</script>

<style>
  footer{
    background-color: #ffe6eb
  }

  p{
    margin: 0
  }

  .sns-icon{
    padding: 0 30px;
  }

  a{
    text-decoration: none;
  }

  #twitter{
    color:#1DA1F2;
  }
  
  #github{
    color:#333
  }
</style>