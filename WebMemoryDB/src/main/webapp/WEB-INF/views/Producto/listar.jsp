<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>listar</title>
    <style>
        .btn-group{
            text-align: center;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: #fff;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        }

        table caption {
            font-size: 1.5em;
            margin: 10px 0;
            color: #333;
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        tr:hover{
            background-color: #e8e7e7;
        }

        th {
            background-color: #f8f8f8;
            color: #333;
            font-weight: bold;
        }


        a {
            color: #3498db;
            text-decoration: none;
            margin-right: 10px;
        }

        a:hover {
            text-decoration: underline;
        }

        .btn {
            padding: 10px 15px;
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

        .btn-group {
            margin-top: 20px;
            text-align: center;
        }

        .btn-group a {
            margin: 0 10px;
        }
    </style>
</head>
<body>

<div>
<table >
  <caption>Productos</caption>
  <tr>
   <th><b>ID</b></th>
   <th><b>NOMBRE</b></th>
   <th><b>MARCA</b></th>
   <th><b>PRECIO</b></th>
   <th><b>F.FABRICACION</b></th>
   <th><b>F.VENCIMIENTO</b></th>
   <th><b>STOCK</b></th>
  </tr>
  <c:forEach var="producto" items="${bProductos}">
    <tr>
      <td>${producto.producto_id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.marca}</td>
      <td>${producto.precio}</td>
      <td>${producto.ffabricacion}</td>
      <td>${producto.fvencimiento}</td>
      <td>${producto.stock}</td>
      <td>
      <a href="/senati/producto/detalle/${producto.producto_id}">Detalle</a>
      	<a href="/senati/producto/editar/${producto.producto_id}">Editar</a>
      	<a href="/senati/producto/borrar/${producto.producto_id}">Eliminar</a>
      </td>
      
      
    </tr>
  </c:forEach>
</table>
    <div class="btn-group">
        <a href="/senati/index">Volver al Inicio</a>
        <a href="/senati/producto/registrar"> Registrar Track</a>
    </div>

</div>

</body>
</html>