<?php

require_once '../include.php';
$verif = true;
if(count($_POST) > 0)
{

    foreach ($_POST as $value) {
        if(!isset($value) || $value == "")
        {
            $verif = false;
            break;
        }
    }

    if($verif)
    {
        $dao = new dao();

        $res = $dao->db->query("SELECT * FROM skill WHERE `name`='".$_POST['name']."'")->fetchAll();
        if(empty($res))
        {
            $effect = str_replace("'","\'",$_POST['effect']);
            $healths = $dao->db->query("SELECT * FROM health")->fetchAll();
            foreach ($healths as $value) {
                echo $effect."<br>";
                $effect = str_replace($value['name'], "<button class=\'btn btn-link\' onclick=\'goHealth(".$value['id'].")\'>".$value['name']."</button>",$effect);
            }

            $dao->db->exec("INSERT INTO skill(`name`,path,rank,`limit`,effect) VALUES('".$_POST['name']."','".$_POST['path']."',".$_POST['rank'].",".($_POST['limit'] == 'true' ? 1 : 0).",'".$effect."')");
        }
    }
}
else
{
    echo '500';
}