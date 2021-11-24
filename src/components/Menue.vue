<template>
<div id="menue" >
<li>
     <a v-on:click="afficherTable" href="#">Table</a>
</li>
<li>
    <a v-on:click="afficherProjet" href="#">Projet</a>
</li>
<li>   
  <a v-on:click="afficherListes" href="#">Listes</a>
  
  </li> 
  <li>   
  <a v-on:click="afficherMeteo" href="#">Meteo</a>
  
  </li>
</div>

</template>

<script>
export default {
name:'Menue',
data:function(){
   
    return {}
},
props:{

},
methods:{
    afficherTable:function(){
        this.$router.push("table")
    },
    afficherProjet:function(){
        this.$router.push("projet")
    },
   afficherListes :function(){
        this.$router.push("liste")
    }, 
    afficherMeteo :function(){
        this.$router.push("meteo")
    }, 
}

}
</script>
<style>
ul {
 padding:0;
 margin:0;
 list-style:none;
 position:relative;
 
 
}

 li {
 float:left;
 margin:0;
 padding:0;
 position:relative;
 list-style:none;
}
 a {
   display:block;
   font:normal bold 14px tahoma;
   background:#3f4040;
   min-width:100px;
   text-align:center;
   padding:10px 15px 10px 15px;
   text-decoration:none;
   color:#FFF;
   border-top:4px solid #FFF;
   border-bottom:4px solid #00B4FF;
   transition:background 500ms,color 500ms,border-color 500ms;
}
a:hover {
   background:#666;
   border-top-color:#00B4FF;
   color:#00B4FF;
}

</style>