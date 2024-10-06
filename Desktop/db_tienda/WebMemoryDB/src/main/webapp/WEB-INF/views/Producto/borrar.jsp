<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="form"  uri="http://www.springframework.org/tags/form"%>
        

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Borrar</title>
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
			padding: 30px 40px;
			border-radius: 8px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			max-width: 500px;
			width: 100%;
			box-sizing: border-box;
			text-align: center;
		}

		h3 {
			color: #e74c3c;
			margin-bottom: 20px;
		}

		.form-field {
			margin-bottom: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.form-field label {
			font-weight: bold;
			color: #333;
			width: 30%;
			text-align: right;
			padding-right: 10px;
		}

		.form-field input {
			width: 65%;
			padding: 8px;
			border-radius: 5px;
			border: 1px solid #ddd;
			background-color: #f9f9f9;
			cursor: not-allowed;
		}

		.warning {
			color: #e74c3c;
			margin: 20px 0;
			font-size: 16px;
			font-weight: bold;
		}

		.btn-group {
			display: flex;
			justify-content: center;
			margin-top: 20px;
		}

		.btn {
			padding: 10px 20px;
			border: none;
			cursor: pointer;
			text-decoration: none;
			display: inline-block;
			border-radius: 5px;
			transition: background-color 0.3s ease;
			margin: 0 10px;
		}

		.btn-delete {
			background-color: #e74c3c;
			color: #fff;
		}

		.btn-delete:hover {
			background-color: #c0392b;
		}

		.btn-cancel {
			background-color: #3498db;
			color: #fff;
		}

		.btn-cancel:hover {
			background-color: #2980b9;
		}
	</style>
</head>
<body>
<div class="container">
			<form:form method="post" action="" modelAttribute="producto" >
				<div class="form-field">
					productp ID:<form:input id="productoId" type="text" path="producto_id" readonly="true"/>
				</div>

				<div class="form-field">
				Nombre: <form:input  id="name" type="text" path="nombre" readonly="true"/>
				</div>
				<p class="warning" >¿Está seguro de borrar?</p>

				<div class="btn-group">
					<button type="submit" class="btn btn-delete">Sí, Borrar</button>
					<button type="button" class="btn btn-cancel" onclick="location.href = '/senati/producto/listar'">Cancelar</button>
				</div>
			</form:form>
		</div>
</body>
</html>