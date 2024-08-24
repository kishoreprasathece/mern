function firstname(){
    console.log("kishore")
    return function secondname(){
    console.log("prasath")
    
    }
    
}
//firstname()
let res=firstname()
res()