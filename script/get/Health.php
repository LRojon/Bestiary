<?php

require_once '../include.php';

if(isset($_POST['id']))
{
    $dao = new dao();
    echo json_encode($dao->db->query("SELECT * FROM health WHERE id=".$_POST['id'])->fetch());
}
else
{
    echo '404';
}