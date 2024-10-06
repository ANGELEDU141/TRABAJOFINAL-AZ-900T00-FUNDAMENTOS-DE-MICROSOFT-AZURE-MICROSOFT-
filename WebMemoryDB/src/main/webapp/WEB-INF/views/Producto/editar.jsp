<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="form"  uri="http://www.springframework.org/tags/form"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Editar</title>
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
			max-width: 800px;
			width: 100%;
			box-sizing: border-box;
		}

		h3 {
			text-align: center;
			color: #3498db;
			margin-bottom: 30px;
		}

		.form-group {
			margin-bottom: 15px;
			display: flex;
			align-items: center;
		}

		.form-group label {
			font-weight: bold;
			margin-right: 10px;
			width: 120px;
			color: #333;
		}

		.form-group input {
			flex: 1;
			padding: 10px;
			font-size: 16px;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
		}

		.form-group input:focus {
			border-color: #3498db;
			outline: none;
			box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
		}

		.form-row {
			display: flex;
			justify-content: space-between;
		}

		.form-col {
			width: 48%;
		}

		.btn-group {
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
		}

		.btn {
			padding: 10px 20px;
			background-color: #3498db;
			color: #fff;
			border: none;
			cursor: pointer;
			text-decoration: none;
			display: inline-block;
			border-radius: 5px;
			transition: background-color 0.3s ease;
		}

		.btn:hover {
			background-color: #2980b9;
		}

		.btn-danger {
			background-color: #e74c3c;
		}

		.btn-danger:hover {
			background-color: #c0392b;
		}
	</style>
</head>
<body>
<div class="container">
			<form:form method="post" action="" modelAttribute="producto" >
				<div class="form-row">
					<div class="form-col">
						<div class="form-group">
							<label for="producto_id">ID:</label>
							<form:input type="text" path="producto_id" readonly="true"/>
						</div>
						<div class="form-group">
							<label for="nombre">Nombre:</label>
							<form:input type="text" path="nombre"/>
						</div>
						<div class="form-group">
							<label for="marca">Marca:</label>
				<form:input type="text" path="marca"/>
						</div>
						<div class="form-group">
							<label for="precio">Precio:</label>
							<form:input type="number" step="any" path="precio"/> <!-- any: para numeros enteros -->
						</div>
						<div class="form-group">
							<label for="ffabricacion">Fecha de fabricacion:</label>
				<form:input type="date" path="ffabricacion"/>
						</div>
						<div class="form-group">
							<label for="fvencimiento">Fecha de vencimiento:</label>
				<form:input type="date" path="fvencimiento"/>
						</div>
						<div class="form-group">
							<label for="stock">Stock:</label>
				<form:input type="number" path="stock"/>
						</div>
					</div>
				</div>
				<div class="btn-group">
					<button type="submit" class="btn">Actualizar</button>
					<button type="button" class="btn btn-danger" onclick="location.href = '/senati/producto/listar'">Cancelar</button>
				</div>
			</form:form>
		
		
		</div>
		
		
</body>
</html>