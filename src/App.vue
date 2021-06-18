<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-black p-0">
  <div class="container-fluid">
               <router-link to="/" class="nav-link fs-5"><img src="@/assets/24kor.jpg" class="logo" ></router-link>
    <button class="navbar-toggler btnmenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex align-items-center">
        <li class="nav-item">
           <router-link to="/" class="nav-link fs-5">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link fs-5">Studios</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/about" class="nav-link fs-5">Tarifs</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/about" class="nav-link fs-5">Label</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link fs-5">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  <router-view/>
  <footer>
    <nav class="navbar bottom navbar-dark">
         <div class="container-fluid d-flex justify-content-center p-0">
            <ul class="list-group list-group-horizontal-sm d-flex flex-row bd-highlight mb-3 w-100 justify-content-around ">
                <li class="list-group-item insta réseau"><i class="fab fa-instagram"></i></li>
                <li class="list-group-item snap réseau"><i class="fab fa-snapchat-ghost"></i></li>
                <li class="list-group-item fb réseau"><i class="fab fa-facebook"></i></li>
                <li class="list-group-item twi réseau"><i class="fab fa-twitter"></i></li>
                <li class="list-group-item yt réseau"><i class="fab fa-youtube"></i></li>
                <li class="list-group-item sc réseau"><i class="fab fa-soundcloud"></i></li>
              </ul>
        </div>
        <ul class="list-group list-group-flush w-100 d-flex flex-column flex-md-row justify-content-md-center ">
          <li class="list-group-item mentions">Mentions légales</li>
          <li class="list-group-item mentions">Conditions générales de vente</li>
          <li class="list-group-item mentions">Plan du site</li>
          <li class="list-group-item mentions">Recrutement</li>
        </ul>
    </nav>
  </footer>
</template>


<script>

</script>




<style scoped>

/*importation de la police google font 'jura' */
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');

#app {
  font-family: jura;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


/* css pour la barre de navigation du menu */
.logo{
    width: 5em;
}
ul{
    list-style: none;
}
header, .container-fluid{
    background-color: black !important;
}
.nav-link{
    font-family: jura;
    color: #fcac43 !important;
}
.btnmenu{
    font-size: 20px !important;
    border-radius:  0.3em !important;
    background: linear-gradient(#ff9305, #f0c85c) !important;
}



/* css pour la barre de navigation du footer */
.bottom{
    background-color: black !important;
}

.réseau{
    background-color: black !important;
    color: white !important;
}

.mentions{
    background-color: black !important;
    color: goldenrod !important;
    font-size: 8px !important;
}
.fab:hover{
    transform: scale(1.3, 1.3);
    transition: 0.15s;
    text-shadow: 0.1em 0.1em 0.03em rgb(97, 96, 93);
    cursor: pointer;
}
.fab:active{
    transform: scale(1.3, 1.3);
    transition: 0.15s;
    text-shadow: 0.1em 0.1em 0.03em rgb(94, 93, 92);
}
.insta i:hover, .insta:active{
    color: #e41ec9;
}
.snap i:hover, .snap:active{
    color: rgb(240, 219, 35);
}
.fb i:hover, .fb:active{
    color: rgb(86, 86, 228);
}
.twi i:hover, .twi:active{
    color: rgb(75, 135, 247);
}
.yt i:hover, .yt:active{
    color: rgb(161, 15, 15);
}
.sc i:hover, .sc:active{
    color: rgb(231, 139, 34);
}
</style>
