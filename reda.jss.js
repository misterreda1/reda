function reda(){
	document.getElementById("bbb").innerHTML = "welcome";
	document.getElementById("bbb").style.color = "red";
	var color=document.getElementById('demo').style.color;
	if (color=="blue"){
		document.getElementById('demo').style.color = "red"
	else
		document.getElementById('demo').style.color = "blue";
}
console.log(color);
}