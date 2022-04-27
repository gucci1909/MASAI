// function addname(){
//     var friend = document.getElementById("name").value
//     var p = document.createElement("p");
//     p.innerText=friend;
//     document.body.append(p)

// }

// 
// var obj = JSON.stringify({
//     name : "umang"
// })

// localStorage.setItem("myarr" , obj)

// var bag = localStorage.getItem("myarr");

// console.log("myarr" , JSON.parse(bag))


// var count = localStorage.getItem("counter") || 0;
// document.querySelector("h1").innerText=count;

// if(count==nn)

// document.querySelector("#name").addEventListener("click" ,clc);
// document.querySelector("#names").addEventListener("click", cls);

// function clc(){
//     count--;
//     console.log(count)
//     document.querySelector("h1").innerText=count;
//     localStorage.setItem("counter",count)

// }
// function cls(){
//     count++;
//     console.log(count)
//     document.querySelector("h1").innerText=count;
//     localStorage.setItem("counter",count)
// }

document.querySelector("#form").addEventListener("submit", clc);


var inv = JSON.parse(localStorage.getItem("investors")) || [];
// if(JSON.parse(localStorage.getItem("investors")) ==null){
//     inv = [];
// }
// else{
//     inv = JSON.parse(localStorage.getItem("investors"));
// }

function clc(){
    event.preventDefault();
    
    var invr = {
        name : form.IMG.value,
        class : form.IN.value,
        id : form.IR.value,
        photo : form.CL.value


    }
    inv.push(invr)
    console.log(inv);
    localStorage.setItem("investors123", JSON.stringify(inv))
}





