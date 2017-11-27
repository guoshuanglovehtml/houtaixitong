<?php

    $dB = mysql_connect("localhost","root","");
    mysql_select_db("Hou_Tai",$dB);
    mysql_query("set names utf8");

    $result = mysql_query("select * from manage");

    while($row = mysql_fetch_array($result))
    {   
        echo json_encode($row);
    }
?>