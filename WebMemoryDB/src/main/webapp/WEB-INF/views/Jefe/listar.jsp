
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="spring"  uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Lista de Jefes</title>
</head>
<body>
	<h1>Lista de Jefes</h1>
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Nacionalidad</th>
				<th>Nro Celular</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="jefe" items="${bjefes}">
				<tr>
					<td>${jefe.jefe_id}</td>
					<td>${jefe.nombre}</td>
					<td>${jefe.apellido}</td>
					<td>${jefe.nacionalidad}</td>
					<td>${jefe.nro_celular}</td>
					<td><a href="/senati/jefe/detalle/${jefe.jefe_id}">Detalle</a>
						<a href="/senati/jefe/editar/${jefe.jefe_id}">Editar</a>
						<a href="/senati/jefe/borrar/${jefe.jefe_id}">Eliminar</a>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<div class="btn-group">
		<button type="button" class="btn" onclick="location.href='/senati/jefe/registrar'">Registrar</button>
	</div>

</body>
</html>
