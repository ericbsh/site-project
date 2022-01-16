// var speed=50
// pic2.innerHTML=pic1.innerHTML
// // pic.scrollLeft=pic.scrollWidth
//     function Marquee(){
//         if(pic.scrollLeft>=pic2.offsetWidth)
//             pic.scrollLeft=0
//         else{
//             pic.scrollLeft++
//         }
//     }
// var MyMar=setInterval(Marquee,speed)
// pic.onmouseover=function() {clearInterval(MyMar)}
// pic.onmouseout=function() {MyMar=setInterval(Marquee,speed)}







// var speed=50
// pic2.innerHTML=pic1.innerHTML
// function Marquee(){
//     if(pic.scrollLeft>=document.documentElement.offsetWidth){
//         pic.scrollLeft=0
//     }
//     else{
//         pic.scrollLeft++
//         }
// }
// var MyMar=setInterval(Marquee,speed)
// pic.onmouseover=function() {clearInterval(MyMar)}
// pic.onmouseout=function() {MyMar=setInterval(Marquee,speed)}




var speed=50
pic2.innerHTML=pic1.innerHTML
pic.scrollLeft=pic.scrollWidth
    function Marquee(){
        if(pic.scrollLeft<=0)
        pic.scrollLeft+=pic2.offsetWidth
        else{
        pic.scrollLeft--
        }
    }
var MyMar=setInterval(Marquee,speed)
pic.onmouseover=function() {clearInterval(MyMar)}
pic.onmouseout=function() {MyMar=setInterval(Marquee,speed)}