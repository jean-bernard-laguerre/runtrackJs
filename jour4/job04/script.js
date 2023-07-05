$(document).ready(()=>{

    $("#button").click(()=>{
        fetch("user.php")
        .then(data => data.json())
        .then(users => {

            let rows = ""

            users.forEach(user => {
                rows +='<tr><td>';
                rows += user.id;
                rows += '</td><td>';
                rows += user.nom;
                rows += '</td><td>';
                rows += user.prenom;
                rows += '</td><td>';
                rows += user.email;
                rows += '</td></tr>';

            })

            $('#utilisateurs').html(rows); 
        })
    })
})