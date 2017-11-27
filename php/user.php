<?php

    $dB = mysql_connect("localhost","root","");
    
    mysql_select_db("Hou_Tai",$dB);

    mysql_query("set names utf8");

    $result = mysql_query("select * from user");
    // echo "成功 10";

    while($row = mysql_fetch_array($result))
    {   
    	// echo "成功";
        echo json_encode($row);
    }
?>