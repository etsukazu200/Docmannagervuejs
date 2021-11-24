<template>
<div class='table'>
    <div class='titre' > 
        <h2>Les taches</h2>
    </div>
    <div class='contenue'>
        <template>
  <v-data-table
    :headers="headers"
    :items="taches"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
    </div>
    
    
</div>
</template>

<script>
export default {
name :'Table',
data:function(){

    return {
        donne:'salam i3zan',
        taches:[{"id":1,"tache":"qcm","description":"valide","date":"21-08-2021"},
                          {"id":2,"tache":"qcm","description":"valide","date":"21-08-2021"}
                          ],
        headers:[
            { text:'identifiant',value:'id'},
            { text:'taches',value:'tache'},
            { text:'descriptions',value:'description' },
            { text:'time' ,value:'date'  }                 
        ]
            }

                          
},
props:{
    
},

}


</script>

<style>
table{
  border-collapse: collapse;
  width: 400px;
}
th, td{
  border: 1px solid black;
  padding: 10px;
  vertical-align: top;
}
</style>