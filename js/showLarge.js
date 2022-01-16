function showLarge(e){ //點小圖秀大圖function
	// let small = e.target;
	// document.getElementById("large").src = small.src; // 抓取大圖，source來源輸出
	document.getElementById("large").src = e.target.src;
}

function init(){

	// let smallsFirst = document.querySelector(".small img"); //css選擇器中的第一個
	let smalls = document.querySelectorAll(".pic_medium img"); //符合整個css選擇器寫法
	for(let i=0; i<smalls.length; i++){
		smalls[i].onclick = showLarge; //點擊使用 點小圖秀大圖function
	}
}

window.addEventListener("load", init, false);