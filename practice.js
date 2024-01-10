// //welcome page
// let sbtn=document.querySelector(".Welcome button");
// sbtn.addEventListener("click",function(){
//     let welcome=document.querySelector(".Welcome");
//     welcome.style.display="none";
//     let main=document.querySelector(".main");
//     main.style.display="grid";
//     let a=document.querySelector(".a");
//     details.classList.remove("z");

// })
// let ab=document.querySelector(".a #b");
// ab.addEventListener("click",function(){
//     let details=querySelector(".details");
    
// })
// let dbtn=document.querySelector(".details button");
// let player1;
// let player2;
// dbtn.addEventListener("click",function(){
//     let details=document.querySelector(".details");
//     details.classList.add("z");
//     let pl1=document.querySelector("#p1");
//     player1=pl1.value;
//     let pl2=document.querySelector("#p2");
//     player2=pl2.value;
//     changename();
// })
// function changename(){
//     let a=document.querySelector(".player1"); //zero
//     a.innerHTML=player1;
//     let b=document.querySelector(".player2"); //cross
//     b.innerHTML=player2;
// }
// let a=document.querySelector(".player1"); //zero
// let b=document.querySelector(".player2"); //zero
// let maindiv=document.querySelector(".main");
// let childdivs=maindiv.querySelectorAll(".main div");
// let p1=0; //zero
// for (const childdiv of childdivs){
//     if (childdiv.children[0]!="img"){
//         childdiv.addEventListener("click",function(func){
            
//             if (p1==0){
//                 let w=zero();
//                 childdiv.appendChild(w);
//                 p1=1;
//                 console.log(p1);
//                 a.style.color="yellow";
//                 b.style.color="white";
//             }
//             else{
//                 let w=cross();
//                 childdiv.appendChild(w);
//                 a.style.color="white";
//                 b.style.color="yellow";
//                 p1=0;
                
//             }

            
//             wingame();
//             checkTie();
//         });
//     }
    
// }
// function zero(){
//     let zero=document.createElement("img");
//     zero.src="zero.png";
//     return zero;
// }
// function cross(){
//     let cross=document.createElement("img");
//     cross.src="cross.png";
//     return cross;
// }

// function wingame(){
//     var a1=document.querySelector(".a");
//     var a2=document.querySelector(".b");
//     var a3=document.querySelector(".c");
//     var a4=document.querySelector(".d");
//     var a5=document.querySelector(".e");
//     var a6=document.querySelector(".f");
//     var a7=document.querySelector(".g");
//     var a8=document.querySelector(".h");
//     var a9=document.querySelector(".i");
//     if((a1.children[0] && a2.children[0] && a3.children[0]) && (a1.children[0].src==a2.children[0].src && a1.children[0].src==a3.children[0].src)){
//         a1.style.border="2px solid yellow";
//         a2.style.border="2px solid yellow";
//         a3.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a1.children[0] && a4.children[0] && a7.children[0]) && (a1.children[0].src==a4.children[0].src && a1.children[0].src==a7.children[0].src)){
//         a1.style.border="2px solid yellow";
//         a4.style.border="2px solid yellow";
//         a7.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a1.children[0] && a5.children[0] && a9.children[0]) && (a1.children[0].src==a5.children[0].src && a1.children[0].src==a9.children[0].src)){
//         a1.style.border="2px solid yellow";
//         a5.style.border="2px solid yellow";
//         a9.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a2.children[0] && a5.children[0] && a8.children[0]) && (a2.children[0].src==a5.children[0].src && a2.children[0].src==a8.children[0].src)){
//         a2.style.border="2px solid yellow";
//         a5.style.border="2px solid yellow";
//         a8.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a3.children[0] && a6.children[0] && a9.children[0]) && (a3.children[0].src==a6.children[0].src && a3.children[0].src==a9.children[0].src)){
//         a3.style.border="2px solid yellow";
//         a6.style.border="2px solid yellow";
//         a9.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a3.children[0] && a5.children[0] && a7.children[0]) && (a3.children[0].src==a5.children[0].src && a3.children[0].src==a7.children[0].src)){
//         a3.style.border="2px solid yellow";
//         a5.style.border="2px solid yellow";
//         a7.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a4.children[0] && a5.children[0] && a6.children[0]) && (a4.children[0].src==a5.children[0].src && a4.children[0].src==a6.children[0].src)){
//         a4.style.border="2px solid yellow";
//         a5.style.border="2px solid yellow";
//         a6.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
//     if((a7.children[0] && a8.children[0] && a9.children[0]) && (a7.children[0].src==a8.children[0].src && a7.children[0].src==a9.children[0].src)){
//         a7.style.border="2px solid yellow";
//         a8.style.border="2px solid yellow";
//         a9.style.border="2px solid yellow";
//         if(a.style.color=="yellow"){
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=a.innerText+"   Won..!";

//         }else{
//             let d=document.querySelector(".jj");
//             d.classList.remove("z");
//             d.classList.add("won");
//             let w=d.querySelector("h3");
//             w.innerText=b.innerText+"   Won..!";
//         }
//     }
    
// }

// function checkTie() {
//     let boardFull = true;
//     for (const childdiv of childdivs) {
//         if (!childdiv.children[0]) {
//             boardFull = false;
//             break;
//         }
//     }

//     if (boardFull) {
//         let d = document.querySelector(".jj");
//         d.classList.remove("z");
//         d.classList.add("won");
//         let w = d.querySelectorAll("h3");
//         w[0].innerText = "It's a Tie";
//         w[1].innerText = "OOOPS...!";
//     }
// }


