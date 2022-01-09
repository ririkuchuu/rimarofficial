/*------------ multiply and stuffs -----------------*/
function mult() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var prod = 0;
	if (Number.isInteger(parseInt(num1), parseInt(num2))){
		var value = parseFloat(document.getElementById("num1", "num2").value);
  			if (value<0) {
   				alert("Negative value is not allowed.");
			} else if (value>0) {
				for (let i = 0; i < parseInt(num2); i++){
					prod = parseInt(num1) + prod;
				}
				document.getElementById("multtext").innerHTML = "The product is: " + prod;
			}
	}
	else {
		alert("Only numbers are accepted! Click 'OK' and type again.");
	}
}

function sum() {
	var num1 = document.getElementById("num3").value;
	var num2 = document.getElementById("num4").value;
	var sum = 0;
	if (Number.isInteger(parseInt(num1), parseInt(num2))){
		var value = parseFloat(document.getElementById("num3", "num4").value);
			if (value<0) {
		 		alert("Negative value is not allowed.");
			} else if (value>0) {
				for (let i = parseInt(num1); i <= parseInt(num2); i++){
						if (i % 2 == 1){
							sum = sum + i;
						}
					document.getElementById("sumtext").innerHTML = "The sum of odd numbers from " + num1 + " to " + num2 + " is: " +sum;
				}
			}
	}
	else {
		alert("Only numbers are accepted! Click 'OK' and type again.");
	}
}