module.exports=function longestConsecutiveLength(array) {
	function has_elem(array,left,right)
   {
   	var result=[-1,-1];
   	for(var i=0;i<array.length;i++) 
   	    if(array[i]===left)
   	    {
   	    	result[0]=i;
   	    	return result;
   	    }
   	    else if (array[i]===right) {
   	    	result[1]=i;
   	    	return result;
   	    }
   return result;
   }
   var result=0;
   var lcl=0;
   while(array.length>0) {
    var neighb_left=array[0]-1;
    var neighb_right=array[0]+1;
    array.splice(0,1);
   	var lcl=1;
   	var pos=has_elem(array,neighb_left,neighb_right);
   	while(pos[0]>=0||pos[1]>=0)
   	{
   		lcl++;
   		if(pos[0]>=0)
   		{
        array.splice(pos[0],1);
        neighb_left--;
        }
        else
        {
        array.splice(pos[1],1);
        neighb_right++;
        }

       pos=has_elem(array,neighb_left,neighb_right);
    }
   result=Math.max(result,lcl);
     }
return result;
}


 