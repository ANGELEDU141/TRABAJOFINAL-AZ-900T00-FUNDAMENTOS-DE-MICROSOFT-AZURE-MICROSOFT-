<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #7c7a7a;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
		}

		.container {
			background-color: #fff;
			padding: 40px 60px;
			border-radius: 8px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			text-align: center;
			max-width: 400px;
			width: 100%;
		}

		h3 {
			color: #3498db;
			margin-bottom: 30px;
			font-size: 42px;
		}

		.btn {
			padding: 12px 20px;
			border: none;
			cursor: pointer;
			text-decoration: none;
			display: inline-block;
			border-radius: 5px;
			background-color: #3498db;
			color: #fff;
			font-size: 16px;
			transition: background-color 0.3s ease;
		}

		.btn:hover {
			background-color: #2980b9;
		}

		.btn:focus {
			outline: none;
		}

		.link {
			display: inline-block;
			padding: 12px 20px;
			border-radius: 5px;
			background-color: #3498db;
			color: #fff;
			text-decoration: none;
			font-size: 16px;
			transition: background-color 0.3s ease;
			margin-top: 20px;
		}

		.link:hover {
			background-color: #2980b9;
		}
	</style>
</head>
<body>
	<div class="container" >
		<h3>Hello World!</h3>


		<a href="/senati/jefe/listar" class="link" >Jefes</a>
		<a href="/senati/producto/listar" class="link">Productos</a>
	
	</div>
		

</body>
</html>