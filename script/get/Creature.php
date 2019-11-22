<?php

if(isset($_GET['id']))
{
    require_once '../include.php';
    
    $dao = new dao();
    $res = $dao->db->query("SELECT * FROM creature WHERE id=".$_GET['id'])->fetch();
    $family = $dao->db->query("SELECT * FROM family WHERE id=".$res['family_id'])->fetch()['label'];
    $type = $dao->db->query("SELECT * FROM `type` WHERE id=".$res['type_id'])->fetch()['label'];
    $size = $dao->db->query("SELECT * FROM size WHERE id=".$res['size_id'])->fetch()['label'];
    
    // Récupération des environnements
    $resEnvironments = $dao->db->query("SELECT e.id, e.name, p.rate, p.quantity FROM environment e LEFT JOIN crea_env p ON p.environment_id = e.id WHERE p.creature_id = ".$res['id'])->fetchAll();
    $envs = array();
    foreach ($resEnvironments as $resEnv) {
        array_push($envs, new Environment($resEnv['id'], $resEnv['name'], $resEnv['rate'], $resEnv['quantity']));
    }

    // récupération des compétences
    $resSkills = $dao->db->query("SELECT s.* FROM skill s JOIN crea_skill p ON p.skill_id = s.id WHERE p.creature_id = ".$res['id'])->fetchAll();
    $skills = array();
    foreach ($resSkills as $resSkill) {
        array_push($skills, new Skill($resSkill['id'], $resSkill['name'], $resSkill['path'], $resSkill['rank'], $resSkill['limit'], $resSkill['effect']));
    }

    // récupération des capacités
    $resAbilities = $dao->db->query("SELECT a.* FROM ability a JOIN crea_ability p ON p.ability_id = a.id WHERE p.creature_id = ".$res['id'])->fetchAll();
    $abilities = array();
    foreach ($resAbilities as $resAbility) {
        array_push($abilities, new Ability($resAbility['id'], $resAbility['name'], $resAbility['limit'], $resAbility['effect']));
    }
    
    $creature = new Creature(
        $res['id'],
        $res['name'],
        $res['description'],
        $res['nc'],
        $res['stats'],
        $res['attack'],
        $type,
        $size,
        $family,
        $envs,
        $abilities,
        $skills,
        $res['boss_rank']
    );

    //header('Content-Type: application/json');
    echo json_encode($creature);
}
else{
    echo "404";
}

