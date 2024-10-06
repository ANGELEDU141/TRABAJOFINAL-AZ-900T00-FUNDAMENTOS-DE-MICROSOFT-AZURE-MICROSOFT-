<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
		 pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="spring"  uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!doctype html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Document</title>
		<style>
			body {
				font-family: Arial, sans-serif;
				background-color: #f4f4f4;
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
				max-width: 400px;
				width: 100%;
				box-sizing: border-box;
				text-align: center;
			}

			h3 {
				color: #3498db;
				margin-bottom: 30px;
				font-size: 42px;
			}

			.form {
				text-align: left;
			}

			.form label {
				display: block;
				margin-bottom: 10px;
			}

			.form input[type="text"] {
				width: 100%;
				padding: 10px;
				margin-bottom: 20px;
				border: 1px solid #ccc;
				border-radius: 4px;
				box-sizing: border-box;
			}

			.form button {
				background-color: #3498db;
				color: #fff;
				padding: 10px 20px;
				border: none;
				border-radius: 5px;
				cursor: pointer;
			}
		</style>
	</head>
	<body>


	<div class="container">
		<h3>Editar Jefe</h3>
		<form:form method="post" action="" modelAttribute="jefe">
			<form:label path="nombre">Nombre</form:label>
			<form:input path="nombre" type="text" required="required" /><br>
			<form:label path="apellido">Apellido</form:label>
			<form:input path="apellido" type="text" required="required" /><br>
			<form:label path="nacionalidad">Nacionalidad</form:label>
			<form:input path="nacionalidad" type="text" required="required" /><br>
			<form:label path="nro_celular">Nro Celular</form:label>
			<form:input path="nro_celular" type="text" required="required" /><br>
			<button type="submit">Editar</button>
			<button type="button" class="btn" onclick="location.href='/senati/jefe/listar'">Volver</button>
		</form:form>
	</div>
	</body>
	</html>