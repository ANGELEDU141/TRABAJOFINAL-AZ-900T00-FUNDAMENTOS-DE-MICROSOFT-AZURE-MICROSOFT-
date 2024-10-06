<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registro de Jefe</title>
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
        }

        .form button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .form button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
<div class="container">
    <h3>Registro de Jefe</h3>
    <form action="" method="post" modelAttribute="jefe">
        <div class="form">
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="apellido">Apellido: </label>
            <input type="text" id="apellido" name="apellido" required>
            <label for="nacionalidad">Nacionalidad: </label>
            <input type="text" id="nacionalidad" name="nacionalidad" required>
            <label for="nro_celular">Nro Celular: </label>
            <input type="text" id="nro_celular" name="nro_celular" required>
            <button type="submit">Registrar</button>
            <button type="button" class="btn" onclick="location.href='/senati/jefe/listar'">Volver</button>
        </div>
    </form>
</div>
</body>
</html>