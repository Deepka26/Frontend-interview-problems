const str="hellllllloooooooooooomnnnn"
function countMaximumCharacter(str)
{
    let obj={}
    for(let key of str)
    {
     if(obj[key])
     obj[key]=++obj[key]
    else
    obj[key]=1
    }
    let max=1;
    let char=null;
   for(let key in obj)
   {
   if(obj[key]>max)
   {
    max=obj[key]
    char=key
   } 
   
   }
  return char;
}
console.log(countMaximumCharacter(str))