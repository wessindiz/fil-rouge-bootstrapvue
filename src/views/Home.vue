<template>
  <div class="home">
      <main>
        <h1>24 Carats Studio</h1>
      </main>
      <section class="section1 mw-100">
        <p>24 Carats Studio est à la pointe de la technologie. Profitez d'une qualité optimale pour vos enregistrements, mixages, masterings, 
         sous les conseils avisés de nos professionnels.</p>
      </section>   
      <section class="section2">
      </section>
      <section class="section3">
         <p>Découvrez nos différents studios que ce soit pour vous lâcher devant un micro, ou taper la pose devant un appareil photo.</p>
      </section>
      <section class="section4">
         <div class="micro w-50"></div>
         <div class="photo w-50"></div>
      </section>
      <section class="section5">
         <p> Découvrez nos artistes !</p>
      </section>
      <caroussel/>
  </div>    
</template>


<script>
// @ is an alias to /src
import caroussel from '../components/caroussel.vue'

export default {
  name: 'Home',
  components: {
    caroussel
  }
}
</script>

 

<style scoped>
.home{
   background:linear-gradient(#1e058b, #640c7a);
}
  
main {
    min-height: 100vh;
    background: url("../assets/accueil/consolemix.jpg") no-repeat center/ cover;
}

h1 {
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-weight: bold !important;
    padding-top: 2em !important;
    font-size: 28px !important;
    color: #ffffff;
    text-shadow: 0.06em 0.06em 0.03em rgb(48, 150, 218);
}

p {
    color: rgb(230, 174, 34);
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-size: 1em !important;
}

.section1{
    padding:7%;
}

.section2 {
    min-height:35vh;
    background: url("../assets/accueil/ingeson.jpg") no-repeat center/ cover;
}

.section3 {
    text-align: center;
    padding: 7%;
}

.section4 {
    height: 25vh;
    display: flex;
}

.section4 .micro {
    background: url("../assets/accueil/rode.jpg") no-repeat center/ cover;
}

.section4 .photo{
    background: url("../assets/accueil/canon.jpg") no-repeat center/ cover;
}

.section5 {
    text-align: center;
    padding: 7%;
}
</style>
