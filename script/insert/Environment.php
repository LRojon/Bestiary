<?php


if(isset($_POST['name']))
{
    require_once '../include.php';

    $dao = new dao();
    $dao->db->prepare("INSERT INTO environment(name) VALUES(:name)")->execute(array(':name' => $_POST['name']));
}
else
{
    echo '400 - Bad Request';
}