<template>
<main class="d-flex align-items-center justify-content-center">
  <form action="" class="d-flex justify-content-center formulaire fw-bold w-100">
    <fieldset class="d-flex justify-content-center w-100 ">
      <div class="divform row w-75 justify-content-center py-3">
        <div class="emoji"><i class="fas fa-user-circle"></i></div>

        <h2 class="fs-1 mb-2">S'identifier</h2>

        <div class="mb-1 mt-3 w-75 mail ipt mt-3">
          <label for="exampleInputEmail1" class="form-label"><i class="fas fa-envelope"></i> Adresse Email</label>
          <input type="email" class="form-control text-center" v-bind:class="{'red':emailInvalide}" v-model="input" v-on:input='verifmail()' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail"/>
          <p class="error mt-1" v-if="emailInvalide" >
            Entrez une adresse mail valide!
          </p>
        </div>

        <div class="mb-2 mt-1 w-75 pass ipt">
          <label for="exampleInputPassword1" class="form-label"><i class="fas fa-lock"></i> Mot de passe</label>
          <input type="password" class="form-control text-center" id="exampleInputPassword1" placeholder="mot de passe"/>
          <p class="forgot mt-2"><a href="">mot de passe oublié?</a></p>
        </div>
        
        <div class="col-10 d-flex justify-content-center mb-2">
          <button type="button" class="btn btn-primary col-8 w-75" v-on:click='turnAround()'>
            SE CONNECTER
          </button>
        </div>

        <div class="signup mt-2">
          <p>Pas encore de compte? <br />
          <a href="">S'enregistrer ici</a>
          </p>
        </div>

     </div>
   </fieldset>
  </form>
</main>
</template>




<script>
export default {
    data(){
        return{
            regEmail: /^([\w-.]+)@((?:[\w]+.)+)([a-zA-Z]{2,4})/i,
            emailInvalide: false,
            rotate: false   
        }
    },
    
    methods:{
        //LE MESSAGE D'ERREUR S'AFFICHE QUAND L'EMAIL EST INVALIDE
        verifmail:function(){
            if (this.regEmail.test(this.input)==false){
            this.emailInvalide= true;
            }
            else{
                this.emailInvalide= false;
            }
        },
        turnAround:function(){
            let button=document.querySelector(".btn");
            button.classList.add('rotate-hor-center');
            setInterval(function(){
                button.classList.remove('rotate-hor-center')
                ;},2000);clearInterval()
        }
    }
}
</script>





<style scoped>

main{
    min-height: 63vh;
}
.formulaire {
  font-family: jura;
  max-width: 45em;
  padding: 6%;
}

.divform {
  padding: 1em 0;
}

fieldset {
  width: 85%;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border: 1px solid #610606;
  background: linear-gradient(#a37cf1, #f1d77e);
}
.emoji {
  margin-bottom: 0.5em;
}

.emoji .fas {
  font-size: 3em;
  color: rgb(0, 0, 0);
}

h2 {
  font-family: jura;
  color: #050300fa;
  text-shadow: 0.06em 0.06em 0.03em rgb(200, 213, 255);
}

label{
    font-size: 14px;
}
input {
  border: 1px solid purple !important;
  height: 1.75em;
}

.forgot {
  font-size: 0.7em;
}

p{
    color: black;
}

button {
  height: 2.5em;
  font-size: 12px;
  border-radius: 0.5em;
  background: linear-gradient(#1e058b, #640c7a);
}

.signup {
  font-size: 12px;
}
.error {
  color: rgb(255, 9, 9);
  font-size: 10px;
}
.red {
  border: red 1.5px solid !important;
}


/* EFFET SUR LE BOUTON SUBMIT */
.rotate-hor-center {
	-webkit-animation: rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 5 both;
	animation: rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 5 both;
}

@-webkit-keyframes rotate-hor-center {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-360deg);
            transform: rotateX(-360deg);
  }
}
@keyframes rotate-hor-center {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-360deg);
            transform: rotateX(-360deg);
  }
}


/* NOUVELLES RÈGLES POUR LE FORMAT TABLETTE (ENTRE 415PX ET 991.98PX)*/ 
@media (min-width: 415px) and (max-width: 991.98px) {
  main{
    min-height: 79vh;
  }
  .formulaire {
  max-width: 40em;
}

fieldset {
  width: 90%;
}

.emoji .fas {
  font-size: 6em;
}
label{
    font-size: 28px;
}

.ipt{
    margin-top: 2em!important;
}
input {
  border: 1px solid purple;
  height: 2.25em;
  font-size: 1.5em;
}

.forgot {
  font-size: 1.25em;
}

p{
    color: black;
    font-size: 1.5em;
}

button {
  font-size: 20px;
    height: 3em;
}

.signup {
  font-size: 14px;
}
.error {
  color: rgb(255, 9, 9);
  font-size: 18px;
}
}

/* NOUVELLES RÈGLES POUR LE FORMAT DESKTOP (991.98PX)*/ 
@media (min-width: 991.98px){
      main{
    min-height: 79vh;
  }
  .formulaire {
  max-width: 40em;
}
fieldset {
  width: 90%;
}

.emoji .fas {
  font-size: 6em;
}
label{
    font-size: 20px;
}
.ipt{
    margin-top: 2em!important;
}
input {
  border: 1px solid purple;
  font-size: 1em;
}

.forgot {
  font-size: 1em;
}
p{
    color: black;
    font-size: 1.25em;
}

button {
  font-size: 20px;
    height: 2.5em;
}

.signup {
  font-size: 14px;
}
.error {
  color: rgb(255, 9, 9);
  font-size: 16px;
}
}
</style>