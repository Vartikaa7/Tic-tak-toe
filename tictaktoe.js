let welbtn=document.querySelector(".Welcome button");
welbtn.addEventListener("click",function(){
    let welcome=document.querySelector(".Welcome");
    welcome.classList.add("z");
    let main=document.querySelector(".main");
    main.style.display="grid";
    let page1=document.querySelector(".page1");
    page1.classList.remove("z");

})
let pagea=document.querySelector(".page1 #a");
pagea.addEventListener("click",function(){
    let page1=document.querySelector(".page1");
    page1.classList.add("z");
    let cdetails=document.querySelector(".cdetails");
    cdetails.classList.remove("z");
})
let pageb=document.querySelector(".page1 #b");
pageb.addEventListener("click",function(){
    let page1=document.querySelector(".page1");
    page1.classList.add("z");
    let pdetails=document.querySelector(".pdetails");
    pdetails.classList.remove("z");
})
let p1;
let player1;
let player2;
let pdetailbtn=document.querySelector(".pdetails button");
pdetailbtn.addEventListener("click",function(){
    let pdetails=document.querySelector(".pdetails");
    pdetails.classList.add("z");
    let pl1=document.querySelector("#p1");
    player1=pl1.value;
    let pl2=document.querySelector("#p2");
    player2=pl2.value;
    changename();
    humanplay();
});
function changename(){
    let a=document.querySelector(".player1"); //zero
    a.innerHTML=player1;
    let b=document.querySelector(".player2"); //cross
    b.innerHTML=player2;

}
let cdetails=document.querySelector(".cdetails button");
cdetails.addEventListener("click",function(){
    let cdetails=document.querySelector(".cdetails");
    cdetails.classList.add("z");
    let pl1=document.querySelector("#pc1");
    player1=pl1.value;
    player2="Computer";
    changename();
    let mode=document.querySelector(".mode");
    mode.classList.remove("z");

})
let modeeasy=document.querySelector(".mode #easy");
modeeasy.addEventListener("click",function(){
    let mode=document.querySelector(".mode");
    mode.classList.add("z");
    compeplay();

})
let modemedium=document.querySelector(".mode #medium");
modemedium.addEventListener("click",function(){
    let mode=document.querySelector(".mode");
    mode.classList.add("z");
    compmplay();

})
let a=document.querySelector(".player1"); //zero
let b=document.querySelector(".player2"); //cross
function humanplay(){

    let chance=0; //zero
    let maindiv=document.querySelector(".main");
    let childdivs=maindiv.querySelectorAll(".main div");
    for (const childdiv of childdivs){
        if (childdiv.children[0]!="img"){
            childdiv.addEventListener("click",function(func){
                
                if (chance==0){
                    let w=zero();
                    childdiv.appendChild(w);
                    chance=1;
                    a.style.color="yellow";
                    b.style.color="white";
                }
                else{
                    let w=cross();
                    childdiv.appendChild(w);
                    a.style.color="white";
                    b.style.color="yellow";
                    chance=0;
                    
                }
    
                
                wingame();
                checkTie();
            });
        }
        
    }
}

function compeplay(){
    let arr=["a","b","c","d","e","f","g","h","i"];
    
    let childdivs=document.querySelectorAll(".main div");
    for (const childdiv of childdivs){
        if (childdiv.children[0]!="img"){
            childdiv.addEventListener("click",function(func){
                let w=zero();
                childdiv.appendChild(w);
                let c=childdiv.classList[0];
                arr = arr.filter(item => item !== c);
                let randomIndex = Math.floor(Math.random() * arr.length);
                let el = arr[randomIndex];
                let element=document.querySelector("."+el);
                let x=cross();
                element.appendChild(x);
                arr = arr.filter(item => item !== el);
                a.style.color="yellow";
                b.style.color="white";

        wingame();
        checkTie();
            });
    }
        
    }

}
function compmplay(){
    let arr1=["a","c","g","i"];
    let arr2=["b","d","f","h"];
    let chance=0;
    let childdivs=document.querySelectorAll(".main div");
    for (const childdiv of childdivs){
        if (childdiv.children[0]!="img"){
            childdiv.addEventListener("click",function(func){
                let w=zero();
                childdiv.appendChild(w);
                let c=childdiv.classList[0];
                if (arr1.includes(c)){
                    arr1 = arr1.filter(item => item !== c);
                }
                else if(arr2.includes(c)){
                    arr2= arr2.filter(item => item !== c);

                }
                if (chance==0){
                    let randomIndex = Math.floor(Math.random() * arr1.length);
                    let el = arr1[randomIndex];
                    let element=document.querySelector("."+el);
                    let x=cross();
                    element.appendChild(x);
                    arr1 = arr1.filter(item => item !== el);
                    chance=1;
                }
                else if(chance==1){
                    let randomIndex = Math.floor(Math.random() * arr2.length);
                    let el = arr2[randomIndex];
                    let element=document.querySelector("."+el);
                    let x=cross();
                    element.appendChild(x);
                    arr2 = arr2.filter(item => item !== el);
                    chance=0;
                }
                
                a.style.color="yellow";
                b.style.color="white";

        wingame();
        checkTie();
            });
    }
        
    }
}


function zero(){
    let zero=document.createElement("img");
    zero.src="zero.png";
    return zero;
}
function cross(){
    let cross=document.createElement("img");
    cross.src="cross.png";
    return cross;
}
function changes(x,y,z){
    x.style.border="2px solid yellow";
    y.style.border="2px solid yellow";
    z.style.border="2px solid yellow";
    if (x.children[0].src==zero().src){
        let d=document.querySelector(".won");
            d.classList.remove("z");
            d.classList.add("box");
            let w=d.querySelector("h3");
            w.innerText=a.innerText+"   Won..!";
    }
    else{
        let d=document.querySelector(".won");
        d.classList.remove("z");
        d.classList.add("box");
        let w=d.querySelector("h3");
        w.innerText=b.innerText+"   Won..!"; 
    }
}

function wingame(){
    var a1=document.querySelector(".a");
    var a2=document.querySelector(".b");
    var a3=document.querySelector(".c");
    var a4=document.querySelector(".d");
    var a5=document.querySelector(".e");
    var a6=document.querySelector(".f");
    var a7=document.querySelector(".g");
    var a8=document.querySelector(".h");
    var a9=document.querySelector(".i");
    if((a1.children[0] && a2.children[0] && a3.children[0]) && (a1.children[0].src==a2.children[0].src && a1.children[0].src==a3.children[0].src)){
        changes(a1,a2,a3);
        
    }
    if((a1.children[0] && a4.children[0] && a7.children[0]) && (a1.children[0].src==a4.children[0].src && a1.children[0].src==a7.children[0].src)){
        changes(a1,a4,a7);
    }
    if((a1.children[0] && a5.children[0] && a9.children[0]) && (a1.children[0].src==a5.children[0].src && a1.children[0].src==a9.children[0].src)){
        changes(a1,a4,a7);
    }
    if((a2.children[0] && a5.children[0] && a8.children[0]) && (a2.children[0].src==a5.children[0].src && a2.children[0].src==a8.children[0].src)){
        changes(a2,a5,a8);
    }
    if((a3.children[0] && a6.children[0] && a9.children[0]) && (a3.children[0].src==a6.children[0].src && a3.children[0].src==a9.children[0].src)){
        changes(a3,a6,a9);
    }
    if((a3.children[0] && a5.children[0] && a7.children[0]) && (a3.children[0].src==a5.children[0].src && a3.children[0].src==a7.children[0].src)){
        changes(a3,a5,a7);
    }
    if((a4.children[0] && a5.children[0] && a6.children[0]) && (a4.children[0].src==a5.children[0].src && a4.children[0].src==a6.children[0].src)){
        changes(a4,a5,a6);
    }
    if((a7.children[0] && a8.children[0] && a9.children[0]) && (a7.children[0].src==a8.children[0].src && a7.children[0].src==a9.children[0].src)){
        changes(a7,a8,a9);
    }
    
}

function checkTie() {
    let childdivs=document.querySelectorAll(".main div");
    let boardFull = true;
    for (const childdiv of childdivs) {
        if (!childdiv.children[0]) {
            boardFull = false;
            break;
        }
    }

    if (boardFull) {
        let d = document.querySelector(".won");
        d.classList.remove("z");
        d.classList.add("box");
        let w = d.querySelectorAll("h3");
        w[0].innerText = "It's a Tie";
        w[1].innerText = "OOOPS...!";
    }
}
