<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-black p-0">
  <div class="container-fluid">
               <router-link to="/" class="nav-link fs-5"><img src="@/assets/24kor.jpg" class="logo" ></router-link>
    <button class="navbar-toggler btnmenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex align-items-center">
        <li class="nav-item">
           <router-link to="/" class="nav-link item" v-on:click="reload()"><span data-bs-toggle="collapse" data-bs-target="#navbarNav">Accueil</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Studios" class="nav-link item" v-on:click="reload()"><span data-bs-toggle="collapse" data-bs-target="#navbarNav">Studios</span></router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Tarifs" class="nav-link item" v-on:click="reload()">Tarifs</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Label" class="nav-link item" v-on:click="reload()">Label</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Contacts" class="nav-link item" v-on:click="reload()">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Connexion" class="nav-link item" v-on:click="reload()"><span data-bs-toggle="collapse" data-bs-target="#navbarNav">Se connecter<i class="fas fa-sign-in-alt"></i></span></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  <router-view class="color-change-2x"/>
  <footer>
    <nav class="navbar bottom navbar-dark">
         <div class="container-fluid d-flex justify-content-center p-0">
            <ul class="list-group list-group-horizontal-sm d-flex flex-row bd-highlight mb-3 w-100 justify-content-around ">
                <li class="list-group-item insta réseau"><i class="fab fa-instagram"></i></li>
                <li class="list-group-item fb réseau"><i class="fab fa-facebook"></i></li>
                <li class="list-group-item twi réseau"><i class="fab fa-twitter"></i></li>
                <li class="list-group-item yt réseau"><i class="fab fa-youtube"></i></li>
              </ul>
        </div>
        <ul class="list-group list-group-flush w-100 d-flex flex-column flex-md-row justify-content-md-center ">
          <li class="list-group-item mentions fw-bold">Mentions légales</li>
          <li class="list-group-item mentions fw-bold">Conditions générales de vente</li>
          <li class="list-group-item mentions fw-bold">Plan du site</li>
          <li class="list-group-item mentions fw-bold">Recrutement</li>
        </ul>
    </nav>
  </footer>
</template>


<script>
export default {
  components:{
  }
}
</script>




<style>
.color-change-2x {
	-webkit-animation: color-change-2x 2s linear infinite alternate both;
	animation: color-change-2x 2s linear infinite alternate both;
}

@-webkit-keyframes color-change-2x {
  0% {
    background: #310a5e;
  }
  100% {
    background: #3210c7;
  }
}
@keyframes color-change-2x {
  0%{
    background: #310a5e;
  }
  100% {
    background: #3210c7;
  }
}

/*IMPORTATION DE LA POLICE GOOGLE FONT 'JURA' */
@import url('https://fonts.googleapis.com/css2?family=Jura&display=swap');

#app {
  font-family: jura;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}


/* CSS POUR LA BARRE DE NAVIGATION DU MENU */
.logo{
    width: 5em;
}
ul{
    list-style: none;
}
header, .container-fluid{
    background-color: black;
}
.nav-link{
    font-family: jura;
    color: #fcac43 !important;
}
.item{
  font-size: 15px;
}
.btnmenu{
  margin-right: 1em;
  font-size: 20px;
  border-radius:  0.3em;
  background: linear-gradient(#ff9305, #f0c85c);
}

/* CSS POUR LA BARRE DE NAVIGATION DU FOOTER */
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

/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 415PX ET 991.98PX)*/ 
@media (min-width: 415px) and (max-width: 991.98px){
.logo{
    width: 7em;
}
.item{
  font-size: 30px;
}
.btnmenu{
  font-size: 30px !important;
}
.mentions{
    font-size: 10px !important;
}
.réseau{
    font-size: 1.25em;
}
}
/* NOUVELLES RÈGLES POUR LE FORMAT DESKTOP (991.98PX)*/ 
@media (min-width: 991.98px) {
.logo{
    width: 7em;
}
.navbar-collapse{
  display: flex;
  justify-content: center;
}
.item{
  font-size: 17px;
  margin-right: 2.5em;
}
.mentions{
    font-size: 18px !important;
}
.réseau{
    font-size: 1.5em;
}
}
</style>
