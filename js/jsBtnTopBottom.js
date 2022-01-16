let curIndex = 0
$("input.btnDown").on("click", function(e) {
     curIndex = $('pic_box li').index()

        console.log(curIndex)
        var control = $(".pic_medium ul").css("top");
        $(".pic_medium").animate({
            top: "+=155px"
        }, 700);
        // e.preventDefault();
        if(curIndex == 0){
            e.target.disabled = true;
        }
        e.target.disabled = false;//啟用
    });


    $("input.btnUp").on("click", function(e) {
        $(".pic_medium").animate({
            top: "-=155px"
        }, 700);
        // e.preventDefault();
        if(curIndex == 4){
            console.log(e.target)
            e.target.disabled = true;
        }
        e.target.disabled = false;
    });






// function $id(id){ // $id(btnLeft)
//     return document.getElementById(id);       // document.getElementById('btnRight')
// }
// window.addEventListener("load", function(){

//     // let items ;
//     let pic_medium = document.querySelector(".pic_medium");
//     // let itemsLength ;
//     let curIndex =0;
//     //-----------------------------------------btnUp.onclick
//     $id("btnUp").onclick = function(){
//         curIndex--;
//         pic_medium.style.up = -275 * curIndex + "px";
//         if(curIndex ==0){
//             $id("btnUp").disabled = true;
//         }
//         $id("btnDown").disabled = false;//啟用
//     }
//     //-----------------------------------------btnDown.onclick
//     $id("btnDown").onclick = function(){
//         curIndex++;
//         let up = -275 * curIndex;
//         pic_medium.style.up = up + "px";
//         if(curIndex == 4){
//             $id("btnDown").disabled = true;
//         }
//         $id("btnUp").disabled = false;
//     }
// })