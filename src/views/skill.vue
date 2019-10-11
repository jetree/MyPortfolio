<template>
 <div>
   <ul class="skills">
     <li>
       <img src="img/laravel.svg" alt="laravel" class="skill-item">
     </li>
     <li>
       <img src="img/vue.png" alt="Vue" class="skill-item">
     </li>
     <li>
       <img src="img/html.png" alt="html5" class="skill-item">
     </li>
     <li>
       <img src="img/css.png" alt="css3" class="skill-item">
     </li>
     <li>
       <img src="img/javascript.svg" alt="javascript" class="skill-item">
     </li>
     <li>
       <img src="img/php.png" alt="php" class="skill-item">
     </li>
   </ul>
 </div>
</template>

<script></script>

<style>
  .skills {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
  }
  li{
    list-style: none;
    display: block;
    padding: 20px;
    margin: 15px auto;
    width: 250px;
  }
  .skill-item{
    width: 250px;
    height: 250px;
    object-fit:inherit;
    object-position: 0 0;
  }
</style>