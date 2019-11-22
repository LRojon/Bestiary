<?php

require_once '../include.php';

if(isset($_POST['name']))
{
    $dao = new dao();
    $res = $dao->db->query("SELECT * FROM ability WHERE name='".$_POST['name']."'")->fetchAll();
    if(empty($res))
    {
        $healths = $dao->db->query("SELECT * FROM health")->fetchAll();
        $effect = $_POST['effect'];
        foreach ($healths as $value) {
            $effect = str_replace($value['name'], "<button class='btn btn-link' onclick='goHealth(".$value['id'].")'>".$value['name']."</button>", $effect);
        }
        $res = $dao->db->prepare("INSERT INTO ability(`name`,`limit`,effect) VALUES(:name, :limit, :effect)")->execute(array(
            ':name' => $_POST['name'],
            ':limit' => ($_POST['limit'] == "true" ? 1: 0),
            ':effect' => $effect
        ));
    }
}
else
{
    echo '404';
}