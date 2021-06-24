<template>
<div class="studios">
  <main>
      <h1 class="animate__animated animate__slideInRight text-center fw-bold">Nos studios</h1>    
  </main>
  <record/>
  <shooting/>
</div>      
</template>




<script>
import record from '../components/record.vue'
import shooting from '../components/shooting.vue'

export default {
  name: 'Home',
  components: {
    record,
    shooting
  }
}
</script>




<style scoped>
.studios{
  background:linear-gradient(#1e058b, #640c7a);
}
main {
  min-height: 100vh;
  background: url("../assets/studio/platine1.jpg") no-repeat center/ cover;
  animation-duration: 2s;
}
.animate__animated.animate__slideInRight{
  --animate-duration: 1s;
}
h1 {
    font-family: 'Jura', sans-serif;
    padding-top: 2em;
    font-size: 35px;
    color: #ffffff;
    text-shadow: 0.06em 0.06em 0.03em rgb(48, 150, 218);
}


/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 768PX ET 991.98PX)*/
@media (min-width: 400px) and (max-width: 991.98px) {
  main{
    min-height: 90vh !important;
  }
  h1 {
    font-size: 45px;
   }
}
  

  /* NOUVELLES RÈGLES POUR LE FORMAT DESKTOP (991.98PX)*/ 
@media (min-width: 991.98px) {
  main{
    min-height: 100vh !important;
  }
  h1 {
    font-size: 85px;
   }
}
</style>



