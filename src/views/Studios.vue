<template>
<div class="studios">
  <main>
      <h1>Nos studios</h1>    
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
}
h1 {
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-weight: bold !important;
    padding-top: 2em !important;
    font-size: 35px !important;
    color: #ffffff;
    text-shadow: 0.06em 0.06em 0.03em rgb(48, 150, 218);
}
</style>



