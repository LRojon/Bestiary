<?php

require_once '../include.php';

if(isset($_POST['name']))
{
    $dao = new dao();
    $res = $dao->db->prepare("INSERT INTO ability(`name`,`limit`,effect) VALUES(:name, :limit, :effect)")->execute(array(
        ':name' => $_POST['name'],
        ':limit' => ($_POST['limit'] == "true" ? 1: 0),
        ':effect' => $_POST['effect']
    ));
}
else
{
    echo '404';
}