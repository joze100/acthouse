jQuery(function($){
	$("#traverse2 button").on("click", function(){
		$(".blue_border").removeClass("blue_border");
	});
	$("#prev").on("click", function(){
		$("#traverse2 .saburo").prev().addClass("blue_border");
	});
	$("#prevAll").on("click", function(){
		$("#traverse2 .saburo").prevAll().addClass("blue_border");
	});
	$("#next").on("click", function(){
		$("#traverse2 .saburo").next().addClass("blue_border");
	});
	$("#nextAll").on("click", function(){
		$("#traverse2 .saburo").nextAll().addClass("blue_border");
	});
	$("#parent").on("click", function(){
		$("#traverse2 .saburo").parent().addClass("blue_border");
	});
	$("#parents").on("click", function(){
		$("#traverse2 .saburo").parents().addClass("blue_border");
	});
	$("#children").on("click", function(){
		$("#traverse2 .saburo").children().addClass("blue_border");
	});
	$("#siblings").on("click", function(){
		$("#traverse2 .saburo").siblings().addClass("blue_border");
	});
	$("#closest").on("click", function(){
		$("#traverse2 .saburo").closest("div").addClass("blue_border");
	});
	$("#find").on("click", function(){
		$("#traverse2 .saburo").find("ul > li > ul > li:first").addClass("blue_border");
	});
	$("#mago").on("click", function(){
		// $("#traverse2 .mago").parent().parent().next().addClass("blue_border");
		$("#traverse2 .mago").parent().parent().siblings().addClass("blue_border");
		// $("#traverse2 .mago").parent().parent().find().addClass("blue_border");
	});
	$("#first").on("click", function(){
		$("#traverse1 li").css("font-weight", "bold").first().css("color", "red");
	});
	$("#last").on("click", function(){
		$("#traverse1 li").css("font-weight", "normal").last().css("color", "blue");
	});
	$("#eq").on("click", function(){
		$("#traverse1 li").css("font-style", "italic").eq(3).css("color", "green");
	});
	$("#empty-elem").on("click", function(){
		$("#remove li:first-child").empty();
	});
	$("#clone-elem").on("click", function(){
		$("#remove li:nth-child(2)").clone().appendTo("#remove ul");
	});
	$("#remove > #remove-elem").on("click", function(){
		$("#remove .first").remove();
	});
	$("#remove > #restore-elem").on("click", function(){
		$("#remove > ul").prepend("<li>太郎</li>");
	});
	$("#append > #append-elem").on("click", function(){
		$("#append > ul").append("<li>花子</li>");
		// $("<li>花子</li>").appendTo("#append > ul")
	});
	$("#append > #prepend-elem").on("click", function(){
		// $("#append > ul").prepend("<li>太郎</li>");
		$("<li>太郎</li>").prependTo("#append > ul");
	});
	$("#append > #before-elem").on("click", function(){
		// $("#append > ul").before("<p>子供の名前</p>");
		$("<p>子供の名前</p>").insertBefore("#append > ul");
	});
	$("#append > #after-elem").on("click", function(){
		// $("#append > ul").after("<p>生年月日</p>");
		$("<p>生年月日</p>").insertAfter("#append > ul");
	});
	$("#form2 > .get-check").on("click", function(){
		// var arr = $("#form2 > input:checkbox:checked");
		// var checked = [];
		// for(var i=0; i<arr.length; i++) {
			// checked[i] = $(arr[i]).val();
		// }
		var checked = 
			$("#form2 > input:checkbox:checked").map(function(){
				return $(this).val();
			}).toArray();
		alert(checked);
	});
	$("#form2 > .set-radio").on("click", function(){
		$("#form2 > input[name=radio3]").val(["ラジオ３"]);
	});
	$("#form2 > .get-radio").on("click", function(){
		var ret = $("#form2 > input[name=radio3]:checked").val();
		alert(ret);
	});
	$("#form2 > .get-text").on("click", function(){
		alert($("#form2 > #text3").val());
	});
	$("#form2 > .set-text").on("click", function(){
		$("#form2 > #text3").val("スミロン島");
	});
	$("#show-content").on("click", function(){
		var html = $("#content li").html();
		var text = $("#content li").text();
		alert(html + "\n" + text);
	});
	$("#set-content").on("click", function(){
		$("#taro3").html("<span style='color:red;'>のび太</span>");
		$("#jiro3").text("<span style='color:blue;'>スネ夫</span>");
	});
	$("#offset").on("click", function(){
		$("#position > .box").offset({top: 60, left: 50});

	});
	$("#scroll-top").on("click", function(){
		// $(window).scrollTop(0);
		$("body").animate({scrollTop: 0}, "slow");
	});
	$("#width").on("click", function(){
		$(".box").width(200);
		// $(".box").animate({width: 200}, 1000);
		var width = $(".box").width();
		var innerWidth = $(".box").innerWidth();
		var outerWidth = $(".box").outerWidth(true);
		console.log("width =" + width,"innerWidth = " + innerWidth,"outerWidth = " + outerWidth);
	});
	$("#height").on("click", function(){
		$(".box").height(200);
	});
	$("#add-class").on("click", function(){
		$("#hanako2").addClass("woman");
	});
	$("#remove-class").on("click", function(){
		$("#hanako2").removeClass("woman");
	});
	$("#toggle-class").on("click", function(){
		$("#hanako2").toggleClass("woman");
		var ret = $("#hanako2").hasClass("woman");
		var msg;
		if (ret) {
			msg = "花子は女です";
		} else {
			msg = "花子は女ではありません";
		}
		alert(msg);
	});
	$("#remove-attr").on("click", function(){
		$("#attr2 > a").removeAttr("title");
	});
	$("#get-attr").on("click", function(){
		alert($("#yahoo").attr("href"));
		// 引数が一つの場合は持ってくるだけ、引数が二つの場合設定する。
	});
	$("#set-attr").on("click", function(){
		$("#apple").attr("href", "http://www.apple.co.jp");
	});
	$("#check-value").on("click", function(){
		var checkedRadio = $("#form2 > input:checked").val();
		var selected = $("#form2 > select option:selected").val();
		alert(checkedRadio + " " + selected);
	});
	$("#form-filter").on("click", function(){
		$("#form > input:text").css("background-color", "red");
		$("#form > input:image").attr("src", "../javascript/bump2.jpeg");
		$("#form > input:button").css("background-color", "teal");
		$("#form > input:checkbox").css("border", "1px solid lightsteelblue");
		$("#form > input:radio").css("border", "1px solid orchid");
		$("#form > input:password").css("background-color", "brown");
	});
	$("#empty").on("click", function(){
		$("#table td:empty").css("background-color", "silver");
		$("#table td:parent").css("background-color", "springgreen");
	});
	$("#has").on("click", function(){
		$(".list4 > li:has(span)").css("background-color", "yellowgreen");
	});
	$("#contains").on("click", function(){
		$(".list4 > li:contains('郎')").css("background-color", "peru");
	});
	$("#not").on("click", function(){
		$("a:not([href$='apple.co.jp'])").css("background-color", "fuchsia");
	});
	$("#point").on("click", function(){
		$(".list3 > li:eq(2)").css("background-color", "aquamarine");
		$(".list3 > li:gt(2)").css("background-color", "khaki");
		$(".list3 > li:lt(2)").css("background-color", "mistyrose");
	});
	$("#evenall").on("click", function(){
		$(".list3 > li:even").css("background-color", "darkorange");
	});
	$("#oddall").on("click", function(){
		$(".list3 > li:odd").css("background-color", "hotpink");
	});
	$("#alone").on("click", function(){
		$(".list3 > li:only-child").css("background-color", "deepskyblue");
	});
	$("#nth-child3").on("click", function(){
		$(".list3 > li:nth-child(3n+1)").css("background-color", "limegreen");
	});
	$("#nth-child2").on("click", function(){
		$(".list3 > li:nth-child(3n)").css("background-color", "royalblue");
	});
	$("#even").on("click", function(){
		$(".list3 > li:nth-child(even)").css("background-color", "coral");
	});
	$("#odd").on("click", function(){
		$(".list3 > li:nth-child(odd)").css("background-color", "forestgreen");
	});
	$("#nth-child").on("click", function(){
		$(".list3 > li:nth-child(2)").css("background-color", "red");
	});
	$(".list3").on("click", function(){
		// $(".list3 > li:first").css("background-color", "red");
		$(".list3 > li:first-child").css("background-color", "red");
		// 各子要素の最初⬆︎
	});
	$("#sazaesan").on("click", function(){
		// $("#parents p").css("background-color", "red");
		// $("#parents > p").css("background-color", "red");
		// $("#child > h2 + p").css("background-color", "red")h2の兄弟要素のp
		$("#child > h2 ~ p").css("background-color", "red");
	});

	$("#find-cat").on("click", function(){
		$("#find-cat").on("click", function(){
			$("input[name=cat]", "#cats").css("background-color", "red");
		})
		// $("input[name*='cat']").css("background-color", "red");部分一致
		// $("input[name~='cat']").css("background-color", "red");完全一致
		// $("input[name^='do']").css("background-color", "red");前方一致
		// $("input[name$='rse']").css("background-color", "red");後方一致
		// $("input[name=catman][type=text]").css("background-color", "red");
	});
	$("a").on("click", function(){
		$("a[target!='_blank']").css("border", "2px solid red");
		// $("a[target]").css("color", "aqua");
		// $("a[target='_blank']").css("color", "pink");
		// $("a[target='_self']").css("color", "blue");
		// $("a[target='_parent']").css("color", "red");
		// $("a[target='_top']").css("color", "green");
	});
	$("#universal").on("click", function(){
		$("*").css("color", "gold");
	});
	$("#list2").on("click", function(){
		$(".taro, .hanako").css("color", "purple");
	});
	$("ul").click(function(){
		$(".man").css("color", "green");
		$("#taro").css("color", "blue");
	});
	$("h2").on("click", function(){
		$("h2").css("color", "red");
	});
	$("#add-link").on("click", function(){
		$("<a></a>",
			{href: "http://www.apple.com",target: "_blank","class": "myClass", text: "リンク"}).appendTo("#link");
		$("<div></div>", 
			{
				width: 100, 
				height: 100,
				css: {backgroundColor: "pink"},
				on: {
					mouseover: function(){
						$(this).css({backgroundColor: "yellow"});
					}
				}
			}).appendTo(document.body);
	});
	$("#append").on("click", function(){
		console.log(document.getElementById("family"));
		console.log($("#family"));
		$("<li>三郎</li>").appendTo("#family");
	});
	$("#color").on("click", function(){
		$("li")
			.css({"color": "red", "background-color": "blue"})
			.css("border", "1px solid green");
	});
});