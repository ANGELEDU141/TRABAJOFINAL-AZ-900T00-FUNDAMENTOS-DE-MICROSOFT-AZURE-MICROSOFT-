<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="form"  uri="http://www.springframework.org/tags/form"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		<div style="text-align:center;">
		
			<form:form method="post" action="" modelAttribute="producto" >
				
				Nombre: <form:input type="text" path="nombre"/><br>
				Marca: <form:input type="text" path="marca"/><br>
				Precio: <form:input type="number" step="any" path="precio"/><br> <!-- any: para numeros enteros -->
				Fecha de fabricación: <form:input type="date" path="ffabricacion"/><br>
				Fecha de vencimiento: <form:input type="date" path="fvencimiento"/><br>
				Stock: <form:input type="number" path="stock"/><br><br>
				
				<button type="submit">Guardar</button>
				<button type="button" onclick="location.href='/senati/producto/listar'" >Cancelar</button>
			</form:form>
		
		
		</div>
		
		
</body>
</html>