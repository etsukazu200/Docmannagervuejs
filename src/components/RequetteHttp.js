import axios from 'axios'

export default function(url,callback){
    let requet=axios({
        method: "get",
        url: url,
      
        
    })
    requet.then((response)=> {
        callback(response.data)
    })

}