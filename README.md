## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/MariaJF23/Peso-en-otro-lugar/edit/main/README.md) to maintain and preview the content for your website in Markdown files.
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>login</title>
	<script type="text/javascript" src="login.js"></script>
</head>
<body background="imagen5.png">
	<form>
		<h1>
			<div align="center">
				<label>Usuario</label><input type="text" id="Usu"><br>
		        <label>Contraseña</label><input type="text" id="Con"><br>
		        <input type="Button" value="validar" onclick="validar()">
	        </div>
	    </h1>
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
	</form>
</body>
</html>
