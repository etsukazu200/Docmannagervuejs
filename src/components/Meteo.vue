<template> 
<div class='meteo'>
    <div class='titre' > 
        <h2>meteo du {{city.name}}</h2>
    </div>
    <div class='contenue'>
  <v-data-table
    :headers="headers"
    :items="meteo"
    :items-per-page="5"
    class="elevation-1"
  >  
</v-data-table>
  </div>

  
</div>
</template>

<script>
import getdata from './RequetteHttp.js'
export default {
name :'Meteo',
data:function(){

    return {
        forecast:[{}
                ],
        meteo:[] ,
        city:  {} , 
         
   
        headers:[
            { text:'latitude',value:'latitude'},
            { text:'longitude',value:'longitude'},
            { text:'jour',value:'day' },
             { text:'Ensoleillement en heures',value:'sun_hours' }, 
              { text:'datetime',value:'datetime'}, 
              { text:'probalité de pluit',value:'probarain'}, 
                { text:'Température minimale à 2 mètres en °C',value:'tmin'},
                { text:'Température maximale à 2 mètres en °C',value:'tmax'},             
        ]
            }


                          
},

created:function(){
  let self=this
  let url="https://api.meteo-concept.com/api/forecast/daily?token=5c153a68de2fe7f8fb1f43bef7ee954e3c2ad4987125fc4bc695cdfff0e67381&insee=75110"
  
  getdata(url,function(reponse){
   console.log(reponse)
   for ( let i=0;i<reponse.forecast.length;i++){
     
     let don=reponse.forecast[i]
       
        let objet={"latitude":don.latitude,"longitude":don.longitude,"day":don.day,"sun_hours":don.sun_hours, "datetime":don.datetime,"probarain":don.probarain,"tmin":don.tmin,"tmax":don.tmax}
        self.meteo.push(objet)
 
    }  
       self.city=reponse.city
    
    
  console.log("moz3iiiij a3ibadalah skot")
  })
},

props:{
    
},

}


</script>

<style>
.titre{
    padding: 0;
    margin: 30px;
    color: #267dd4;
}


table{
  border-collapse: collapse;
  width: 400px;
}
th, td{
  border: 1px solid black;
  padding: 10px;
  vertical-align: top;
  color: #32a71
}
</style>