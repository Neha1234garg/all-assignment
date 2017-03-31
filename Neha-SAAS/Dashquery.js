$(document).ready(function() {


	$('#first-name').blur(function() {
		var fname = $(this).val();
		if (!(/^[a-zA-Z ]{2,30}$/.test(fname))) {

			alert("Please fill the field");
			$("#first-name").val("");
			return false;
		}
		// else {
		// 	alert("didnt work");
		// }
	});

	$('#add1').blur(function() {
		var address = $(this).val();
		if (address.length == 0) {

			alert("plz fill the address field");
			$("#add1").val("");
			return false;

		}
		// else {
		// 	alert("didnt work");
		// }
	});



	$("#checkbox").click(function() {
		$("#add1").disabled = true;
		var add1 = $("#add1").val();
		$("#add2").val(add1);

	});

	var email = $("#email");
	email.blur(function() {
		//var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		var evalue = $(this).val();

		//var a = reg.test(email.val());
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(evalue))) {
			alert("plz fill the email");

			//evalue.attr('value', '');
			//evalue.attr('value') = '';
			$("#email").val("");
			return false;
		}
	});


	var contact1 = $("#phone");
	$("#phone").blur(function() {
		var contact = $("#phone").val();
		if (contact.length != 10) {
			alert("plz fill the contact field");
			$("#phone").val("");
			return false;

		}
	});



	$("#cpwd").blur(function() {
		var pass1 = $("#pwd").val();
		var pass2 = $("#cpwd").val();
		//var contact = document.getElementById("phone").value;
		if (pass1 != pass2) {
			$('#pwd').val("");
			$('#cpwd').val("");
			alert("password doesnt match");
			return false;

		}
	});

	$("#b1").click(function() {
		$("#first-name").val("");
		$("#lname").val("");
		$("#add1").val("");
		$("#checkbox").val("");
		$("#add2").val("");
		$("#email").val("");
		$("#phone").val("");
		$('#pwd').val("");
		$('#cpwd').val("");
	});

	$("#b2").click(function() {
		//alert("executed");
		var fname = $('#first-name').val();
		var evalue = $("#email").val();
		$("#parent-div").append(fname + "<br>");

	});



	$("#b2").attr('disabled', 'disabled');


	$("#first-name").blur(function() {
		if ($(this).val != '') {
			$("#b2").removeAttr('disabled');
		}
	});
});


// if (($("#first-name").val != '') && ($('#add1').length != 0)) {
// 	$("#b2").removeAttr('disabled');
// }



// 	function fun1() {

// 	var fnm = document.getElementById("first-name").value;
// 	var eml = document.getElementById("email").value;
// 	showDashboard(fnm, eml);
// }

// function showDashboard(fnm, eml) {
// 	var parentElement = document.getElementById('parent-div');
// 	var inputElement = document.createElement("a");
// 	inputElement.setAttribute("title", eml);
// 	inputElement.setAttribute('class', 'parent-div-name');
// 	inputElement.innerHTML = fnm;

// 	var inputElementMail = document.createElement("div");
// 	inputElementMail.setAttribute('class', 'parent-div-email');
// 	var node = document.createTextNode(eml);
// 	inputElementMail.appendChild(node);

// 	parentElement.appendChild(inputElement);
// 	parentElement.appendChild(inputElementMail);
// }


//$("#parent-div").append(name + " " + lname + "<br>").attr('title', email).addClass("testclass");

//