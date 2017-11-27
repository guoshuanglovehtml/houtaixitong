<?php

    $dB = mysql_connect("localhost","root","");
    mysql_select_db("Hou_Tai",$dB);
    
    // $sql_tab = "CREATE TABLE article(personID int NOT NULL AUTO_INCREMENT,artiID int(10),Title varchar(20),Sketch varchar(20),PRIMARY KEY(personID))";

    // mysql_query($sql_tab,$dB);
    // mysql_close($dB);



    
    mysql_query("set names utf8");

    $result = mysql_query("select * from article");
    // echo "成功";

    while($row = mysql_fetch_array($result))
    {   
        echo json_encode($row);
    }
?>