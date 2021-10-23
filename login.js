function validar(){
	//declarar las variables
	var U,C;
	//recuperar los datos
	U=document.getElementById("Usu").value;
	C=document.getElementById("Con").value;
	//valiadar los datos
	if (U="Mar"&&C="123") {
		alert("usuario y contraseña correctos");
		window.open("peso.html");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
	else{
		alert("usuario y contraseña incorectos");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
}