<template>
  <h2 class="text-center mt-3">Studio d'enregistrement</h2>
  <video class="video w-100" autoplay loop> 
      <source src="../assets/studio/rec.mp4" type="video/mp4">
  </video>
   <section class="section1 d-flex">
        <div class="record1 w-50 h-100"></div>
        <div class="record2 w-50 h-100"></div>
   </section>
   <section class="section2 text-center">
        <p>Nous vous présentons notre studio d’enregistrement dernier cri.
          Avec des micros, des enceintes et des logiciels nouvelle génération, vous pouvez venir vous exprimer devant le micro, et faire ressortir votre âme musicale.<br><br>
          Faites de la musique accompagné de nos ingénieurs du son expérimentés,  qui sauront vous guider au mieux, pour faire sortir ce qu’il y a de meilleur en vous.<br><br> Nos professionnels sauront également vous guider dans 
          le partage de votre musique, et la direction artistique de vos projets afin de vous accompagner au mieux dans votre parcours musical.</p>
         </section>
</template>



<script>
export default {
    name: 'record',
}
</script>



<style scoped>
h2{
    padding: 8%;
    font-size: 20px !important;
    color: rgb(233, 161, 27);
    text-shadow: 0.04em 0.05em 0.05em rgba(6, 6, 7, 0.904);
}
.video{
    margin-bottom: -0.25em;
}

.section1{
    height: 25vh;
}
.record1{
    background: url("../assets/studio/record1.jpg") no-repeat center/ cover;
}
.record2{
    background: url("../assets/studio/record2.jpg") no-repeat center/ cover;
}
.section2{
    padding: 5%;
}
p {
    color: rgb(247, 244, 240);
    font-family: 'Jura', sans-serif;
    font-size: 1em ;
}

/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 415PX ET 991.98PX)*/ 
@media (min-width: 415px) and (max-width: 991.98px) {
  h2{
    font-size: 30px !important;
    }

  .section1{
    height: 25vh;
    }

   p {
    font-size: 1.5em ;
    }
}
  

  /* NOUVELLES RÈGLES POUR LE FORMAT DESKTOP (991.98PX)*/ 
@media (min-width: 991.98px) {
  h2{
    font-size: 60px !important;
}
.section1{
    height: 45vh;
}
p {
    font-size: 2em ;
}
}
</style>