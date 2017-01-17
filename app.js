$(document).ready(function(){
	$("#all").click(function(){
		$(".box").show(2000);
	});
	$("#mobile").click(function(){
		$(".mobile").show();
		$(".Web").hide(2000);
		$(".tab").hide(2000);

	});
	$("#web").click(function(){
		$(".Web").show();
		$(".mobile").hide(2000);
		$(".tab").hide(2000);

	});
	$("#tab").click(function(){
		$(".tab").show();
		$(".Web").hide(2000);
		$(".mobile").hide(2000);

	});

	$("#cmt").click(function(){
		var a= $("#inpt").val();
		$("#cmt_box").append("<p>" + a + "</p>").css();
	});

	$("#btn").click(function(){
		var name=$("#name").val();
		var email=$("#email").val();
		var pass=$("#pass").val();
		if(name === "Azad" & email === "hm.azad428@yahoo.com" & pass === "00000")
			{ alert("You are succesfully login");


		}
		else{ prompt("You Restricted #Your Original Name hare");

		}
	});


});