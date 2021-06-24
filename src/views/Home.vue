<template>
  <div class="home color-change-2x">
      <main class=" min-vh-100">
        <h1 class="animate__animated animate__slideInRight text-center fw-bold">24 Carats Studio</h1>
      </main>
      <section class="section1 min-vw-100 mb-5 text-center">
        <p class="mt-4">24 Carats Studio est à la pointe de la technologie. Profitez d'une qualité optimale pour vos enregistrements, mixages, masterings, 
         sous les conseils avisés de nos professionnels.</p>
      </section>   
      <section class="section2">
      </section>
      <section class="section3 text-center">
         <p class="mt-4">Découvrez nos différents studios que ce soit pour vous lâcher devant un micro, ou taper la pose devant un appareil photo.</p>
      </section>
      <section class="section4 d-flex">
         <div class="micro col-6"></div>
         <div class="photo col-6"></div>
      </section>
      <section class="section5 text-center">
         <p class="mt-4"> Découvrez nos artistes !</p>
      </section>
      <caroussel/>
  </div>    
</template>



<script>
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
   padding: 0;
   margin: 0;
}
  
main {
    background: url("../assets/accueil/consolemix.jpg") no-repeat center/ cover;
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

p {
    color: rgb(233, 161, 27);
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-size: 1.25em;
}

.section1{
    padding: 5%;
}

.section2 {
    min-height:35vh;
    background: url("../assets/accueil/ingeson.jpg") no-repeat center/ cover;
}

.section3 {
    padding: 5%;
}

.section4 {
    height: 25vh;
}

.section4 .micro {
    background: url("../assets/accueil/rode.jpg") no-repeat center/ cover;
}

.section4 .photo{
    background: url("../assets/accueil/canon.jpg") no-repeat center/ cover;
}

.section5 {
    padding: 5%;
}

/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 415PX ET 991.98PX)*/ 
@media (min-width: 415px) and (max-width: 991.98px) {
  main{
    min-height: 90vh !important;
  }
  h1 {
    font-size: 45px !important;
    }
    p {
   font-size: 1.5em;
   }
   .section1{
    padding: 8%;
    }
    .section2 {
    min-height: 45vh;
    }
    .section3 {
    padding: 8%;
    }
    .section4 {
    height: 30vh;
    }
    .section5{
      padding: 8%;
    }
}

/* NOUVELLES RÈGLES POUR LE FORMAT DESKTOP (991.99PX)*/ 
@media (min-width: 991.99px) {
  main{
    min-height: 90vh;
  }
  h1{
    font-size: 85px;
  }
    p {
   font-size: 2em;
   }
   .section1{
    padding: 8%;
    }
    .section2 {
    min-height: 70vh;
    }
    .section3 {
    padding: 8%;
    }
    .section4 {
    height: 55vh;
    }
    .section5{
      padding: 8%;
    }
}
</style>
