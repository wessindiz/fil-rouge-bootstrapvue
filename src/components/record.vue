<template>
  <h2>Studio d'enregistrement</h2>
  <video class="video" autoplay loop> 
      <source src="../assets/studio/rec.mp4" type="video/mp4">
  </video>
   <section class="section1 d-flex">
        <div class="record1"></div>
        <div class="record2"></div>
   </section>
   <section class="section2">
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



<style>
h2{
    padding: 8%;
    text-align: center;
    font-size: 30px;
    color: rgb(233, 161, 27);
    text-shadow: 0.04em 0.05em 0.05em rgba(6, 6, 7, 0.904);
    margin-top: 2em;
}

.video{
    margin-bottom: -0.25em;
    width: 100%;
}

.section1{
    height: 25vh;
}
.record1{
    height: 100%;
    width: 50%;
    background: url("../assets/studio/record1.jpg") no-repeat center/ cover;
}
.record2{
    height: 100%;
    width: 50%;
    background: url("../assets/studio/record2.jpg") no-repeat center/ cover;
}
.section2{
    padding: 8%;
}
p {
    color: rgb(247, 244, 240);
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-size: 1em ;
    margin: 1em;
}
</style>