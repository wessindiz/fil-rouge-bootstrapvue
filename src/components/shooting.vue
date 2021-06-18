<template>
  <h2>Studio de photographie</h2>
  <video class="video" autoplay loop> 
      <source src="../assets/studio/shooting.mp4" type="video/mp4">
  </video>
  <section class="section3 d-flex">
      <div class="photo"></div>
      <div class="camera"></div>
  </section>
  <section class="section4">
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
p {
    color: rgb(247, 244, 240);
    text-align: center;
    font-family: 'Jura', sans-serif;
    font-size: 1em ;
    margin: 1em;
}
.video{
    margin-bottom: -0.25em;
    width: 100%;
}
.section3{
    height: 25vh;
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
</style>