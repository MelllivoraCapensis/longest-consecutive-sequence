module.exports=function longestConsecutiveLength(array) {
   var result=0;
   while(array.length>0) {
    var neighb_left=array[0]-1;
    var neighb_right=array[0]+1;
    var lcl_arr=[];
    lcl_arr.push(array[0]);
    array.splice(0,1);
    var lcl=1;
    var left_pos=array.indexOf(neighb_left,0);
    var right_pos=array.indexOf(neighb_right,0);
    while(left_pos>=0||right_pos>=0)
    {
       if(left_pos>=0)
         {
          lcl++;
          lcl_arr.push(array[left_pos]);
          array.splice(left_pos,1);
          neighb_left--;
         }    
         if(right_pos>=0)
         {
          lcl++;
          lcl_arr.push(array[right_pos]);
          array.splice(right_pos,1);
          neighb_right++;
         } 
    left_pos=array.indexOf(neighb_left,0);
    right_pos=array.indexOf(neighb_right,0);
    }
   result=Math.max(result,lcl);
     }
return result;
}

