window.onload = function (argument) 
{   
	// 开关
	var show_hidd = document.getElementsByClassName('show_hidd')[0];
	// console.log(show_hidd);
    
    // 事件源
	var name = document.getElementsByClassName("name")[0];
	var name1 = document.getElementsByClassName("name1")[0];

	var manage = document.getElementsByClassName("manage")[0];
	var manage1 = document.getElementsByClassName("manage")[0];
    
    // 处理
	show_hidd.onclick = function () 
	{
		name.style.display=="none" ? show() : hidden();
		console.log(name.style.display);

		// name.style.display="none";
		
	}

	function show() 
		{
			name.style.display="block";
			// name1.style.display = "none";

			manage.style.display="block";

		}
	function hidden() 
	{
		name.style.display="none";
		// name1.style.display="block";

		manage.style.display="none";
	}

   

   window.onresize = function (argument) 
   {    
   	    var W = document.documentElement.clientWidth;
	   	if (name.style.display=="block"&&(W>=750)) 
		{   
			name.style.display = "none";
			// name1.style.display="none";
			manage1.style.display = "none";
		}
   // console.log(W);

		
   }
   
   
   
   // 大盒子
   var main = $(".main");
   // console.log(main);
   
  
   $.get("php/Admini.php",function (data) 
   {    

        var div;
        // 每行
   	       
	        var news = data;//string
	        // console.log(news);
	        

	        // 1、 split 分割

	        var a = news.split("}"); // 数组
	        // console.log(a);
	        // pop 删除最后一个
	           
	    for (var i = 0; i < a.length-1; i++) 
	    {   
	    	// console.log(a.length);
	    	var b =[];
	    	b[i] = a[i];
	    	 //数组

	    	var c = b[i].concat("}");
	    	// console.log(c + "c");

	    	var d = JSON.parse(c);
	    	console.log(d);//  json

	    	var e = [];
	    	e[i] = d; //数组
	    	// console.log(e);

	    	var f = e.concat(e);
	    	// console.log(f);


			div = $("<div class='list'></div>");
			// console.log(div);
			div.appendTo(main);
            
         // 具体数据
              // id
	     $("<li class='l1'></li>").html("<span>管理员id</span>"+e[i].id).appendTo(div);
		

		 // 	// 昵称
			$("<li class='l2'></li>").html("<span>昵称</span>"+e[i].personName).appendTo(div);

              // 邮箱
			$("<li class='l3'></li>").html("<span>邮箱</span>"+e[i].youxiang).appendTo(div);
            
             // 操作
			$("<li class='l4'><span>操作</span><span>编辑</span></li>").appendTo(div);
		 // 	// console.log($div.find());


        }



	   
	   var childs = $(".main div").length;
	   // // console.log(childs);

	   var sum = Math.ceil(childs/5);
	   // console.log(sum);

	   for (var i = 0; i < sum; i++) 
	   {
	   	  $("<li></li>").html(i+1).appendTo($(".control"));
	   	  // console.log(i);
	   }
	   $("<li class='last_'>》</li>").appendTo($(".control"));

    })

	

}