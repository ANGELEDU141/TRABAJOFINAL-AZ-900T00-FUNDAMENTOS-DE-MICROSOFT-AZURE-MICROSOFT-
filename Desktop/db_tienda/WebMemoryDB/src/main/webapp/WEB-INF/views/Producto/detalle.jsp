<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Detalle de Producto</title>
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
			max-width: 600px;
			width: 100%;
			box-sizing: border-box;
			text-align: center;
		}

		h3 {
			color: #333;
			margin-bottom: 20px;
		}

		.details {
			text-align: left;
			line-height: 1.8;
			font-size: 16px;
			margin-bottom: 20px;
		}

		.details b {
			font-weight: bold;
			color: #333;
			margin-right: 5px;
		}

		.btn-group {
			margin-top: 20px;
			display: flex;
			justify-content: center;
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
			margin: 0 10px;
		}

		.btn:hover {
			background-color: #2980b9;
		}
	</style>
</head>
<body>
<div class="container">
			  <h3>¡Detalle Producto!</h3>
	<div class="details">
			   <b>ID:</b>${producto.producto_id} <br>
			   <b>NOMBRE:</b>${producto.nombre}<br>
			   <b>MARCA:</b>${producto.marca}<br>
			   <b>PRECIO:</b>${producto.precio}<br>
			   <b>F.FABRICACION:</b>${producto.ffabricacion}<br>
			   <b>F.VENCIMIENTO:</b>${producto.fvencimiento}<br>
			   <b>STOCK:</b>${producto.stock}<br>
	</div>

			  <div class="btn-group">
				  <button type="button" class="btn" onclick="location.href='/senati/producto/listar'">Volver</button>
			  </div>
</div>
		
</body>
</html>