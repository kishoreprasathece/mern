//1
//alert("invalid email")

//2

//let name= prompt("enter the name");
//console.log(name);

//3

//let a=Number(prompt("enter the value"));
//console.log(a*a);

//4
//let a=999,b=78;
//console.log(a+b);
//console.log(a-b);
//console.log(a*b);
//console.log(a/b);
// console.log(a**b);
// console.log(a);

//5 
// let a=true , b=false;
// console.log(a && b);

// let c=true , d=true;
// console.log(c && d);

// console.log(!c);
// console.log(!d);
// console.log(c || d);

// let firstname="kishore"
// let secondname="prasath"

// console.log(firstname=="kishore" && secondname=="prasath");
// console.log(firstname=="mohan" && secondname=="prasath");
// console.log(!firstname=="prasath");
// console.log(firstname=='kishore' || secondname=="kishore");
// console.log(firstname=="kishore");
// console.log(firstname=="prasath");

//6 
// let obj={name:"kis",age:29}
// console.log(obj);
// console.log(obj.name);

// let arr=["kishore","prasath"]
// console.log(arr[1]);

// let age=[9,8,9,7]
// console.log(age);

// let obj={name:"kishore",password:55}
// console.log(obj);

//let age=['q','w','e','t','y']
//console.log(age[4]);


//7

// let a=999,b=898;
// function add() {
// console.log(a*b);

// }
// add()

// const entername= "kishore" ;
// function name(){
//     console.log(entername);
    
// }
// name()



// const name= arrfunc=()=>{
//     console.log("kishore");
    
// }
// arrfunc()

// let a= name=()=>{
//     console.log("prasath");
    
// }
// name()



// const user = arrfunc=()=>{
//     console.log("kishore");
//     console.log("prasath");
    
    
//     }
//     arrfunc()

// function name(){
//     console.log("prasath");
    
// }
// name()

// const name=()=>{
//     console.log("tom ellis");
    
// }



// const res= function(a,b){
//     console.log(a,b);
//     }
// res("laptop","mobile")

// (function(){
//     console.log("tomellis");
    
// })();

// (function(){
//     let a="kishore"
//     console.log(a);
    
// })();


// (
//     function(){
//         let a=99999,b=222;
//         console.log(a*b);
        
//     }
// )

//9

// function setalaram(){
//     return 10;
// }
// let time = setalaram()
// console.log(time);

// function login(){
//     return 'kishore';
// }
//     let nam= login()
//     console.log(nam);
    




// function naveen(totalmark){
// return 988;
// }
// let naveenresult = naveen();
// console.log(naveenresult);


// function fathername(){
//     console.log("raja ravi varman");
//     return function sonname(){
//         console.log("vishnu");
//     };
    
    
// }
// //fathername();
// const sonname= fathername();
// sonname();


// function setalaram(){
//     console.log(10);
//     function snooze(){
// console.log(11);

//     }
    
// }
// //setalaram();
// let snooze= setalaram();
// snooze();

// function gender(a){
//     return "kishore";
// }
// const name= gender();
//  console.log(name);
 
// function model(iphone){
//     return "iphone11";
// }
// const avail= model();
// console.log(avail);

// 15 higher order function



// function model(){
//     console.log("iphone");
//     return function num(){
//         console.log(15);
        
//     }
// }
// //model():
// let modelnum= model();
// modelnum();


//16- call back

// function dis(){
//     console.log("available model");
    
// }

// function model(callback){
//     console.log("iphone");
// callback();
//     return function num(){
//         console.log(15);
        
//     }
// }
// //model():
// let modelnum= model(dis);
// modelnum();


// //17- ternary

// let price= 1000;
// const res = price > 1000 ? "greater than 1000 " : "less than 1000"; 
// console.log(res);

// let availableproduct = "macbook";
// const res = availableproduct == "hp" ? "yes" : "no";
// console.log(res);

// let password= 006;
// const res= password== 006 ? "yes" : "no";
// console.log(res);


//
//18=switch
// let order =0;
// let msg;

// switch(order){
//     case 1:
//     msg= "ordered mac";
//     break;
// case 2:
// msg= "ordered iphone"
// break;
// default:
//     msg= "invalid entry"
// break;
// }
// console.log(msg);

// 

// let result ="tm";
// let msg;
// switch(result){
// case "tom":
// msg= "788"
// break;
// case "Elis":
// msg= "993"
// break;
// default:
// msg= "enter valid info"
// break;
// }
// console.log(msg);

// let login = "tom"
// let msg;
// switch(login){
//     case "tom":
//     msg = "login ok";
//     break;
//     case "ellis":
//     msg = "login ok";
//     break;
//     case "rick":
//     msg = "login ok";
//     break;
//     default:
//         msg ="invalid";
// }

// console.log(msg);


// let loginid = "walter"
// let password = 77
// let msg; 
// switch(loginid,password){
//     case "tom",10:
//         msg ="login successful";
//         break;
//         case "rick",11:
//         msg ="login successful";
//         break;
//         case "lucy",99:
//         msg ="login successful";
//         break;
//         default:
//             msg="invalid";
//             break;
//         }
//         console.log(msg);
        


// let loginid="kishore";
// const res = loginid=="kishore" ? "success": "invalid";
// console.log(res);

// let searchabove=1000;
// const res= searchabove==1000 ? "showabove1000" : "notfound";
// console.log(res);

// for(i=9; i<15; i++){
// console.log("i",i);

// }

// for(let i=10; i<12; i++){
//     console.log("i",i);
    
// }

//top and bottom function
// function top(){
// console.log("top fun");

// }
// function bottom(){
//     console.log("bot fun")
// }

// bottom();
// top();


//array

// let arr=[0,1,2,3,4,5,6,7];
// console.log(arr);

// arr.push(999);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(777);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let arr=[0,1,2,3,4,5,6];
// arr.splice(1,4,99);
// console.log;(arr);

// let arr=[123,24,125,126,127];
// arr.splice(0,4,99);
//  console.log(arr);
//  const newarr=arr.splice(0,)
// console.log(newarr);



// function dis(){
// console.log("avaliable model");

// }

// function model(callback){
//     console.log("apple");
//      Callback();
    
//     return function nam(){
// console.log(15);

//     }
    
// }
// //model()
// let modelnam = model(dis());
// modelnam();


// let looping=[0,10,101,33]
// looping.forEach((item,index)=>{
//     console.log(item);
    
// })

// let looping=[["tom",20],["rick",22],["reese",29]]
// looping.forEach(([NAME,AGE])=>{
// console.log(NAME);
// console.log(AGE);
// console.log(`${NAME}=${AGE}`);


// });

// let looping=["tshirt","jogger"]
// looping.forEach((product,list)=>{
// console.log(product);

// });

// let looping=[["tshirt",99],["jogger",79]]
// looping.forEach((proname,price)=>{
// console.log(`${proname}=${price}`);


// })


// let iphone=[11,12,13,14,15]
// iphone.forEach((iphone)=>{
   
// console.log(iphone);

// });

// let number=[99,44,44,55,66,88];
// let addnumber=number.map((a)=>{
//     return a+a;

// })
// console.log(addnumber);
// console.log(`${number}=${addnumber}`);

// const name=["tommy","abarama","littlefinger"];
// const age=name.map((name)=>{
// if(name=="tommy")
//     return 45;
// if(name=="abarama")
//     return 47;
// if(name=="littlefinger")
//     return 66;
// else
// return notvalid;
// });
// console.log(age);


// let price=[10000,13000,699999,800,12000,14000];
// const filPRICE= price.filter(i=>i<1000)
//     console.log(filPRICE);
    


// const product=[{
//     model:"apple",
//     series:15,
//     price:89000,
// },
// {
//     model:"apple",
//     series:11,
//     price:99000,
// },
// {
//     model:"apple",
//     series:14,
//     price:110000,
// },
// {
//     model:"samsung",
//     series:13,
//     price:9000,
// },
// {
//     model:"samsung",
//     series:12,
//     price:8000,
// },
// {
//     model:"saamsung",
//     series:11,
// //     price:89000,
// // },
// // { 
// //     model:"samsung",
// //     series:"9pro",
// //     price:8900,
// // }]
 
// // product.forEach((item)=>{
// // console.log(product);

// // })
// // let price= product.map((item)=>{
// // if(i>19000);
// // return item;
// // else
// // null;
// // })
// console.log(price);
