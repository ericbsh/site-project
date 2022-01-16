function showSofa(a){
    
    let sofa = document.createElement('div')
    sofa.className = "sofa"
    let sofaImage = document.createElement('img')
    sofaImage.id = "sofa"
    sofaImage.src = a.target.src;

    sofa.appendChild(sofaImage)
    container.appendChild(sofa)


    // document.getElementById("sofa").src = a.target.src;
}

function init(){
    let items = document.querySelectorAll(".item img");
    for(let i=0; i<items.length; i++){
        items[i].onclick = showSofa;
    }
    let item1s = document.querySelectorAll(".item1 img");
    for(let g=0; g<item1s.length; g++){
        item1s[g].onclick = showBeds;
    }
    let item2s = document.querySelectorAll(".item2 img");
    for(let h=0; h<item2s.length; h++){
        item2s[h].onclick = showTables;
    }
    let item3s = document.querySelectorAll(".item3 img");
    for(let i=0; i<item3s.length; i++){
        item3s[i].onclick = showCartains;
    }
}

// window.addEventListener("load", init, false);



function showBeds(b){
    document.getElementById("bed").src = b.target.src;
}

// function init(){
//     let item1s = document.querySelectorAll(".item1 img");
//     for(let g=0; g<item1s.length; g++){
//         item1s[g].onclick = showBeds;
//     }
// }

// window.addEventListener("load", init, false);



function showTables(c){
    document.getElementById("table").src = c.target.src;
}

// function init(){
//     let item2s = document.querySelectorAll(".item2 img");
//     for(let h=0; h<item2s.length; h++){
//         item2s[h].onclick = showTables;
//     }
// }

// window.addEventListener("load", init, false);



function showCartains(d){
    document.getElementById("cartain").src = d.target.src;
}

// function init(){
//     let item3s = document.querySelectorAll(".item3 img");
//     for(let i=0; i<item3s.length; i++){
//         item3s[i].onclick = showCartains;
//     }
// }

window.addEventListener("load", init, false);