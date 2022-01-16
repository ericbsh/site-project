function $id(id){ // $id(btnLeft)
    return document.getElementById(id);       // document.getElementById('btnRight')
}
window.addEventListener("load", function(){

    // let items ;
    let row = document.querySelector(".row");
    // let itemsLength ;
    let curIndex =0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        curIndex--;
        row.style.left = -275 * curIndex + "px";
        if(curIndex ==0){
            $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false;//啟用
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function(){
        curIndex++;
        let left = -275 * curIndex;
        row.style.left = left + "px";
        if(curIndex == 4){
            $id("btnRight").disabled = true;
        }
        $id("btnLeft").disabled = false;
    }
    //-----------------------------------------showLightBox

    //-----------------------------------------close lightBox
})


function $id(id){ // $id(btnLeft)
    return document.getElementById(id);       // document.getElementById('btnRight')
}
window.addEventListener("load", function(){

    // let items ;
    let row = document.querySelector(".row-1");
    // let itemsLength ;
    let curIndex =0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft-1").onclick = function(){
        curIndex--;
        row.style.left = -275 * curIndex + "px";
        if(curIndex ==0){
            $id("btnLeft-1").disabled = true;
        }
        $id("btnRight-1").disabled = false;//啟用
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight-1").onclick = function(){
        curIndex++;
        let left = -275 * curIndex;
        row.style.left = left + "px";
        if(curIndex == 4){
            $id("btnRight-1").disabled = true;
        }
        $id("btnLeft-1").disabled = false;
    }
})


function $id(id){ // $id(btnLeft)
    return document.getElementById(id);       // document.getElementById('btnRight')
}
window.addEventListener("load", function(){

    // let items ;
    let row = document.querySelector(".row-2");
    // let itemsLength ;
    let curIndex =0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft-2").onclick = function(){
        curIndex--;
        row.style.left = -275 * curIndex + "px";
        if(curIndex ==0){
            $id("btnLeft-2").disabled = true;
        }
        $id("btnRight-2").disabled = false;//啟用
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight-2").onclick = function(){
        curIndex++;
        let left = -275 * curIndex;
        row.style.left = left + "px";
        if(curIndex == 4){
            $id("btnRight-2").disabled = true;
        }
        $id("btnLeft-2").disabled = false;
    }
})


function $id(id){ // $id(btnLeft)
    return document.getElementById(id);       // document.getElementById('btnRight')
}
window.addEventListener("load", function(){

    // let items ;
    let row = document.querySelector(".row-3");
    // let itemsLength ;
    let curIndex =0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft-3").onclick = function(){
        curIndex--;
        row.style.left = -275 * curIndex + "px";
        if(curIndex ==0){
            $id("btnLeft-3").disabled = true;
        }
        $id("btnRight-3").disabled = false;//啟用
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight-3").onclick = function(){
        curIndex++;
        let left = -275 * curIndex;
        row.style.left = left + "px";
        if(curIndex == 4){
            $id("btnRight-3").disabled = true;
        }
        $id("btnLeft-3").disabled = false;
    }
})


function $id(id){ // $id(btnLeft)
    return document.getElementById(id);       // document.getElementById('btnRight')
}
window.addEventListener("load", function(){

    // let items ;
    let row = document.querySelector(".row-4");
    // let itemsLength ;
    let curIndex =0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft-4").onclick = function(){
        curIndex--;
        row.style.left = -275 * curIndex + "px";
        if(curIndex ==0){
            $id("btnLeft-4").disabled = true;
        }
        $id("btnRight-4").disabled = false;//啟用
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight-4").onclick = function(){
        curIndex++;
        let left = -275 * curIndex;
        row.style.left = left + "px";
        if(curIndex == 4){
            $id("btnRight-4").disabled = true;
        }
        $id("btnLeft-4").disabled = false;
    }
})
