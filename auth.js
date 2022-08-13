
/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "krish",
		password: "krishisthebest99"
	},
	{ // Object @ 1 index
		username: "ram",
		password: "cool123abc"
	},
	{ // Object @ 2 index
		username: "yeeyeehacker",
		password: "secretpassword"
	}

]

function getInfo() {
	var username = document.getElementById('email1').value
	var password = document.getElementById('password1').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
        alert("Successfully Logged In")
			window.location.replace("http://www.atmpal.ga/HTML/index.html");
			// stop the function if this is found to be true
			return
		}
	}
	alert("ERROR: Incorrect Username or Password.")
}