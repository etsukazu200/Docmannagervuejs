import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import Listes from './components/Listes.vue'
import Projet from './components/Projet.vue'
import Meteo from './components/Meteo.vue'
Vue.use(VueRouter)
let route=new VueRouter({
       routes:[
           { path:"/table",component:Table},
           { path:"/liste",component:Listes},
           { path:"/projet",component:Projet},
           { path:"/meteo",component:Meteo},
       ]


})
export default route





