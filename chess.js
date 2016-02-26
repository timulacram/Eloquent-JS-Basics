var chess = "";
var grid = 0;
while (grid<=7)
  {for (count=0; count<=7; count++) 
	{if ((count+grid)%2==0) {chess+=" ";} else {chess+="#";};};
		  console.log(chess);grid++; chess="";}