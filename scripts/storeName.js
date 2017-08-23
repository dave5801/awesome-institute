var result = document.getElementById("result");

console.log(result);

if(result !== null){
    result.innerHTML = localStorage.getItem("atomize");
};