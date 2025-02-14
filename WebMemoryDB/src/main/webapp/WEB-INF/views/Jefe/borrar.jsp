<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<%@taglib prefix="form"  uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Eliminar Jefe</title>
<style>
	.container {
		background-color: #fff;
		padding: 40px 60px;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		max-width: 400px;
		width: 100%;
		box-sizing: border-box;
		margin: 0 auto;
	}

	.form {
		text-align: left;
	}

	.form label {
		display: block;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.form input[type="text"] {
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.form input[type="text"]:read-only {
		background-color: #ddd;
	}

	.btn-group {
		margin-top: 20px;
	}

	.btn-group button {
		margin-right: 10px;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		background-color: #3498db;
		color: #fff;
		cursor: pointer;
	}

	.btn-group button:hover {
		background-color: #2980b9;
	}

	.btn-group button:active {
		background-color: #2980b9;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transform: translateY(1px);
	}

	.warning {
		color: red;
		font-weight: bold;
		margin-bottom: 20px;
	}

</style>
</head>
<body>
	<div class="container">
		<h3>Eliminar Jefe</h3>

        <form:form method="post" action="" modelAttribute="jefe" >
            <p class="warning" >¿Está seguro de borrar?</p>
            <div class="form-field">
               JefeId:<form:input id="jefeId" type="text" path="jefe_id" readonly="true"/>
            </div>

            <div class="form-field">
               Nombre:<form:input id="nombre" type="text" path="nombre" readonly="true"/>
            </div>
            <div class="btn-group">
                <button type="submit" class="btn" >Si</button>
                <button type="button" class="btn" onclick="location.href='/senati/jefe/listar'">No</button>
            </div>
        </form:form>


	</div>
</body>
</html>