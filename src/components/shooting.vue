<template>
  <h2 class="text-center">Studio de photographie</h2>
  <video class="video" autoplay loop> 
      <source src="../assets/studio/shooting.mp4" type="video/mp4">
  </video>
  <section class="section3 d-flex">
      <div class="photo"></div>
      <div class="camera"></div>
  </section>
  <section class="section4 text-center">
     <p>Vous avez besoin d'un shooting, de retouches photos, ou d'un projet audiovisuel? Nos professionnels sauront vous aider et vous mettre à l’aise. <br><br>
      Notre studio photo est à votre disposition pour les shootings, les interviews et également les clips vidéo.<br><br>
      Vous avez la possibilité de créer un book avec nos photographes expérimentés, de tourner un clip vidéo avec nos clippeurs créatifs, ou encore de gérer vos réseaux sociaux
      avec l'aide de nos community manager qui connaissent la toile comme leurs poches.<br><br>
      Prenez la pause et prenez du plaisir !</p>
</section>
</template>




<script>
export default {
    name: 'shooting',
}
</script>




<style scoped>
h2{
    padding: 8%;
    font-size: 20px;
    color: rgb(233, 161, 27);
    text-shadow: 0.04em 0.05em 0.05em rgba(6, 6, 7, 0.904);
}
p {
    color: rgb(247, 244, 240);
    font-family: 'Jura', sans-serif;
    font-size: 1em ;
}
.video{
    margin-bottom: -0.25em;
    width: 100%;
}
.section3{
    height: 25vh;
}
.section4{
    padding: 8%;
}

.photo{
    height: 100%;
    width: 50%;
    background: url("../assets/studio/photo.jpg") no-repeat center/ cover;
}
.camera{
    height: 100%;
    width: 50%;
    background: url("../assets/studio/camera1.jpg") no-repeat center/ cover;
}

/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 415PX ET 991.98PX)*/ 
@media (min-width: 415px) and (max-width: 991.98px) {

h2{
    font-size: 30px !important;
    }

  .section3{
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
.section3{
    height: 60vh;
}
p {
    font-size: 2em ;
}
}
</style>