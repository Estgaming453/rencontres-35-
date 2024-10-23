<?php


include 'db.php';


if ($_SERVER['REQUEST_METOH'] == 'POST'){
    $email = $_POST['new-email'];
    $password = password_hash($_POST['new-password'], PASSWORD_BCRYPT);


    $stmt = $pdo-> prepare ("SELECT * FROM utilisateurs WHERE EMAIL = ?");
    $stmt->execute([$email]);
    $user->$stmt->fetch();
if ($user && password_verify($password, $user['password'])){
echo"Connexion réussie !";

}else{
    echo"Identifiants incorrects";
}
}



