<template>
  <div id="app">
    <div id="tete">
    <Menue> </Menue>
    </div>
    <div id="gauche"> lift</div>
    <div id="centre"> 
      <router-view/>
  </div>
  <div id="droite">right</div>
  </div>
</template>

<script>
import Menue from './components/Menue.vue'
import route from './Router.js'
export default {
  name: 'App',
  router:route,
  components: {
     
    Menue
  },
  data:function(){
      return {  }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#tete {

width:100%;
display:flex;
position:relative;
}
#gauche{
width:150px;
float:left;
display:block;
}
#centre{
width:calc(100% - 318px);
float:left;
display:block;
}
#droite{
  width:150px;
  float:right;
  
}

</style>
