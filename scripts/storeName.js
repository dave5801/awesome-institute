//retrieve elements from local storage
var result = document.getElementById("result");

var symbols = localStorage.getItem("atomize");

//check if local storage is null
if (typeof symbols !== 'undefined' && symbols !== null){
	result.innerHTML = "For example try looking for these letters: " +symbols;
}
