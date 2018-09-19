module.exports=function longestConsecutiveLength(array) {
	function has_elem(array,elem)
   {
   	for(var i=0;i<array.length;i++) 
   	    if(array[i]===elem)
   	    {
   	    	return i;
   	    }
   	return -1;
   }
   var result=0;
   var lcl=0;
   while(array.length>0) {
    var neighb_left=array[0]-1;
    var neighb_right=array[0]+1;
    var lcl_arr=[];
   	lcl_arr.push(array[0]);
   	array.splice(0,1);
   	var lcl=1;
   	var left_pos=has_elem(array,neighb_left);
   	while(left_pos>=0)
   	{
   		lcl++;
        array.splice(left_pos,1);
        neighb_left--;
        left_pos=has_elem(array,neighb_left);
    }
    var right_pos=has_elem(array,neighb_right);
    while(right_pos>=0)
   	{
       	lcl++;
       	array.splice(right_pos,1);
       	neighb_right++;
     	right_pos=has_elem(array,neighb_right);
    }
   result=Math.max(result,lcl);
     }
return result;
}


 