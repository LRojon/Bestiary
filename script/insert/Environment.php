<?php


if(isset($_POST['name']) && $_POST['name'] != "")
{
    require_once '../include.php';

    $dao = new dao();
    $res = $dao->db->query("SELECT * FROM environment WHERE name='".$_POST['name']."'")->fetch();
    if($res == false)
        $dao->db->prepare("INSERT INTO environment(name) VALUES(:name)")->execute(array(':name' => $_POST['name']));
}
else
{
    echo '400 - Bad Request';
}