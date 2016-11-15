document.getElementById("remove-div").addEventListener("click", function(){
	var container = document.getElementById("container");
	var children = container.children;
	console.log(children);
	// container.removeChild(children[2]);
	var f = container.firstChild;
	var l = container.lastChild;
	container.removeChild(l);
	container.removeChild(f);
});

document.getElementById("add-div").addEventListener("click", function(){
	var c = document.getElementById("container");
	var e = document.createElement("div");
	e.setAttribute("class", "child");
	e.innerHTML = c.children.length + 1;
	c.appendChild(e);
});

var timerId = undefined;
document.getElementById("stop").addEventListener("click", function(){
	clearInterval(timerId);
	timerId = undefined;
});
document.getElementById("start").addEventListener("click", function(){
	if (timerId == undefined) {
		var value = 0;
		timerId = setInterval(function(){
			var timer = document.getElementById("timer-display");
			value++;
			timer.innerHTML = value;
		}, 1000);
	}
});

document.getElementById("delay").addEventListener("click", function(){
	setTimeout(function(){
		alert("３秒後にこんにちは");
	}, 3000);
});

document.getElementById("image1").addEventListener("click", function(){
	if (this.src.endsWith("bump1.jpeg")) {
		this.src = "bump2.jpeg";
		this.alt = "BUMP2";
	} else {
		this.src = "bump1.jpeg";
		this.alt = "BUMP1";
	}
})
var i = 0;
document.getElementById("image")
	.addEventListener("click", function(){
		var images = 
			[
				["bump1.jpeg", "BUMP1"],
				["bump2.jpeg", "BUMP2"],
				["bump3.jpeg", "BUMP3"],
				["bump4.jpeg", "BUMP4"]
				];

				i++;
				if (i >= images.length) {
					i = 0;
				}

				this.src = images[i][0];
				this.alt = images[i][1];
	});




// document.getElementById("div2").addEventListener("mouseover", function(){
// 	var div = document.getElementById("div2");
// 	div.style.backgroundColor = "#000000";
// });
// document.getElementById("div2").addEventListener("mouseout", function(){
	// this.style.backgroundColor = "";
// });
document.getElementById("div2").addEventListener("click", function(){
	if (this.style.backgroundColor == "") {
		this.style.backgroundColor = "blue";
		this.style.borderRadius = "50px";
		this.style.fontSize = "30px";
	} else {
		this.style.backgroundColor = null;
		this.style.borderRadius = null;
		this.style.fontSize = null;
	}
});

document.getElementById("div1")
	.addEventListener("mouseover", function(){
		// var div = document.getElementById("div1");
		this.style.backgroundColor = "#ff2222";
	});
document.getElementById("open-self")
	.addEventListener("click", function(){
		location.href = "http://www.yahoo.co.jp";
	});
document.getElementById("open-new")
	.addEventListener("click", function(){
		window.open("http://apple.com/ph");
	});
document.getElementById("btn4")
	.addEventListener("click", function(){
		var from = document.getElementById("from").value;
		var to = document.getElementById("to").value;
		var num = +from;
		var total = 0;
		while(num <= +to) {
			total = total + num;
			num++;
		}
		alert(total);
	});

document.getElementById("btn3")
	.addEventListener("click", function(){
		var gender = new Array();
		gender[0] = "男";
		gender[1] = "女";
		gender[2] = "不明";
		console.log(gender);
		// alert(gender[0] + gender[1]+ gender[2]);
		var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		console.log(month);
		var index = document.getElementById("text2").value;
		// alert(month[index]);
		for(var i=0; i<month.length; i++) {
			if (i == 4) {
				continue;
				console.log(month[i]);
			}
		}
	});

document.getElementById("btn2").addEventListener("click", function(){
		var value = document.getElementById("text1").value;
		switch(value) {
			case "0":
				alert("0です");
				break;
			case "1":
				alert("1です");
				break;
			case "あ":
				alert("あです");
				break;
			default:
				alert("０でも１でもあでもないです");
				break;
		}
	});
document.getElementById("btn1").addEventListener('click', function(){
	var v = document.getElementById("text1").value;
	if (v == "1") {
		  alert("1です");
		} else if (v == "2") {
			alert("2です");
		} else if (v == "あ"){
			alert("あです");
		}	else {
			alert("１でも2でもあでもないです");
		}
});
document.getElementById("alert").addEventListener('click',function(){
	alert("Hello javascript!");
});
document.getElementById("confirm").addEventListener('click',function(){
	var result = confirm("明日もまた見てくれるかな？");
	if (result == true) {
		alert("いいとも");
	} else {
		alert("駄目とも");
	}
});
document.getElementById("prompt").addEventListener('click',function(){
	var result = prompt("あなたのお名前を教えてください","unchi");
	// alert("ようこそ" + result + "さん");
	var honnin = confirm("ようこそ" + result + "さん");
	if (honnin == true){
		alert("さあ出かけよう！");
	} else {
		alert("再審査が必要です");
	}
});



var p1 = document.getElementById("par1");
	console.log(p1.innerHTML);
	p1.innerHTML = "スーパードライ";
	var clz = document.getElementsByClassName("p");
	console.log(clz[1].innerHTML);
	var tags = document.getElementsByTagName("p");
	console.log(tags[2].innerHTML);

	function changeString(message, mag2) {
		var p1 = document.getElementById("par1");
		p1.innerHTML=message;
		var p2 = document.getElementById("par2");
		p2.innerHTML=mag2;
	}
	function changeString(mag3) {
		var p3 = document.getElementById("par3");
		p3.innerHTML=mag3;
	}
	var b = document.getElementById("btn");
	b.addEventListener('mouseover', function(){
		var p1 = document.getElementById("par1");
		p1.innerHTML = "ラガービール";
	});
	b.addEventListener('mouseout', function(){
		var p1 = document.getElementById("par1");
		p1.innerHTML = "プレミアムモルツ";
	});