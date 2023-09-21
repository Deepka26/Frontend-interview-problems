let str="heleh"
str=str.toLowerCase("")
console.log(str)
const length=str.length
function stringPalindrome(str,length)
{
    for(let i=0;i<=Math.floor(length/2);i++)
    {
        if(str[i]===str[length-1-i])
        continue;
    else return false
    }
    return true
}
console.log(stringPalindrome(str,length))

function stringPalindrome2(str)
{
    let left=0
    let right=str.length-1
    while(left<right)
    {
        if(str[left]!==str[right])
        return false
    left++
    right--
    }
    return true

}
console.log(stringPalindrome2(str))
