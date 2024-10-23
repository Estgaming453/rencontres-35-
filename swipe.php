<?php

$data = json_decode(file_get_contents('php://input'),true);
$profileId = $data['profileId'];
$action = $data['action'];

$stmt = $pdo ->prepare("INSERT INTO swipes(user_id, profile_id, action  VALUES (?,?,?)");
$stmt -> execute([$_SESSION['user_id'],$profileId, $action]);

echo json_encode(['status' => 'success']);