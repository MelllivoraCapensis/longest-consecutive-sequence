module.exports=function longestConsecutiveLength(arr)
{
function sequence(){
  this.content=[];
  this.count=0;
}
function element(){
  this.numb=0;
  this.parent=null;
}
function arr_max(arr){
  var res=arr[0];
  for (var i in arr) {
    if(arr[i]>res)
      res=arr[i];
  }
  return res;
}
function arr_min(arr){
  var res=arr[0];
  for (var i in arr) {
    if(arr[i]<res)
      res=arr[i];
  }
  return res;
}
var max_val=arr_max(arr);
var min_val=arr_min(arr);
var new_arr=[];
var max_len=0;
for (var i in arr) {
  elem=new element();
  elem.numb=arr[i];
  var left=new_arr[arr[i]-1];
  var right=new_arr[arr[i]+1];
  if(new_arr[arr[i]])
    continue;
  else
  new_arr[arr[i]]=elem;
 if(left&&right)
  {
    var parent=left.parent;
    elem.parent=parent;
    var last_elem=right.parent.content[right.parent.content.length-1];
    parent.count=parent.count+last_elem.parent.count+1;
    last_elem.parent=parent;
    parent.content.push(last_elem);
  }
 else if (left)
 { 
    var parent=left.parent;
    elem.parent=parent;
    parent.count++;
    parent.content.push(elem);
  }
 else if (right) 
 {
    var parent=right.parent;
    elem.parent=parent;
    parent.count++;
    parent.content.unshift(elem);
  }
   else
   {
    var parent=new sequence();
    new_arr[arr[i]]=elem;
    elem.parent=parent;
    parent.count++;
    parent.content.push(elem);
  }
max_len=Math.max(max_len,parent.count);
}
return max_len;
}
