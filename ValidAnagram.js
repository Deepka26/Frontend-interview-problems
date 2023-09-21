const str1="hello";
const str2="elhlpo"
function validAnagram(str1,str2)
{
    if(str1.length!==str2.length)
    return false;
    let obj={}
    for(let items of str1 )
    {
     if(obj[items])
     {
        obj[items]=++obj[items];
     } 
     else{
        obj[items]=1
     }  
    }
    for(let key of str2)
    {
        if(!obj[key])
        {
           return false 
        }
        else{
            obj[key]--
        }
    }
    return true;
}
console.log(validAnagram(str1,str2))