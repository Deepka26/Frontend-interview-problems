const str="pwwkew"
//output=abc

function LongestSubstring(str)
{
    let newStr=""
    let obj={}
    for(let key of str)
    {
        if(!obj[key])
        {
            obj[key]=1
          newStr+=key
        }
        

    }
    return newStr
}
console.log(LongestSubstring(str))