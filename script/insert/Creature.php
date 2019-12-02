<?php

require_once '../include.php';

if(isset($_POST['name']))
{
    $dao = new dao();
    $verif = $dao->db->query("SELECT * FROM creature WHERE name='".$_POST['name']."'")->fetchAll();
    if(empty($verif))
    {
        $res = $dao->db->prepare('INSERT INTO creature(`name`,`description`,nc,stats,attack,boss_rank,family_id,type_id,size_id) VALUES(:name, :description, :nc, :stats, :attack, :boss_rank, :family_id, :type_id, :size_id)')->execute(array(
            ':name' => $_POST['name'],
            ':description' => nl2br($_POST['description']),
            ':nc' => $_POST['nc'],
            ':stats' => $_POST['stats'],
            ':attack' => $_POST['attacks'],
            ':boss_rank' => $_POST['bossRank'],
            ':family_id' => $_POST['family'],
            ':type_id' => $_POST['type'],
            ':size_id' => $_POST['size']
        ));

        $id = $dao->db->query("SELECT * FROM creature WHERE name='".$_POST['name']."'")->fetch()['id'];
        var_dump($id);

        $skills = $_POST['skills'];
        foreach( explode(',',$skills) as $value) {
            if($value != "null")
            {
                $dao->db->prepare('INSERT INTO crea_skill(creature_id, skill_id) VALUES(:creature_id, :skill_id)')->execute(array(
                    ':creature_id' => $id,
                    ':skill_id' => $value
                ));
            }
        }
        $abilities = $_POST['abilities'];
        foreach( explode(',',$abilities) as $value) {
            if($value != "null")
            {
                $dao->db->prepare('INSERT INTO crea_ability(creature_id, ability_id) VALUES(:creature_id, :ability_id)')->execute(array(
                    ':creature_id' => $id,
                    ':ability_id' => $value
                ));
            }
        }
        $environments = explode(',',$_POST['environments']);
        foreach ($environments as $value) {
            $params = explode('|', $value);
            if($params[0] != null && $params[0] != "")
            {
                var_dump($params);
                $res = $dao->db->prepare('INSERT INTO crea_env(creature_id, environment_id,rate,quantity) VALUES(:creature_id, :environment_id, :rate, :quantity)')->execute(array(
                    ':creature_id' => $id,
                    ':environment_id' => $params[0],
                    ':rate' => $params[1],
                    ':quantity' => $params[2]
                ));
                var_dump($res);
            }
        }
    }
}
else{
    echo '404';
}