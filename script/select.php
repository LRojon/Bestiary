<?php
    date_default_timezone_set('Europe/Paris');
    require_once '../classes/dao.php';

    $dao = new dao();
    $table = $_POST['table'];
    $id = isset($_POST['id']) ? $_POST['id'] : null;
    $result = null;

    if($id != null)
    {
        $result = $dao->db->query("SELECT * FROM $table WHERE id=$id")->fetch();
    }
    else
    {
        $result = $dao->db->query("SELECT * FROM $table")->fetchAll();
    }

    echo json_encode($result);
?>