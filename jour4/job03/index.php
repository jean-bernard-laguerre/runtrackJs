<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"></script>
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="text" id="pokemon-id" placeholder="ID">
        <input type="text" id="pokemon-name" placeholder="Name">
        <select name="type" id="type-select">
            <option value="">-</option>
            <option value="Water">Water</option>
            <option value="Fire">Fire</option>
            <option value="Poison">Poison</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Rock">Rock</option>
            <option value="Flying">Flying</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Steel">Steel</option>
            <option value="Ice">Ice</option>
        </select>
        <input type="button" id="button" value="Filtrer">
    </form>
    <div id="results">

    </div>
</body>
</html>