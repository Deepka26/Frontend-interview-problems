const arr1=[1,2,3,4]
const arr2=[3,2,4,1]

//Brute Force method

function compareTwoArrays(arr1,arr2)
{
    if(arr1.length!==arr2.length)
    return false
 for(let key of arr1)
 {
    let count=0;
    for(let i=0;i<arr2.length;i++)
    {
        if(arr2[i]===key)
        break;
    else count++
    if(count===arr2.length)
    return false
    }
 }
 return true;
}
console.log(compareTwoArrays(arr1,arr2))