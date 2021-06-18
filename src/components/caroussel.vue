<template>
<section class="6">
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/artistes/din.jpg" class="d-block w-100" alt="din">
    </div>
    <div class="carousel-item">
      <img src="../assets/artistes/torec.jpg" class="d-block w-100" alt="torec">
    </div>
    <div class="carousel-item">
      <img src="../assets/artistes/smay.jpg" class="d-block w-100" alt="smay">
    </div>
    <div class="carousel-item">
      <img src="../assets/artistes/wess.jpeg" class="d-block w-100" alt="wess">
    </div>
    <div class="carousel-item">
      <img src="../assets/artistes/nera.jpg" class="d-block w-100" alt="nera">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
</template>

<script>
export default {
    name: "caroussel",
    
}
</script>


<style>
.carousel-item{
    height: 45vh;
}
.section6{
    margin-bottom: 3em;
}

</style>