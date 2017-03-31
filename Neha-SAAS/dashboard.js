window.onload = function() {
	var firstName = document.getElementById("first-name");

	firstName.onblur = function fun() {
		var reg = /^[a-zA-Z ]+/;
		var a = reg.test(firstName.value);
		// console.log(a);
		if (!a) {

			alert("plz fill the first name");
			firstName.value = "";
		}
	}


	document.getElementById("add1").onblur = function address() {
		var add = document.getElementById("add1").value;
		if (add.length == 0) {
			alert("plz fill the address field");
			//add.value = "";
		}
	}

	document.getElementById("checkbox").onclick = function checkbox() {
		document.getElementById("add1").disabled = true;
		var add1 = document.getElementById("add1").value;
		document.getElementById("add2").defaultValue = add1;

	}

	var email = document.getElementById("email");
	email.onblur = function ValidateEmail() {
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var a = reg.test(email.value);
		if (!a) {
			alert("plz fill the email");
			email.value = "";
		}
	}


	var contact1 = document.getElementById("phone");
	document.getElementById("phone").onblur = function contact() {
		var contact = document.getElementById("phone").value;
		if (contact.length != 10) {
			alert("plz fill the contact field");
			contact1.value = "";

		}
	}


	document.getElementById('neha').onclick = function() {
		var ul = document.getElementById('dropdown-menu').classList.toggle('hide');
	}

	document.getElementById("cpwd").onblur = function password() {
		var pass1 = document.getElementById("pwd");
		var pass2 = document.getElementById("cpwd");
		//var contact = document.getElementById("phone").value;
		if (pass1.value != pass2.value) {
			alert("password doesnt match");
			pass1.value = "";
			pass2.value = "";
		}
	}

	document.getElementById("b1").onclick = function reset() {

		document.getElementById("first-name").value = "";



		document.getElementById("add1").value = "";
		document.getElementById("add2").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("pwd").value = "";
		document.getElementById("cpwd").value = "";
		document.getElementById("lname").value = "";

	}

}



function fun1() {
	var fnm = document.getElementById("first-name").value;
	var eml = document.getElementById("email").value;
	showDashboard(fnm, eml);
}

function showDashboard(fnm, eml) {
	var parentElement = document.getElementById('parent-div');
	var inputElement = document.createElement("a");
	inputElement.setAttribute("title", eml);
	inputElement.setAttribute('class', 'parent-div-name');
	inputElement.innerHTML = fnm;

	var inputElementMail = document.createElement("div");
	inputElementMail.setAttribute('class', 'parent-div-email');
	var node = document.createTextNode(eml);
	inputElementMail.appendChild(node);

	parentElement.appendChild(inputElement);
	parentElement.appendChild(inputElementMail);
}