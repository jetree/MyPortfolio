<template>
 <div>
   <ul class="skills">
     <li>
       <img src="../assets/img/laravel.svg" alt="laravel" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/Vue.png" alt="Vue" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/html.png" alt="html5" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/css.png" alt="css3" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/javascript.svg" alt="javascript" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/php.png" alt="php" class="skill-item">
     </li>
     <li>
       <img src="../assets/img/kintone.png" alt="kintone" class="skill-item">
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
    object-fit:contain;
  }
</style>